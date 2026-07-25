import {
  Git,
  Mysql,
  Nextjs,
  Node,
  Postgres,
  Prisma,
  React,
  Tailwind,
  Typescript,
} from "../assets";

const technologies = [
  {
    name: "React",
    description: "JavaScript Library",
    icon: {
      component: <React className="h-8 w-8" />,
      color: "bg-cyan-500/20",
    },
  },
  {
    name: "NextJs",
    description: "React framework",
    icon: {
      component: <Nextjs className="h-8 w-8" />,
      color: "bg-neutral-600/20",
    },
  },
  {
    name: "Typescript",
    description: "Better Javascript",
    icon: {
      component: <Typescript className="h-8 w-8" />,
      color: "bg-sky-600/20",
    },
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    icon: {
      component: <Tailwind className="h-8 w-8" />,
      color: "bg-blue-500/20",
    },
  },
  {
    name: "Git",
    description: "Version Control",
    icon: {
      component: <Git className="h-8 w-8" />,
      color: "bg-orange-600/20",
    },
  },
  {
    name: "Node.Js",
    description: "Backend",
    icon: {
      component: <Prisma className="h-8 w-8" />,
      color: "bg-emerald-600/20",
    },
  },
  {
    name: "Prisma",
    description: "ORM",
    icon: {
      component: <Prisma className="h-8 w-8" />,
      color: "bg-sky-800/20",
    },
  },
  {
    name: "MySQL",
    description: "Database system",
    icon: {
      component: <Mysql className="h-8 w-8" />,
      color: "bg-sky-500/20",
    },
  },
  {
    name: "PostgresSQL",
    description: "Database system",
    icon: {
      component: <Postgres className="h-8 w-8" />,
      color: "bg-cyan-500/20",
    },
  },
];

export default function Tech() {
  return (
    <div className="space-y-6 ">
      <h1 className="text-3xl font-medium text-primary-foreground">
        Current Technologies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {technologies.map((t) => (
          <div
            key={t.name}
            className="flex w-full items-center gap-4 rounded-md bg-card p-2"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-md ${t.icon.color}`}
            >
              {t.icon.component}
            </span>

            <div>
              <h1 className="text-lg font-medium">{t.name}</h1>
              <p className="text-sm text-muted-foreground">{t.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
