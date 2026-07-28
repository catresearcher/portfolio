import {
  Document,
  ExpressJS,
  Git,
  Github,
  LinkedIn,
  Mysql,
  Nextjs,
  Node,
  Postgres,
  Prisma,
  React,
  Shadcn,
  Tailwind,
  Typescript,
} from "@/components/assets";
import { InfoProps } from "@/types/info";

export const info: InfoProps = {
  based: "Finland",
  hero_text: "Hi, I'm Aleksi Tiainen",
  hero_description: `I'm an 18-year-old full-stack developer.

I've been coding for around four years, constantly improving my skills and exploring new technologies. I working with both the frontend and backend.

I'm always looking for opportunities to learn, take on new challenges, and create projects that push my skills further.`,
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
      name: "Github",
      description: "Version Control",
      icon: {
        component: Github,
        color: "bg-gray-600/20",
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
  experience: [
    {
      name: "Flying Mountains Oy",
      title: "Full-stack Developer",
      length: "2026 Feb - 2026 Jun",
      description:
        "Architected and developed an MVP for a B2B sales intelligence platform featuring interactive map-based lead tracking. Enabled organizations to manage sales opportunities through map markers and implemented dynamic PDF offer generation for printing and sharing with clients.",
    },
  ],
  projects: [
    {
      name: "Sellpad",
      status: "WIP",
      description:
        "A modern digital storefront platform, built with Next.js, TypeScript, ExpressJS, Prisma, and PostgreSQL.",
      stack: [
        {
          name: "Next.Js",
          icon: Nextjs,
        },
        {
          name: "ExpressJs",
          icon: ExpressJS,
        },
        {
          name: "Prisma",
          icon: Prisma,
        },
        {
          name: "PostgresSQL",
          icon: Postgres,
        },
        {
          name: "Typescript",
          icon: Typescript,
        },
        {
          name: "Shadcn",
          icon: Shadcn,
        },
      ],
      link: "https://github.com/catresearcher/Sellpad",
      length: "2026 May - Present",
      thumbnail:
        "https://cdn.discordapp.com/attachments/972845233329041508/1531482342777032915/606025890-a7431496-6cef-45f4-a8bc-661d12e63215.png?ex=6a695f94&is=6a680e14&hm=3c30b6e1f25b38b95c4ec93a462d5009e65faf3fb723d09f54765f65f01f1103&",
    },
  ],
  education: [
    {
      name: "Omnia Leppävaara",
      title: "Tieto- ja viestintätekniikan perustutkinto",
      logo: "/Omnia.png",
      length: "2024 Aug - 2026 Jun",
    },
  ],
};
