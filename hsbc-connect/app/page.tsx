"use client";

import { Header } from "./components/Header";
import { SmartDownloader } from "./components/SmartDownloader";
import { useUserRegion } from "./hooks/useUserRegion";

export default function Home() {
  const { regionData, loading } = useUserRegion();

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F9F9F9]">
      <Header />

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col">
        {/* Top Hero Banner Area (Clean HSBC Grey) */}
        <div className="w-full bg-white border-b border-[#E6E6E6] pt-12 pb-16 px-6">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between">
            
            {/* Promo Section (Left) */}
            <div className="flex-1 text-[#333] max-w-2xl flex flex-col pt-4">
              <h1 className="font-['HSBC_Univers_Next'] text-[40px] md:text-[52px] font-normal leading-[1.1] mb-6 tracking-tight">
                <span className="font-bold">{loading ? "HSBC" : regionData.brandName}</span> <br />
                Live Chat Support.
              </h1>
              <p className="text-[18px] text-[#555] mb-8 leading-relaxed font-['HSBC_Neue_Helvetica']">
                {loading ? "Loading your local support..." : regionData.heroSubtitle} Start a secure live chat session with our specialists to get real-time assistance directly on your device.
              </p>
              
              <ul className="space-y-5 list-none p-0 m-0 text-[#333] text-[16px] font-['HSBC_Neue_Helvetica']">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-[#DB0011]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-bold">Bank-grade Encryption</strong>
                     <span className="text-[#555] text-[14px]">Your session is fully secured end-to-end.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-[#DB0011]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-bold">Instant Resolution</strong>
                     <span className="text-[#555] text-[14px]">Connect directly to an available agent in seconds.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Action Card (Right) */}
            <div className="w-full max-w-[420px] flex items-center mt-6 lg:mt-0">
              <div className="w-full bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E6E6E6] relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#DB0011]"></div>
                
                <h2 className="font-['HSBC_Univers_Next'] text-[24px] font-bold text-[#333] mb-3">
                  Start your session
                </h2>
                <p className="text-[#555] text-[14px] mb-8 font-['HSBC_Neue_Helvetica'] leading-relaxed">
                  Click below to initiate a secure live chat. A temporary utility will run to connect you with an agent.
                </p>
                
                <SmartDownloader />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Official HSBC Styled Footer */}
      <footer className="w-full bg-[#333333] pt-12 pb-8 px-6 text-white font-['HSBC_Neue_Helvetica']">
        <div className="max-w-[1200px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#555] pb-8 mb-8 gap-6">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
                 <a href="#" className="hover:underline">About HSBC</a>
                 <a href="#" className="hover:underline">Site map</a>
                 <a href={loading ? "#" : regionData.termsUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">Terms and conditions</a>
                 <a href="#" className="hover:underline">Privacy Notice</a>
                 <a href="#" className="hover:underline">Cookie Notice</a>
                 <a href="#" className="hover:underline">Accessibility</a>
              </div>
           </div>
           <p className="text-[#A0A0A0] text-[12px] leading-relaxed mb-4">
              © {new Date().getFullYear()} {loading ? "HSBC Group" : regionData.legalEntityName}. All rights reserved. No endorsement or approval of any third parties or their advice, opinions, information, products or services is expressed or implied by any information on this Site or by any hyperlinks to or from any third party websites or pages. Your use of this website is subject to the terms and conditions governing it. Please read these terms and conditions before using the website.
           </p>
        </div>
      </footer>
    </div>
  );
}
