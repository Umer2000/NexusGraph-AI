export default function AlertFeed() {

  const alerts = [

    {
      severity: "Critical",
      message:
        "CloudPay outage impacting checkout systems."
    },

    {
      severity: "High",
      message:
        "Support ticket escalation increased 42%."
    },

    {
      severity: "Medium",
      message:
        "Revenue risk detected in e-commerce division."
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
        Executive Alert Feed
      </h2>

      <div className="space-y-4">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-xl
              p-4
            "
          >

            <div className="
              flex
              items-center
              justify-between
              mb-2
            ">

              <span className="
                text-sm
                font-semibold
                text-red-400
              ">
                {alert.severity}
              </span>

            </div>

            <p className="text-zinc-300">
              {alert.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}