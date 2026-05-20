from fastapi import APIRouter

from app.services.extraction_service import ExtractionService
from app.graph.neo4j_service import Neo4jService

router = APIRouter()

extraction_service = ExtractionService()
neo4j_service = Neo4jService()


@router.post("/upload-document")

async def upload_document(payload: dict):

    document_text = payload.get("text", "")

    result = await extraction_service.extract_graph_data(
        document_text
    )

    await neo4j_service.create_graph_data(
        result.entities,
        result.relationships
    )

    return {
        "message": "Document processed successfully",
        "entities": result.entities,
        "relationships": result.relationships
    }