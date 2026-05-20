from app.services.gemini_service import GeminiService


class InsightService:
    def __init__(self):
        self.gemini = GeminiService()

    async def generate_executive_insights(
        self,
        operational_data
    ):

        prompt = f"""
You are an enterprise intelligence system.

Analyze the operational data and generate:

1. Key operational risks
2. Emerging trends
3. Important anomalies
4. Executive recommendations

Data:
{operational_data}

Return a professional enterprise summary.
"""

        response = await self.gemini.generate_content(prompt)

        return response