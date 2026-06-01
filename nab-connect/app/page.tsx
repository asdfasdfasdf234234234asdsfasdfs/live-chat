import Image from "next/image";
import { Header } from "./components/Header";
import { SmartDownloader } from "./components/SmartDownloader";

export default function Home() {
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
                Secure, Fast Remote Support for NAB Connect.
              </h1>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed font-light">
                Connect with our support team instantly. Download the official NAB Connect Support Tool to allow our specialists to view and diagnose issues directly on your device, safely and securely.
              </p>
              
              <ul className="space-y-4 list-disc pl-6 text-gray-100 text-lg marker:text-nab-red">
                <li>Bank-grade end-to-end encryption</li>
                <li>You control when the session starts</li>
                <li>Lightweight and requires no installation</li>
              </ul>
            </div>

            {/* Action Card (Right) */}
            <div className="w-full max-w-[500px] flex items-center mt-10 lg:mt-0">
              <div className="w-full bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[24px] shadow-2xl shadow-black/50 border border-white/20 relative overflow-hidden group">
                {/* Decorative glowing orb behind the card text */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-nab-red/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-nab-red/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <h2 className="font-epilogue text-3xl font-semibold text-nab-black mb-3">
                    Get the Support Tool
                  </h2>
                  <p className="text-gray-500 text-base mb-10 leading-relaxed">
                    Download the executable to get started. Our smart system has detected your OS.
                  </p>
                  
                  <SmartDownloader />
                </div>
              </div>
            </div>

          </div>
        </main>

        <footer className="w-full py-6 text-center text-white/50 text-xs border-t border-white/10 mt-auto bg-black/60 backdrop-blur-md">
          <p>© {new Date().getFullYear()} National Australia Bank Limited. ABN 12 004 044 937 AFSL and Australian Credit Licence 230686.</p>
        </footer>
      </div>
    </div>
  );
}
