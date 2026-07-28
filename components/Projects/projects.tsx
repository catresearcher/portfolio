"use client";
import { useInfo } from "@/context/infoContext";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github } from "../assets";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Projects() {
  const { info } = useInfo();
  const router = useRouter();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-primary-foreground">Projects</h1>
      <div className="grid grid-cols-1 space-y-4">
        {info.projects.map((p, idx) => (
          <div
            key={`${p.name}-${idx}`}
            onClick={() => window.open(p.link, "_blank", "noopener,noreferrer")}
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-md border transition-all duration-150"
          >
            <Image
              src={p.thumbnail}
              alt={p.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 px-5">
              <div className="flex flex-col gap-3 transition-transform duration-300 group-hover:-translate-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.name}</h3>

                  <p className="line-clamp-2 text-sm text-gray-300">
                    {p.description}
                  </p>
                </div>
                <div className="hidden sm:flex flex-wrap space-x-2 space-y-2">
                  {p.stack.map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <Badge
                        className="bg-card rounded h-7 flex items-center space-x-1 text-sm"
                        key={`${s.name}-${idx}`}
                      >
                        <Icon className="size-8" />
                        {s.name}
                      </Badge>
                    );
                  })}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(p.link, "_blank", "noopener,noreferrer");
                  }}
                  className="inline-flex w-fit items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-white backdrop-blur
                 opacity-0 translate-y-2
                 transition-all duration-300
                 group-hover:translate-y-0 group-hover:opacity-100
                 hover:bg-white/20"
                >
                  <Github className="h-4 w-4" />
                  Source
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
