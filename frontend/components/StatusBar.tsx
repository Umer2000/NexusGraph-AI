export default function StatusBar() {

  return (
    <div className="
      flex
      items-center
      gap-4
      text-sm
      text-zinc-400
    ">

      <div className="flex items-center gap-2">
        <div className="
          w-2
          h-2
          rounded-full
          bg-green-500
        " />
        Gemini Active
      </div>

      <div className="flex items-center gap-2">
        <div className="
          w-2
          h-2
          rounded-full
          bg-green-500
        " />
        Neo4j Connected
      </div>

      <div className="flex items-center gap-2">
        <div className="
          w-2
          h-2
          rounded-full
          bg-yellow-500
        " />
        3 Active Alerts
      </div>

    </div>
  );
}