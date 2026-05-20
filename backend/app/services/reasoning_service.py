from app.services.gemini_service import GeminiService


class ReasoningService:
    def __init__(self):
        self.gemini = GeminiService()

    async def explain_anomaly(
        self,
        anomaly_data,
        graph_context
    ):

        prompt = f"""
You are an enterprise operations analyst.

Analyze the anomaly and explain:

1. Possible root cause
2. Business impact
3. Operational dependencies
4. Recommended actions

Anomaly:
{anomaly_data}

Graph Context:
{graph_context}

Generate a concise enterprise analysis report.
"""

        response = await self.gemini.generate_content(prompt)

        return response