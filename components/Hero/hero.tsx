import { Location } from "../assets";
import Socials from "./socials";

export default function Hero() {
  return (
    <div className="space-y-4 w-[95%] sm:w-[75%]">
      <span className="flex items-center space-x-1 text-foreground font-medium">
        <Location className="size-4" />
        <p className="text-lg">Finland</p>
      </span>
      <h1 className="font-medium text-4xl leading-tight">
        Hi, I'm Aleksi Tiainen
        <br />
        <span className="text-primary">Full-Stack Developer</span>
      </h1>
      <p className="max-w-lg text-muted-foreground leading-7">
        I'm an 18-year-old full-stack developer from Finland with a passion for
        building fast, responsive, and user-friendly web applications. I enjoy
        solving problems and learning new technologies.
      </p>
      <Socials />
    </div>
  );
}
