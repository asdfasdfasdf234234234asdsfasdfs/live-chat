"use client";

import { useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";
import Image from "next/image";

type Segment = "Personal" | "Business" | "Institutional" | "Private";

export function Header() {
  const [activeTab, setActiveTab] = useState<Segment>("Business");
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

  const activeTabStyle =
    "text-anz-dark-blue text-[14px] font-bold px-4 py-2.5 border-b-[3px] border-anz-pacific-blue inline-block cursor-pointer transition-all duration-200";
  const inactiveTabStyle =
    "text-anz-text-muted text-[14px] font-normal px-4 py-2.5 border-b-[3px] border-transparent hover:text-anz-dark-blue hover:border-anz-pacific-blue/40 transition-all duration-200 inline-block cursor-pointer";

  return (
    <header className="w-full flex flex-col relative">
      {/* Loading Bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] z-[100] overflow-hidden bg-transparent">
          <div
            className="h-full bg-anz-pacific-blue animate-[shine_0.6s_ease-out_forwards]"
            style={{
              width: "100%",
              transformOrigin: "left",
              animation: "progress 0.6s ease-out",
            }}
          ></div>
        </div>
      )}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
      `,
        }}
      />

      {/* Top Light Bar — segment tabs */}
      <div className="w-full bg-anz-bg-light hidden md:block border-b border-anz-border/50">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <nav className="flex" aria-label="Business segments">
            <a
              onClick={(e) => handleTabClick(e, "Personal")}
              className={
                activeTab === "Personal" ? activeTabStyle : inactiveTabStyle
              }
            >
              Personal
            </a>
            <a
              onClick={(e) => handleTabClick(e, "Business")}
              className={
                activeTab === "Business" ? activeTabStyle : inactiveTabStyle
              }
            >
              Business
            </a>
            <a
              onClick={(e) => handleTabClick(e, "Institutional")}
              className={
                activeTab === "Institutional" ? activeTabStyle : inactiveTabStyle
              }
            >
              Institutional
            </a>
            <a
              onClick={(e) => handleTabClick(e, "Private")}
              className={
                activeTab === "Private" ? activeTabStyle : inactiveTabStyle
              }
            >
              Private
            </a>
          </nav>

          <div className="text-anz-text-muted text-[13px]">
            Welcome to{" "}
            <span className="text-anz-dark-blue font-semibold">
              {loading ? "ANZ" : regionData.brandName}
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full bg-anz-white shadow-[0_2px_8px_rgba(0,21,47,0.08)]">
        <div className="w-full max-w-[1200px] mx-auto px-6 h-[64px] md:h-[80px] flex justify-between items-center">
          {/* ANZ Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className={`transition-opacity duration-300 ${isNavigating ? "opacity-50" : "opacity-100"}`}
              aria-label="ANZ Home"
            >
              <Image 
                src="/anz_logo_gradient.svg" 
                alt="ANZ Logo" 
                width={100} 
                height={32} 
                className="h-8 w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            <span className="text-[15px] text-anz-dark-blue font-normal hover:text-anz-pacific-blue transition-colors cursor-pointer border-b-2 border-transparent hover:border-anz-pacific-blue pb-1">
              Support
            </span>
            <span className="text-[15px] text-anz-dark-blue font-normal hover:text-anz-pacific-blue transition-colors cursor-pointer border-b-2 border-transparent hover:border-anz-pacific-blue pb-1">
              Security
            </span>
            <button className="bg-anz-pacific-blue text-white px-6 py-2 hover:bg-anz-pacific-blue-hover transition-colors text-[14px] font-semibold tracking-wide rounded-[4px]">
              Log on
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <button className="p-2 text-anz-dark-blue" aria-label="Menu">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
