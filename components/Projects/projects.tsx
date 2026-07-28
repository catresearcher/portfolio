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
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        {info.projects.map((p, idx) => (
          <div
            key={`${p.name}-${idx}`}
            className="w-full flex flex-col bg-card rounded-md"
          >
            <Image
              src={p.thumbnail}
              width={1000}
              height={1000}
              className="w-full h-full rounded-md"
              alt="thumbnail"
            />
            <div className="border-t-2 border-b-2 w-full p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">{p.name}</h1>
                <p className="text-muted-foreground text-sm">{p.length}</p>
              </div>
              <p className="text-muted-foreground text-sm">{p.description}</p>
              <div className="flex flex-wrap space-x-1 space-y-2">
                {p.stack.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <Badge
                      key={`${s.name}-${idx}`}
                      className="bg-background flex items-center space-x-2 rounded"
                    >
                      <Icon className="" />
                      {s.name}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="p-1 flex items-center">
              <Button
                onClick={() =>
                  window.open(p.link, "_blank", "noopener,noreferrer")
                }
                className="bg-background w-full h-9 rounded cursor-pointer hover:bg-background/75"
              >
                <Github />
                View Code
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
