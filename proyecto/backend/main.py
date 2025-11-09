from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Optional
import os
import tempfile
from functions_model import load_deit_from_pkl, predict_single, VERTEBRAE_LABELS

app = FastAPI(title="DICOM Vertebrae Classification API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variables
model = None
device = None
MODEL_PATH = "deit_best_model.pkl"

# Pydantic models
class PredictionResponse(BaseModel):
    predictions: Dict[str, Dict[str, float]]
    status: str

class HealthResponse(BaseModel):
    status: str
    model_loaded: bool
    vertebrae_labels: list

# Load model on startup
@app.on_event("startup")
async def load_model():
    global model, device
    try:
        if not os.path.exists(MODEL_PATH):
            print(f"Warning: {MODEL_PATH} not found. Please add your model file.")
            return
        
        model, device = load_deit_from_pkl(MODEL_PATH)
        print(f"Model loaded successfully on device: {device}")
    except Exception as e:
        print(f"Error loading model: {e}")

@app.get("/", response_model=HealthResponse)
async def root():
    """Health check endpoint"""
    return {
        "status": "running",
        "model_loaded": model is not None,
        "vertebrae_labels": VERTEBRAE_LABELS
    }

@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy" if model is not None else "model not loaded",
        "model_loaded": model is not None,
        "vertebrae_labels": VERTEBRAE_LABELS
    }

@app.post("/predict", response_model=PredictionResponse)
async def predict(
    file: UploadFile = File(...),
    threshold: Optional[float] = 0.5
):
    """
    Recibe un archivo DICOM y retorna las predicciones de las vértebras
    
    Parameters:
    - file: Archivo DICOM (.dcm)
    - threshold: Umbral de clasificación (default: 0.5)
    """
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    # Validar extensión del archivo
    if not file.filename.endswith('.dcm'):
        raise HTTPException(status_code=400, detail="File must be a DICOM (.dcm) file")
    
    try:
        # Guardar archivo temporalmente
        with tempfile.NamedTemporaryFile(delete=False, suffix='.dcm') as tmp_file:
            contents = await file.read()
            tmp_file.write(contents)
            tmp_path = tmp_file.name
        
        # Hacer predicción
        result = predict_single(tmp_path, model, device, threshold=threshold)
        
        # Limpiar archivo temporal
        os.unlink(tmp_path)
        
        return {
            "predictions": result,
            "status": "success"
        }
    
    except Exception as e:
        # Limpiar archivo temporal en caso de error
        if 'tmp_path' in locals() and os.path.exists(tmp_path):
            os.unlink(tmp_path)
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

@app.post("/predict-path")
async def predict_from_path(
    dicom_path: str,
    threshold: Optional[float] = 0.5
):
    """
    Hacer predicción desde una ruta local (para testing)
    
    Parameters:
    - dicom_path: Ruta al archivo DICOM
    - threshold: Umbral de clasificación (default: 0.5)
    """
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    if not os.path.exists(dicom_path):
        raise HTTPException(status_code=404, detail="DICOM file not found")
    
    try:
        result = predict_single(dicom_path, model, device, threshold=threshold)
        
        return {
            "predictions": result,
            "status": "success"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
