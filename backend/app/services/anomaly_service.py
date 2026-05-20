import numpy as np

from sklearn.ensemble import IsolationForest


class AnomalyService:
    def __init__(self):

        self.model = IsolationForest(
            contamination=0.1,
            random_state=42
        )

    def detect_anomalies(self, values):

        data = np.array(values).reshape(-1, 1)

        predictions = self.model.fit_predict(data)

        results = []

        for index, prediction in enumerate(predictions):

            results.append({
                "value": values[index],
                "is_anomaly": prediction == -1
            })

        return results