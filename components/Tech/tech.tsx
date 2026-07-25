"use client";
import { useInfo } from "@/context/infoContext";

export default function Tech() {
  const { info } = useInfo();

  return (
    <div className="space-y-6 ">
      <div className="space-y-3">
        <h1 className="text-3xl font-medium text-primary-foreground">
          Current Technologies
        </h1>
        <p className="text-sm text-muted-foreground">
          I'm proficent in a range modern technologies that empower me to build
          highly functional solutions. These are some of my main technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {info.technologies.map((t, idx) => {
          const Icon = t.icon.component;
          return (
            <div
              key={`${t.name}-${idx}`}
              className="flex w-full items-center gap-4 rounded-md bg-card p-2"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-md ${t.icon.color}`}
              >
                <Icon className="w-8 h-8" />
              </span>

              <div>
                <h1 className="text-lg font-medium">{t.name}</h1>
                <p className="text-sm text-muted-foreground">{t.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
