import { Finland } from "../assets";
import { IconCloudDemo } from "../IconCloud/iconCloud";
import Socials from "./socials";

export default function Hero() {
  return (
    <div className="flex items-center justify-between w-[95%] sm:w-full">
      <div className="space-y-4 w-full">
        <div className="inline-flex items-center gap-2 text-base text-muted-foreground">
          <Finland size="15" />
          <span>Based in Finland</span>
        </div>
        <h1 className="font-medium text-5xl leading-tight">
          Hi, I'm Aleksi Tiainen
        </h1>
        <p className="text-foreground font-medium">Full-Stack Developer</p>
        <Socials />
      </div>
      <IconCloudDemo />
    </div>
  );
}
