"use client";
import { useInfo } from "@/context/infoContext";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Career() {
  const { info } = useInfo();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-primary-foreground">
        Work Experience
      </h1>
      <div className="space-y-4">
        {info.experience.map((exp, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={`${exp.name}-${idx}`}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 text-lg p-1 font-semibold">
                    <span className="w-full h-full bg-primary rounded-full flex items-center justify-center ">
                      {exp.name[0]}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-medium">{exp.name}</h2>

                      <ChevronRight
                        className={`h-4 w-4 hidden sm:block text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground">{exp.title}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{exp.length}</p>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-18 pt-2 text-sm text-muted-foreground">
                    <p>{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
