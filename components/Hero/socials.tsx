"use client";
import Link from "next/link";
import { useInfo } from "@/context/infoContext";

export default function Socials() {
  const { info } = useInfo();

  return (
    <div className="flex items-center space-x-4 text-xl text-muted-foreground">
      {info.socials.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div key={`${s.name}-${idx}`} className="flex items-center space-x-4">
            <Link
              href={s.link}
              className="flex items-center space-x-1 hover:text-primary transation-all duration-150"
            >
              <Icon className="size-5" />
            </Link>
            {info.socials.length !== idx + 1 && <p>/</p>}
          </div>
        );
      })}
    </div>
  );
}
