import google.generativeai as genai

from app.core.config import settings


class GeminiService:

    def __init__(self):

        genai.configure(
            api_key=settings.GEMINI_API_KEY
        )

        self.model = genai.GenerativeModel(
            model_name="gemini-1.5-flash"
        )

    async def generate_content(
        self,
        prompt: str
    ) -> str:

        try:

            response = self.model.generate_content(
                prompt
            )

            return response.text

        except Exception as error:

            print("\n========== GEMINI ERROR ==========")
            print(error)
            print("==================================\n")

            return (
                "AI analysis temporarily unavailable."
            )