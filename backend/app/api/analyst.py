from fastapi import APIRouter

from app.services.gemini_service import GeminiService

router = APIRouter()

gemini_service = GeminiService()


@router.post("/ask-analyst")

async def ask_analyst(payload: dict):

    question = payload.get(
        "question",
        ""
    )

    context = payload.get(
        "context",
        ""
    )

    prompt = f"""
You are NexusGraph AI,
an enterprise operational intelligence analyst.

Analyze the enterprise context and answer
the user's operational intelligence question.

Enterprise Context:
{context}

Question:
{question}

Provide:
- concise operational analysis
- business impact
- important dependencies
- recommended actions
"""

    response = await gemini_service.generate_content(
        prompt
    )

    return {
        "answer": response
    }