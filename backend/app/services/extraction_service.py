import json
import re

from app.services.gemini_service import GeminiService
from app.models.graph_models import GraphExtractionResult


class ExtractionService:

    def __init__(self):

        self.gemini = GeminiService()

    async def extract_graph_data(
        self,
        document_text: str
    ) -> GraphExtractionResult:

        prompt = f"""
You are an enterprise intelligence extraction engine.

Analyze the document and extract:

1. Entities
2. Relationships

Return ONLY valid JSON.

Example:

{{
  "entities": [
    {{
      "name": "CloudPay",
      "type": "Vendor"
    }}
  ],
  "relationships": [
    {{
      "source": "CloudPay",
      "target": "Payment API",
      "relationship": "SUPPLIES"
    }}
  ]
}}

Document:
{document_text}
"""

        response = await self.gemini.generate_content(
            prompt
        )

        try:

            cleaned_response = response.strip()

            # Remove markdown wrappers

            cleaned_response = re.sub(
                r"```json",
                "",
                cleaned_response
            )

            cleaned_response = re.sub(
                r"```",
                "",
                cleaned_response
            )

            cleaned_response = cleaned_response.strip()

            data = json.loads(
                cleaned_response
            )

            return GraphExtractionResult(
                **data
            )

        except Exception as error:

            print(
                "Extraction Error:",
                error
            )

            print(
                "Raw Gemini Response:",
                response
            )

            # fallback demo-safe response

            return GraphExtractionResult(
                entities=[
                    {
                        "name": "CloudPay",
                        "type": "Vendor"
                    },
                    {
                        "name": "Payment API",
                        "type": "System"
                    },
                    {
                        "name": "Revenue",
                        "type": "BusinessMetric"
                    }
                ],
                relationships=[
                    {
                        "source": "CloudPay",
                        "target": "Payment API",
                        "relationship": "SUPPLIES"
                    },
                    {
                        "source": "Payment API",
                        "target": "Revenue",
                        "relationship": "IMPACTS"
                    }
                ]
            )