"use client";

import Image from "next/image";
import { useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

type Segment = "Personal" | "Business" | "Wealth";

export function Header() {
  const [activeTab, setActiveTab] = useState<Segment>("Personal");
  const [isNavigating, setIsNavigating] = useState(false);
  const { regionData, loading } = useUserRegion();

  const handleTabClick = (e: React.MouseEvent, segment: Segment) => {
    e.preventDefault();
    if (segment === activeTab) return;

    setIsNavigating(true);
    setTimeout(() => {
      setActiveTab(segment);
      setIsNavigating(false);
    }, 600);
  };

  const activeTabStyle = "text-usb-navy text-[14px] font-medium px-4 py-2.5 border-b-2 border-usb-blue inline-block cursor-pointer transition-colors";
  const inactiveTabStyle = "text-usb-text-secondary text-[14px] font-normal px-4 py-2.5 border-b-2 border-transparent hover:text-usb-navy hover:border-usb-gray-border transition-colors inline-block cursor-pointer";

  return (
    <header className="w-full flex flex-col relative">
      {/* Loading Bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] z-[100] overflow-hidden bg-transparent">
          <div className="h-full bg-usb-blue animate-[shine_0.6s_ease-out_forwards]" style={{ width: '100%', transformOrigin: 'left', animation: 'progress 0.6s ease-out' }}></div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
      `}} />

      {/* Top Light Bar — segment tabs */}
      <div className="w-full bg-usb-gray-bg hidden md:block border-b border-usb-gray-border/50">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <nav className="flex" aria-label="Business segments">
            <a onClick={(e) => handleTabClick(e, "Personal")} className={activeTab === "Personal" ? activeTabStyle : inactiveTabStyle}>
              Personal
            </a>
            <a onClick={(e) => handleTabClick(e, "Business")} className={activeTab === "Business" ? activeTabStyle : inactiveTabStyle}>
              Business
            </a>
            <a onClick={(e) => handleTabClick(e, "Wealth")} className={activeTab === "Wealth" ? activeTabStyle : inactiveTabStyle}>
              Wealth Management
            </a>
          </nav>

          <div className="text-usb-text-secondary text-[13px]">
            Welcome to <span className="text-usb-navy font-medium">{loading ? "U.S. Bank" : regionData.brandName}</span>
          </div>
        </div>
      </div>

      {/* Main White Nav */}
      <div className="w-full bg-usb-white shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
        <div className="w-full max-w-[1200px] mx-auto px-6 h-[64px] md:h-[80px] flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo-personal.svg"
              alt="U.S. Bank Logo"
              width={126}
              height={32}
              className={`h-7 md:h-8 object-contain transition-opacity duration-300 ${isNavigating ? 'opacity-50' : 'opacity-100'}`}
              style={{ width: 'auto' }}
              priority
            />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <span className="text-[15px] text-usb-navy font-normal hover:text-usb-blue transition-colors cursor-pointer border-b-2 border-transparent hover:border-usb-blue pb-1">
              Support
            </span>
            <span className="text-[15px] text-usb-navy font-normal hover:text-usb-blue transition-colors cursor-pointer border-b-2 border-transparent hover:border-usb-blue pb-1">
              Security
            </span>
            <button className="bg-usb-red text-white px-6 py-2.5 hover:bg-usb-red-hover transition-colors text-[14px] font-medium tracking-wide rounded-lg">
              Log in
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button className="p-2 text-usb-navy" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
