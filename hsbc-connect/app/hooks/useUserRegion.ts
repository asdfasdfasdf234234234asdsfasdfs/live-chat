"use client";

import { useState, useEffect } from "react";
import { REGIONS, RegionCode, RegionData } from "../utils/locales";

// Fallback chain of geolocation APIs
const GEO_APIS = [
  "https://get.geojs.io/v1/ip/country.json",
  "https://ipapi.co/json/",
  "https://ipwhois.app/json/"
];

export function useUserRegion() {
  const [regionData, setRegionData] = useState<RegionData>(REGIONS.GLOBAL);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRegion() {
      let countryCode: string | null = null;

      // 1. Try external APIs
      for (const apiUrl of GEO_APIS) {
        try {
          const response = await fetch(apiUrl, { signal: AbortSignal.timeout(3000) });
          if (!response.ok) continue;
          
          const data = await response.json();
          countryCode = data.country || data.country_code;
          
          if (countryCode) break; // Success! Break out of the fallback chain
        } catch (error) {
          // Suppress errors and continue to next fallback
        }
      }

      // 2. Ultimate Local Fallback (if all network APIs are blocked)
      if (!countryCode) {
        try {
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (timeZone.startsWith("America/")) countryCode = timeZone.includes("Toronto") || timeZone.includes("Vancouver") ? "CA" : "US";
          else if (timeZone.startsWith("Europe/London")) countryCode = "UK";
          else if (timeZone.startsWith("Australia/")) countryCode = "AU";
          else if (timeZone === "Asia/Hong_Kong") countryCode = "HK";
          else if (timeZone === "Asia/Calcutta" || timeZone === "Asia/Kolkata") countryCode = "IN";
        } catch (e) {
          // Ignore
        }
      }

      // 3. Map to regions or dynamically generate
      let resolvedRegionData: RegionData;

      if (countryCode && ["US", "GB", "UK", "AU", "HK", "IN", "CA"].includes(countryCode)) {
        // Exact mappings for core markets
        let region: RegionCode = "US";
        if (countryCode === "US") region = "US";
        else if (countryCode === "GB" || countryCode === "UK") region = "UK";
        else if (countryCode === "AU") region = "AU";
        else if (countryCode === "HK") region = "HK";
        else if (countryCode === "IN") region = "IN";
        else if (countryCode === "CA") region = "CA";
        
        resolvedRegionData = REGIONS[region];
      } else if (countryCode) {
        // Dynamic fallback for all other countries in the world
        try {
          const getCountryName = new Intl.DisplayNames(['en'], { type: 'region' });
          const countryName = getCountryName.of(countryCode) || "Global";
          
          resolvedRegionData = {
            code: "GLOBAL",
            countryName: countryName,
            // Generic global HSBC HQ mainline number as requested
            supportPhone: "+44 20 7991 8888", 
            termsUrl: "https://www.hsbc.com/",
            heroSubtitle: `Connect with our ${countryName} support team instantly.`,
            brandName: `HSBC ${countryName}`,
            legalEntityName: `HSBC ${countryName}`
          };
        } catch (e) {
          resolvedRegionData = REGIONS.GLOBAL;
        }
      } else {
        // Ultimate failure fallback
        resolvedRegionData = REGIONS.GLOBAL;
      }
      
      setRegionData(resolvedRegionData);
      setLoading(false);
    }

    fetchRegion();
  }, []);

  return { regionData, loading };
}
