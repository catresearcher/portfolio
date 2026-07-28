"use client";
import { useInfo } from "@/context/infoContext";

export default function Career() {
  const { info } = useInfo();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-primary-foreground">
        Work Experience
      </h1>
      <div className="space-y-4">
        {info.experience.map((exp, idx) => (
          <div
            key={`${exp.name}-${idx}`}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full p-1 border-4 ">
                <span className="bg-primary w-full h-full text-xl font-bold rounded-full flex items-center justify-center">
                  {exp.name[0]}
                </span>
              </div>
              <div className="space-y-1">
                <h1 className="font-medium text-sm sm:text-base">{exp.name}</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {exp.title}
                </p>
              </div>
            </div>
            <h1 className="text-muted-foreground text-xs sm:text-sm leading-tight font-light">
              {exp.length}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
