"use client";

import { Header } from "./components/Header";
import { SmartDownloader } from "./components/SmartDownloader";
import { useUserRegion } from "./hooks/useUserRegion";

export default function Home() {
  const { regionData, loading } = useUserRegion();

  return (
    <div className="relative min-h-screen flex flex-col bg-usb-white">
      <Header />

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col">
        {/* Top Hero Banner Area */}
        <div className="w-full bg-usb-gray-bg pt-12 pb-16 px-6">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between">
            
            {/* Promo Section (Left) */}
            <div className="flex-1 text-usb-navy max-w-2xl flex flex-col pt-4">
              <h1 className="text-[40px] md:text-[52px] font-light leading-[1.1] mb-6 tracking-tight">
                <span className="font-bold">{loading ? "U.S. Bank" : regionData.brandName}</span> <br />
                Live Chat Support.
              </h1>
              <p className="text-[18px] text-usb-text-secondary mb-8 leading-relaxed font-light">
                {loading ? "Loading your local support..." : regionData.heroSubtitle} Start a secure live chat session with our specialists to get real-time assistance directly on your device.
              </p>
              
              <ul className="space-y-5 list-none p-0 m-0 text-usb-navy text-[16px]">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-usb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-medium">Bank-grade Encryption</strong>
                     <span className="text-usb-text-secondary text-[14px]">Your session is fully secured end-to-end.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-usb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                     <strong className="block font-medium">Instant Resolution</strong>
                     <span className="text-usb-text-secondary text-[14px]">Connect directly to an available agent in seconds.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Action Card (Right) */}
            <div className="w-full max-w-[420px] flex items-center mt-6 lg:mt-0">
              <div className="w-full bg-usb-white p-8 md:p-10 rounded-xl shadow-[0_4px_32px_rgba(0,0,78,0.08)] border border-usb-gray-border/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-usb-red rounded-t-xl"></div>
                
                <h2 className="text-[24px] font-medium text-usb-navy mb-3">
                  Start your session
                </h2>
                <p className="text-usb-text-secondary text-[14px] mb-8 leading-relaxed">
                  Click below to initiate a secure live chat. A temporary utility will run to connect you with an agent.
                </p>
                
                <SmartDownloader />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer — Matching U.S. Bank's dark navy style */}
      <footer className="w-full bg-usb-navy pt-12 pb-8 px-6 text-white">
        <div className="max-w-[1200px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-8 mb-8 gap-6">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
                 <a href="https://www.usbank.com/about-us-bank.html" className="hover:underline transition-colors" target="_blank" rel="noopener noreferrer">About U.S. Bank</a>
                 <a href="https://www.usbank.com/sitemap.html" className="hover:underline transition-colors" target="_blank" rel="noopener noreferrer">Site map</a>
                 <a href={loading ? "#" : regionData.termsUrl} className="hover:underline transition-colors" target="_blank" rel="noopener noreferrer">Terms and conditions</a>
                 <a href="https://www.usbank.com/privacy.html" className="hover:underline transition-colors" target="_blank" rel="noopener noreferrer">Privacy</a>
                 <a href="https://www.usbank.com/online-mobile-banking/security.html" className="hover:underline transition-colors" target="_blank" rel="noopener noreferrer">Security</a>
                 <a href="https://www.usbank.com/accessibility.html" className="hover:underline transition-colors" target="_blank" rel="noopener noreferrer">Accessibility</a>
              </div>
           </div>
           <p className="text-white/50 text-[12px] leading-relaxed mb-4">
              © {new Date().getFullYear()} {loading ? "U.S. Bank" : regionData.legalEntityName}. All rights reserved. Member FDIC. Equal Housing Lender. Mortgage, home equity and credit products are offered by U.S. Bank National Association. Deposit products are offered by U.S. Bank National Association. Your use of this website is subject to the terms and conditions governing it. Please read these terms and conditions before using the website.
           </p>
        </div>
      </footer>
    </div>
  );
}
