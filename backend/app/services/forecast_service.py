import numpy as np


class ForecastService:

    def forecast_trend(
        self,
        values
    ):

        if len(values) < 2:

            return {
                "prediction": values[-1]
                if values else 0,
                "trend": "stable"
            }

        x = np.arange(len(values))

        y = np.array(values)

        slope = np.polyfit(x, y, 1)[0]

        next_value = y[-1] + slope

        trend = "stable"

        if slope > 0:
            trend = "increasing"

        elif slope < 0:
            trend = "decreasing"

        return {
            "prediction": round(float(next_value), 2),
            "trend": trend
        }