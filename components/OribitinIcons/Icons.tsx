import {
  ExpressJS,
  Git,
  Github,
  Nextjs,
  Node,
  Postgres,
  Prisma,
  React,
  Typescript,
} from "../assets";
import { OrbitingCircles } from "../ui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[375px] w-[375px] items-center justify-center overflow-visible">
      <OrbitingCircles iconSize={26} radius={65} speed={1}>
        <Github className="size-10" />
        <Git className="size-10" />
        <Typescript className="size-10" />
        <Node className="size-10" />
        <Postgres className="size-10" />
      </OrbitingCircles>

      <OrbitingCircles iconSize={36} radius={125} reverse speed={2}>
        <React className="size-10" />
        <ExpressJS className="size-10" />
        <Prisma className="size-10" />
        <Nextjs className="size-10" />
      </OrbitingCircles>
    </div>
  );
}
