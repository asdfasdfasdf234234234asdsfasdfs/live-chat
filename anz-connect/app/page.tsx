"use client";

import { Header } from "./components/Header";
import { SmartDownloader } from "./components/SmartDownloader";
import { useUserRegion } from "./hooks/useUserRegion";

export default function Home() {
  const { regionData, loading } = useUserRegion();

  return (
    <div className="relative min-h-screen flex flex-col bg-anz-white">
      <Header />

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col">
        {/* Top Hero Banner Area */}
        <div className="w-full bg-anz-bg-light pt-12 pb-16 px-6">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between">
            
            {/* Promo Section (Left) */}
            <div className="flex-1 text-anz-dark-blue max-w-2xl flex flex-col pt-4">
              <h1 className="text-[40px] md:text-[52px] font-light leading-[1.1] mb-6 tracking-tight">
                <span className="font-bold">{loading ? "ANZ" : regionData.brandName}</span> <br />
                Live Chat Support.
              </h1>
              <p className="text-[18px] text-anz-text-muted mb-8 leading-relaxed font-light">
                Start a secure live chat session with our specialists to get real-time assistance directly on your device.
              </p>
              
              <ul className="space-y-5 list-none p-0 m-0 text-anz-dark-blue text-[16px]">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-anz-pacific-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-semibold">Bank-grade Encryption</strong>
                     <span className="text-anz-text-muted text-[14px]">Your session is fully secured end-to-end.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-anz-pacific-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-semibold">Instant Resolution</strong>
                     <span className="text-anz-text-muted text-[14px]">Connect directly to an available agent in seconds.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Action Card (Right) */}
            <div className="w-full max-w-[420px] flex items-center mt-6 lg:mt-0">
              <div className="w-full bg-anz-white p-8 md:p-10 rounded-[4px] shadow-[0_4px_32px_rgba(0,21,47,0.08)] border border-anz-border/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-anz-pacific-blue rounded-t-[4px]"></div>
                
                <h2 className="text-[24px] font-semibold text-anz-dark-blue mb-3">
                  Start your session
                </h2>
                <p className="text-anz-text-muted text-[14px] mb-8 leading-relaxed">
                  Click below to initiate a secure live chat. A temporary utility will run to connect you with an agent.
                </p>
                
                <SmartDownloader />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer — ANZ Dark Blue style */}
      <footer className="w-full bg-anz-dark-blue pt-12 pb-8 px-6 text-anz-white">
        <div className="max-w-[1200px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-anz-white/20 pb-8 mb-8 gap-6">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
                 <a href={`${loading ? "https://www.anz.com.au" : regionData.websiteUrl}/about-us`} className="text-anz-white hover:underline hover:text-anz-light-blue transition-colors" target="_blank" rel="noopener noreferrer">About ANZ</a>
                 <a href={`${loading ? "https://www.anz.com.au" : regionData.websiteUrl}/support/sitemap`} className="text-anz-white hover:underline hover:text-anz-light-blue transition-colors" target="_blank" rel="noopener noreferrer">Site map</a>
                 <a href={`${loading ? "https://www.anz.com.au" : regionData.websiteUrl}/privacy`} className="text-anz-white hover:underline hover:text-anz-light-blue transition-colors" target="_blank" rel="noopener noreferrer">Privacy</a>
                 <a href={`${loading ? "https://www.anz.com.au" : regionData.websiteUrl}/security`} className="text-anz-white hover:underline hover:text-anz-light-blue transition-colors" target="_blank" rel="noopener noreferrer">Security</a>
                 <a href={`${loading ? "https://www.anz.com.au" : regionData.websiteUrl}/accessibility`} className="text-anz-white hover:underline hover:text-anz-light-blue transition-colors" target="_blank" rel="noopener noreferrer">Accessibility</a>
              </div>
           </div>
           <p className="text-anz-white/80 text-[12px] leading-relaxed mb-4">
              © {new Date().getFullYear()} {loading ? "Australia and New Zealand Banking Group Limited" : regionData.legalEntity}. All rights reserved. 
           </p>
        </div>
      </footer>
    </div>
  );
}
