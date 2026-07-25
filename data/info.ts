import {
  Git,
  Github,
  LinkedIn,
  Mysql,
  Nextjs,
  Node,
  Postgres,
  Prisma,
  React,
  Tailwind,
  Typescript,
} from "@/components/assets";
import { InfoProps } from "@/types/info";

export const info: InfoProps = {
  based: "Finland",
  hero_text: "Hi, I'm Aleksi Tiainen",
  hero_description:
    "I'm an 18-year-old full-stack developer from Finland with a passion for building fast, responsive, and user-friendly web applications. I enjoy solving problems and learning new technologies.",
  socials: [
    {
      name: "Github",
      icon: Github,
      link: "https://github.com/catresearcher",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/aleksi-tiainen-78391741b",
    },
  ],
  technologies: [
    {
      name: "React",
      description: "JavaScript Library",
      icon: {
        component: React,
        color: "bg-cyan-500/20",
      },
    },
    {
      name: "NextJs",
      description: "React framework",
      icon: {
        component: Nextjs,
        color: "bg-neutral-600/20",
      },
    },
    {
      name: "Typescript",
      description: "Better Javascript",
      icon: {
        component: Typescript,
        color: "bg-sky-600/20",
      },
    },
    {
      name: "Tailwind",
      description: "CSS framework",
      icon: {
        component: Tailwind,
        color: "bg-blue-500/20",
      },
    },
    {
      name: "Git",
      description: "Version Control",
      icon: {
        component: Git,
        color: "bg-orange-600/20",
      },
    },
    {
      name: "Node.Js",
      description: "Backend",
      icon: {
        component: Node,
        color: "bg-emerald-600/20",
      },
    },
    {
      name: "Prisma",
      description: "ORM",
      icon: {
        component: Prisma,
        color: "bg-sky-800/20",
      },
    },
    {
      name: "MySQL",
      description: "Database system",
      icon: {
        component: Mysql,
        color: "bg-sky-500/20",
      },
    },
    {
      name: "PostgresSQL",
      description: "Database system",
      icon: {
        component: Postgres,
        color: "bg-cyan-500/20",
      },
    },
  ],
};
