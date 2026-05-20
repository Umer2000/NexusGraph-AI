"use client";

import { useEffect, useState } from "react";

export default function LiveMetrics() {

  const [risks, setRisks] =
    useState(12);

  const [incidents, setIncidents] =
    useState(37);

  const [dependencies, setDependencies] =
    useState(84);

  useEffect(() => {

    const interval = setInterval(() => {

      setRisks((prev) =>
        prev + Math.floor(Math.random() * 2)
      );

      setIncidents((prev) =>
        prev + Math.floor(Math.random() * 3)
      );

      setDependencies((prev) =>
        prev + Math.floor(Math.random() * 1)
      );

    }, 5000);

    return () =>
      clearInterval(interval);

  }, []);

  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
      mb-10
    ">

      {/* Risks */}

      <div className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-8
      ">

        <p className="
          text-zinc-400
          mb-3
        ">
          Active Risks
        </p>

        <div className="
          flex
          items-end
          justify-between
        ">

          <h2 className="
            text-5xl
            font-bold
          ">
            {risks}
          </h2>

          <span className="
            text-red-400
            text-sm
          ">
            ↑ Live
          </span>

        </div>

      </div>

      {/* Incidents */}

      <div className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-8
      ">

        <p className="
          text-zinc-400
          mb-3
        ">
          Operational Incidents
        </p>

        <div className="
          flex
          items-end
          justify-between
        ">

          <h2 className="
            text-5xl
            font-bold
          ">
            {incidents}
          </h2>

          <span className="
            text-yellow-400
            text-sm
          ">
            ↑ Escalating
          </span>

        </div>

      </div>

      {/* Dependencies */}

      <div className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-8
      ">

        <p className="
          text-zinc-400
          mb-3
        ">
          Vendor Dependencies
        </p>

        <div className="
          flex
          items-end
          justify-between
        ">

          <h2 className="
            text-5xl
            font-bold
          ">
            {dependencies}
          </h2>

          <span className="
            text-green-400
            text-sm
          ">
            Stable
          </span>

        </div>

      </div>

    </div>
  );
}