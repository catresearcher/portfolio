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
};
