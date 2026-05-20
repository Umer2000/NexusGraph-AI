from fastapi import APIRouter

from app.services.anomaly_service import AnomalyService
from app.services.reasoning_service import ReasoningService
from app.services.insight_service import InsightService

router = APIRouter()

anomaly_service = AnomalyService()
reasoning_service = ReasoningService()
insight_service = InsightService()


@router.post("/detect-anomalies")
async def detect_anomalies(payload: dict):

    values = payload.get("values", [])

    results = anomaly_service.detect_anomalies(values)

    return {
        "results": results
    }


@router.post("/explain-anomaly")
async def explain_anomaly(payload: dict):

    anomaly = payload.get("anomaly")
    graph_context = payload.get("graph_context")

    explanation = await reasoning_service.explain_anomaly(
        anomaly,
        graph_context
    )

    return {
        "analysis": explanation
    }


@router.post("/generate-insights")
async def generate_insights(payload: dict):

    operational_data = payload.get("data")

    insights = await insight_service.generate_executive_insights(
        operational_data
    )

    return {
        "insights": insights
    }