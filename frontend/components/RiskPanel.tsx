export default function RiskPanel() {

  const risks = [
    {
      title: "Payment Infrastructure",
      severity: "Critical"
    },
    {
      title: "Vendor Dependency",
      severity: "High"
    },
    {
      title: "Support Escalation",
      severity: "Medium"
    }
  ];

  return (
    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-8
      mb-10
    ">

      <h2 className="
        text-2xl
        font-semibold
        mb-5
      ">
        Live Risk Intelligence
      </h2>

      <div className="space-y-4">

        {risks.map((risk, index) => (

          <div
            key={index}
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-xl
              p-4
              flex
              items-center
              justify-between
            "
          >

            <span className="font-medium">
              {risk.title}
            </span>

            <span className="
              text-sm
              px-3
              py-1
              rounded-full
              bg-red-500/20
              text-red-400
            ">
              {risk.severity}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}