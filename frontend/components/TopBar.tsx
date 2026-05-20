export default function TopBar() {

  return (
    <div className="
      flex
      items-center
      justify-between
      mb-10
    ">

      <div>

        <h2 className="
          text-3xl
          font-bold
          text-white
        ">
          Operational Command Center
        </h2>

        <p className="
          text-zinc-400
          mt-1
        ">
          Real-time enterprise intelligence monitoring
        </p>

      </div>

      <div className="
        flex
        items-center
        gap-6
      ">

        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-zinc-300
        ">

          <div className="
            w-2
            h-2
            rounded-full
            bg-green-500
            animate-pulse
          " />

          Gemini Active

        </div>

        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-zinc-300
        ">

          <div className="
            w-2
            h-2
            rounded-full
            bg-green-500
            animate-pulse
          " />

          Neo4j Connected

        </div>

        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-zinc-300
        ">

          <div className="
            w-2
            h-2
            rounded-full
            bg-yellow-500
            animate-pulse
          " />

          3 Active Alerts

        </div>

      </div>

    </div>
  );
}