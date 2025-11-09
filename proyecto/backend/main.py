from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import numpy as np
from typing import List, Optional

app = FastAPI(title="ML Model API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variable to store loaded model
model = None

# Pydantic models for request/response
class PredictionRequest(BaseModel):
    features: List[float]

class PredictionResponse(BaseModel):
    prediction: float
    status: str

class HealthResponse(BaseModel):
    status: str
    model_loaded: bool

# Load model on startup
@app.on_event("startup")
async def load_model():
    global model
    try:
        with open("model.pkl", "rb") as f:
            model = pickle.load(f)
        print("Model loaded successfully")
    except FileNotFoundError:
        print("Warning: model.pkl not found. Please add your model file.")
    except Exception as e:
        print(f"Error loading model: {e}")

@app.get("/", response_model=HealthResponse)
async def root():
    """Health check endpoint"""
    return {
        "status": "running",
        "model_loaded": model is not None
    }

@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "model_loaded": model is not None
    }

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    """Make prediction using loaded model"""
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    try:
        # Convert features to numpy array
        features_array = np.array(request.features).reshape(1, -1)
        
        # Make prediction
        prediction = model.predict(features_array)[0]
        
        return {
            "prediction": float(prediction),
            "status": "success"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

@app.post("/predict-batch")
async def predict_batch(requests: List[PredictionRequest]):
    """Make batch predictions"""
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    try:
        features_list = [req.features for req in requests]
        features_array = np.array(features_list)
        
        predictions = model.predict(features_array)
        
        return {
            "predictions": [float(p) for p in predictions],
            "count": len(predictions),
            "status": "success"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Batch prediction error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)