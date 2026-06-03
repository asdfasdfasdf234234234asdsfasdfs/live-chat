"use client";

import Image from "next/image";
import { useState } from "react";
import { useUserRegion } from "../hooks/useUserRegion";

type Segment = "Personal" | "Business" | "Corporate";

export function Header() {
  const [activeTab, setActiveTab] = useState<Segment>("Corporate");
  const [isNavigating, setIsNavigating] = useState(false);
  const { regionData, loading } = useUserRegion();

  const handleTabClick = (e: React.MouseEvent, segment: Segment) => {
    e.preventDefault();
    if (segment === activeTab) return;
    
    // Simulate navigation/loading
    setIsNavigating(true);
    setTimeout(() => {
      setActiveTab(segment);
      setIsNavigating(false);
    }, 600);
  };

  const activeTabStyle = "bg-nab-black text-nab-white text-[12px] font-bold px-3 py-2 border-b-2 border-nab-red inline-block cursor-pointer";
  const inactiveTabStyle = "bg-nab-black text-[#A0A0A0] text-[12px] px-3 py-2 border-b-2 border-transparent hover:text-nab-white transition-colors inline-block cursor-pointer";

  return (
    <header className="w-full flex flex-col font-source relative">
      {/* Simulated Loading Bar */}
      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] z-[100] overflow-hidden bg-transparent">
          <div className="h-full bg-nab-red animate-[shine_0.6s_ease-out_forwards]" style={{ width: '100%', transformOrigin: 'left', animation: 'progress 0.6s ease-out' }}></div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
      `}} />

      {/* Top Black Nav with Segment Tabs */}
      <div className="w-full bg-nab-black hidden md:block">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <nav className="flex space-x-1" aria-label="Business segments">
            <a onClick={(e) => handleTabClick(e, "Personal")} className={activeTab === "Personal" ? activeTabStyle : inactiveTabStyle}>
              Personal
            </a>
            <a onClick={(e) => handleTabClick(e, "Business")} className={activeTab === "Business" ? activeTabStyle : inactiveTabStyle}>
              Business
            </a>
            <a onClick={(e) => handleTabClick(e, "Corporate")} className={activeTab === "Corporate" ? activeTabStyle : inactiveTabStyle}>
              Corporate
            </a>
          </nav>
          
          <div className="text-[#A0A0A0] text-[12px]">
             Welcome to <span className="text-white font-bold">{loading ? "NAB" : regionData.brandName}</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="w-full bg-nab-black/80 backdrop-blur-md border-b border-white/10">
        <div className="w-full max-w-[1200px] mx-auto px-6 h-[65px] md:h-[72px] flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/star_more.svg"
              alt="NAB Logo"
              width={32}
              height={32}
              className={`mr-4 h-8 w-auto transition-opacity duration-300 ${isNavigating ? 'opacity-50' : 'opacity-100'}`}
              style={{ width: 'auto' }}
              priority
            />
            <span className="font-source text-xl text-nab-white font-normal tracking-[0.5px]">
              NAB Connect Support
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
             <span className="text-sm text-nab-white/80 font-normal hover:text-nab-white transition-colors cursor-pointer border-b-2 border-transparent hover:border-nab-red pb-1">
               Support
             </span>
             <span className="text-sm text-nab-white/80 font-normal hover:text-nab-white transition-colors cursor-pointer border-b-2 border-transparent hover:border-nab-red pb-1">
               Security
             </span>
             <button className="bg-transparent border border-nab-red text-nab-red px-5 py-2 hover:bg-nab-red hover:text-nab-white transition-colors text-sm font-bold tracking-wide rounded-md">
               Log On
             </button>
          </div>

          <div className="lg:hidden flex items-center">
             <button className="p-2 text-nab-white" aria-label="Menu">
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
