"use client";

import { useEffect, useState } from "react";

type OS = "Windows" | "macOS" | "Linux" | "Unknown";

export function SmartDownloader() {
  const [os, setOs] = useState<OS>("Unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) setOs("Windows");
    else if (userAgent.indexOf("Mac") !== -1) setOs("macOS");
    else if (userAgent.indexOf("Linux") !== -1) setOs("Linux");
  }, []);

  const getDownloadLink = (targetOs: OS) => {
    switch (targetOs) {
      case "Windows":
        return "#";
      case "macOS":
        return "#";
      case "Linux":
        return "#";
      default:
        return "#";
    }
  };

  const primaryOs = os !== "Unknown" ? os : "Windows";
  const primaryLink = getDownloadLink(primaryOs);

  const otherOsOptions: OS[] = ["Windows", "macOS", "Linux"].filter((o) => o !== primaryOs) as OS[];

  return (
    <div className="flex flex-col items-center sm:items-start w-full">
      <a
        href={primaryLink}
        className="group relative w-full flex justify-center items-center h-16 bg-nab-red text-white font-bold text-lg rounded-lg shadow-lg hover:bg-nab-red-hover hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(194,0,0,0.4)] transition-all duration-300 overflow-hidden"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
        
        <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download for {primaryOs}
      </a>
      
      <div className="mt-8 w-full p-4 bg-nab-gray-bg/50 rounded-lg border border-nab-gray-border/50">
        <p className="text-sm text-nab-black/70 mb-3 font-semibold">Other operating systems:</p>
        <div className="flex gap-6">
          {otherOsOptions.map((otherOs) => (
            <a
              key={otherOs}
              href={getDownloadLink(otherOs)}
              className="text-sm text-nab-red hover:text-nab-red-hover hover:underline font-medium transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {otherOs}
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex items-center text-xs text-nab-black/50 w-full justify-center sm:justify-start">
        <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Verified safe and virus-free. Version 2.4.1</span>
      </div>
    </div>
  );
}
