"use client";

import { useEffect, useState } from "react";

const incidents = [

  {
    severity: "Critical",
    message:
      "CloudPay API latency exceeded threshold."
  },

  {
    severity: "High",
    message:
      "Checkout transaction failures increasing."
  },

  {
    severity: "Medium",
    message:
      "Support ticket escalation detected."
  },

  {
    severity: "Critical",
    message:
      "Revenue risk alerts triggered."
  },

  {
    severity: "High",
    message:
      "Vendor dependency instability detected."
  }
];

export default function LiveIncidentFeed() {

  const [feed, setFeed] =
    useState<any[]>([]);

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setFeed((prev) => [

        incidents[index % incidents.length],

        ...prev
      ].slice(0, 5));

      index++;

    }, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  return (
    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-3xl
      p-8
      mb-10
    ">

      <div className="
        flex
        items-center
        justify-between
        mb-6
      ">

        <h2 className="
          text-2xl
          font-semibold
        ">
          Live Incident Feed
        </h2>

        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-green-400
        ">

          <div className="
            w-2
            h-2
            rounded-full
            bg-green-500
            animate-pulse
          " />

          Live Monitoring

        </div>

      </div>

      <div className="space-y-4">

        {feed.map((incident, index) => (

          <div
            key={index}
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-2xl
              p-4
              animate-pulse
            "
          >

            <div className="
              flex
              items-center
              justify-between
              mb-2
            ">

              <span className="
                text-red-400
                text-sm
                font-semibold
              ">
                {incident.severity}
              </span>

              <span className="
                text-zinc-500
                text-xs
              ">
                Just now
              </span>

            </div>

            <p className="
              text-zinc-300
            ">
              {incident.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}