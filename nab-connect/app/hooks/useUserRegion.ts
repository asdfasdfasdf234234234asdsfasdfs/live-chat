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
          if (timeZone.startsWith("Australia/")) countryCode = "AU";
          else if (timeZone.startsWith("Pacific/Auckland") || timeZone.startsWith("Pacific/Chatham")) countryCode = "NZ";
        } catch (e) {
          // Ignore
        }
      }

      // 3. Map to regions or dynamically generate
      let resolvedRegionData: RegionData;

      if (countryCode && ["AU"].includes(countryCode)) {
        resolvedRegionData = REGIONS.AU;
      } else if (countryCode && ["NZ"].includes(countryCode)) {
        resolvedRegionData = REGIONS.NZ;
      } else if (countryCode) {
        // Dynamic fallback for all other countries in the world
        try {
          const getCountryName = new Intl.DisplayNames(['en'], { type: 'region' });
          const countryName = getCountryName.of(countryCode) || "Global";
          
          resolvedRegionData = {
            code: "GLOBAL",
            countryName: countryName,
            supportPhone: "+61 3 8641 9083",
            termsUrl: "https://www.nab.com.au/important-information",
            heroSubtitle: `Connect with our ${countryName} support team instantly.`,
            brandName: `NAB`,
            legalEntityName: `National Australia Bank Limited`
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
