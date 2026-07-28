import { ComponentType } from "react";

export type InfoProps = {
  based: string;
  hero_text: string;
  hero_description: string;
  socials: {
    name: string;
    icon: ComponentType<{ className?: string }>;
    link: string;
  }[];
  technologies: {
    name: string;
    description: string;
    icon: {
      component: ComponentType<{ className?: string }>;
      color: string;
    };
  }[];
  experience: {
    name: string;
    title: string;
    length: string;
    description: string;
  }[];
  projects: {
    name: string;
    status: string;
    description: string;
    stack: { name: string; icon: ComponentType<{ className?: string }> }[];
    link: string;
    thumbnail: string;
    length: string;
  }[];
  education: {
    name: string;
    title: string;
    logo: string;
    length: string;
  }[];
};
