import {
  LayoutDashboard,
  BrainCircuit,
  ShieldAlert,
  Network,
  Settings
} from "lucide-react";

export default function Sidebar() {

  const items = [
    {
      title: "Dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Intelligence",
      icon: BrainCircuit
    },
    {
      title: "Risk Center",
      icon: ShieldAlert
    },
    {
      title: "Dependencies",
      icon: Network
    },
    {
      title: "Settings",
      icon: Settings
    }
  ];

  return (
    <aside className="
      fixed
      left-0
      top-0
      h-screen
      w-72
      bg-zinc-950
      border-r
      border-zinc-800
      p-6
      z-50
    ">

      <div className="mb-10">

        <h1 className="
          text-3xl
          font-bold
          text-white
          mb-2
        ">
          NexusGraph
        </h1>

        <p className="
          text-zinc-500
          text-sm
        ">
          Enterprise Intelligence
        </p>

      </div>

      <nav className="space-y-3">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                flex
                items-center
                gap-4
                px-4
                py-4
                rounded-2xl
                bg-zinc-900
                hover:bg-zinc-800
                transition
                cursor-pointer
                text-zinc-200
              "
            >

              <Icon size={20} />

              <span className="
                font-medium
              ">
                {item.title}
              </span>

            </div>

          );
        })}

      </nav>

    </aside>
  );
}