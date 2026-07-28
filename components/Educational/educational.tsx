"use client";
import { useInfo } from "@/context/infoContext";
import Image from "next/image";

export default function Education() {
  const { info } = useInfo();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-primary-foreground">
        Education
      </h1>

      <div className="space-y-4">
        {info.education.map((exp, idx) => (
          <div
            key={`${exp.name}-${idx}`}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 rounded-full border-4 p-1">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                  <Image
                    src={exp.logo}
                    alt={exp.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="font-medium text-sm sm:text-base">{exp.name}</h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {exp.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-light text-muted-foreground">
              {exp.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
