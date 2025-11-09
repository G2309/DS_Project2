
## Habilitar

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

.venv\Scripts\Activate.ps1

## Ejecutar
uvicorn main:app --reload