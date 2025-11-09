import os
import numpy as np
import pydicom
import torch
import timm
from torch import nn
import cv2

IMG_SIZE = 224
VERTEBRAE_LABELS = ['C1','C2','C3','C4','C5','C6','C7']

def build_deit_model(num_classes, pretrained=False):
    model = timm.create_model('deit_base_patch16_224', pretrained=pretrained)
    if hasattr(model, 'head'):
        in_feats = model.head.in_features
        model.head = nn.Linear(in_feats, num_classes)
    elif hasattr(model, 'classifier'):
        in_feats = model.classifier.in_features
        model.classifier = nn.Linear(in_feats, num_classes)
    return model

def _clean_state_dict(sd):
    if any(k.startswith('module.') for k in sd.keys()):
        from collections import OrderedDict
        new_sd = OrderedDict()
        for k, v in sd.items():
            new_sd[k.replace('module.', '', 1)] = v
        return new_sd
    return sd

def load_deit_from_pkl(pkl_path, device=None):
    device = torch.device(device if device is not None else ('cuda:0' if torch.cuda.is_available() else 'cpu'))
    checkpoint = torch.load(pkl_path, map_location=device)
    if isinstance(checkpoint, dict):
        state = checkpoint.get('model_state', checkpoint.get('state_dict', checkpoint))
    else:
        state = checkpoint
    state = _clean_state_dict(state)
    model = build_deit_model(num_classes=len(VERTEBRAE_LABELS), pretrained=False)
    model.load_state_dict(state)
    model.to(device)
    model.eval()
    return model, device

def preprocess_dicom(dicom_path, img_size=IMG_SIZE):
    ds = pydicom.dcmread(dicom_path)
    img = ds.pixel_array.astype(np.float32)
    if hasattr(ds, 'RescaleIntercept') and hasattr(ds, 'RescaleSlope'):
        img = img * ds.RescaleSlope + ds.RescaleIntercept
    img = np.clip(img, -1000, 2000)
    img = (img - img.min()) / (img.max() - img.min() + 1e-6) * 255.0
    img = img.astype(np.uint8)
    img = cv2.cvtColor(img, cv2.COLOR_GRAY2RGB)
    img = cv2.resize(img, (img_size, img_size), interpolation=cv2.INTER_LINEAR)
    img = img.astype(np.float32) / 255.0
    img = np.transpose(img, (2,0,1))
    tensor = torch.from_numpy(img).unsqueeze(0).float()
    return tensor

def predict_single(dicom_path, model, device, threshold=0.5):
    """
    Hace predicción sobre un archivo DICOM
    """
    x = preprocess_dicom(dicom_path)
    x = x.to(device)
    with torch.no_grad():
        out = model(x)
        probs = torch.sigmoid(out).cpu().numpy().squeeze()
    labels = (probs >= threshold).astype(int)
    result = {v: {'prob': float(probs[i]), 'label': int(labels[i])} for i, v in enumerate(VERTEBRAE_LABELS)}
    return result