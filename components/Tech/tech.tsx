"use client";
import { useInfo } from "@/context/infoContext";

export default function Tech() {
  const { info } = useInfo();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-primary-foreground">
        Current Technologies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {info.technologies.map((t, idx) => {
          const Icon = t.icon.component;
          return (
            <div
              key={`${t.name}-${idx}`}
              className="flex w-full items-center gap-4 rounded-lg bg-card p-1.5"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-md ${t.icon.color}`}
              >
                <Icon className="w-8 h-8" />
              </span>

              <div>
                <h1 className="text-base font-medium">{t.name}</h1>
                <p className="text-xs text-muted-foreground">{t.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
