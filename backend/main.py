from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import conversation

# Create FastAPI app with docs at /api/docs (good choice for clarity)
app = FastAPI(
    title="Chat API",
    description="FastAPI backend for the chat application",
    version="0.1.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
)

# Configure CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    # Update these based on your frontend URL
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount routers with prefix
app.include_router(
    conversation.router,
    prefix="/api/v1",
    tags=["conversations"],
)

# Health check endpoint
@app.get("/api/health", tags=["health"])
async def health_check():
    return {"status": "healthy"}