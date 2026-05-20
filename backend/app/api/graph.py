from fastapi import APIRouter

from app.graph.neo4j_service import Neo4jService

router = APIRouter()

neo4j_service = Neo4jService()


@router.get("/graph")

async def get_graph():

    graph_data = await neo4j_service.get_graph_data()

    return graph_data