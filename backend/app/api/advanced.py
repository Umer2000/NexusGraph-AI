from fastapi import APIRouter

from app.services.propagation_service import PropagationService
from app.services.risk_service import RiskService
from app.services.forecast_service import ForecastService

router = APIRouter()

propagation_service = PropagationService()
risk_service = RiskService()
forecast_service = ForecastService()


@router.post("/trace-propagation")

async def trace_propagation(payload: dict):

    relationships = payload.get(
        "relationships",
        []
    )

    starting_node = payload.get(
        "starting_node"
    )

    chain = propagation_service.trace_propagation(
        relationships,
        starting_node
    )

    return {
        "propagation_chain": chain
    }


@router.post("/risk-score")

async def risk_score(payload: dict):

    anomaly_count = payload.get(
        "anomaly_count",
        0
    )

    dependency_count = payload.get(
        "dependency_count",
        0
    )

    propagation_depth = payload.get(
        "propagation_depth",
        0
    )

    score = risk_service.calculate_risk_score(
        anomaly_count,
        dependency_count,
        propagation_depth
    )

    classification = risk_service.classify_risk(
        score
    )

    return {
        "risk_score": score,
        "classification": classification
    }


@router.post("/forecast")

async def forecast(payload: dict):

    values = payload.get("values", [])

    result = forecast_service.forecast_trend(
        values
    )

    return result