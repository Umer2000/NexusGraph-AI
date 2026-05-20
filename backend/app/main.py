from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.upload import router as upload_router
from app.api.intelligence import router as intelligence_router
from app.api.graph import router as graph_router
from app.api.advanced import router as advanced_router
from app.api.analyst import router as analyst_router


app = FastAPI(
    title="NexusGraph AI",
    version="0.1.0"
)

# Enable frontend-backend communication

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes

app.include_router(upload_router)
app.include_router(intelligence_router)
app.include_router(graph_router)
app.include_router(advanced_router)
app.include_router(analyst_router)


@app.get("/")
async def root():

    return {
        "message": "NexusGraph AI backend is running"
    }