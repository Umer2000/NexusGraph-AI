class RiskService:

    def calculate_risk_score(
        self,
        anomaly_count,
        dependency_count,
        propagation_depth
    ):

        score = (
            anomaly_count * 20 +
            dependency_count * 10 +
            propagation_depth * 15
        )

        return min(score, 100)

    def classify_risk(
        self,
        score
    ):

        if score >= 80:
            return "Critical"

        if score >= 60:
            return "High"

        if score >= 40:
            return "Medium"

        return "Low"