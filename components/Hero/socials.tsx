import Link from "next/link";
import { Github, LinkedIn, Location } from "../assets";

export default function Socials() {
  return (
    <div className="flex items-center space-x-4 text-lg text-muted-foreground/30">
      <Link
        href={"https://github.com/catresearcher"}
        className="flex items-center space-x-1 hover:text-primary transation-all duration-150"
      >
        <Github className="size-5" />
        <p className="font-medium hidden sm:block">Github</p>
      </Link>
      <p>/</p>

      <Link
        href={"https://www.linkedin.com/in/aleksi-tiainen-78391741b"}
        className="flex items-center space-x-1 hover:text-primary transation-all duration-150"
      >
        <LinkedIn className="size-5" />
        <p className="font-medium hidden sm:block">LinkedIn</p>
      </Link>
    </div>
  );
}
