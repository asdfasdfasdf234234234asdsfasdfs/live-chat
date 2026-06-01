"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const dayName = now.toLocaleDateString("en-AU", { weekday: "long" });
    const day = now.getDate();
    const month = now.toLocaleDateString("en-AU", { month: "long" });
    const year = now.getFullYear();

    setCurrentDate(`${dayName} ${day} ${month} ${year}`);
  }, []);

  return (
    <header className="h-[65px] bg-nab-black flex items-center px-6 text-nab-white sticky top-0 z-50 shadow-md">
      <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/star_more.svg"
            alt="NAB Logo"
            width={32}
            height={32}
            className="mr-4 h-8 w-auto"
          />
          <span className="font-source text-xl font-normal tracking-[0.5px]">
            NAB Connect Support
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-3">
          <span className="text-[13px] font-source text-nab-white opacity-80">{currentDate}</span>
        </div>
      </div>
    </header>
  );
}
