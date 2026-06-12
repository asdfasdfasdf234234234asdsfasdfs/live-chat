"use client";

import { useState, useEffect } from "react";
import { regionDataMap, Region, RegionData } from "../utils/locales";

// Fallback chain of geolocation APIs
const GEO_APIS = [
  "https://get.geojs.io/v1/ip/country.json",
  "https://ipapi.co/json/",
  "https://ipwhois.app/json/"
];

export function useUserRegion() {
  const [regionData, setRegionData] = useState<RegionData>(regionDataMap.AU);
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
          if (timeZone.startsWith("Pacific/Auckland") || timeZone.startsWith("Pacific/Chatham")) countryCode = "NZ";
          else if (timeZone.startsWith("Australia/")) countryCode = "AU";
        } catch (e) {
          // Ignore
        }
      }

      // 3. Map to regions
      // If the detected country is NZ, show the NZ specific info.
      // Otherwise, everyone gets AU as the default for ANZ.
      let resolvedRegionData: RegionData = regionDataMap.AU;

      if (countryCode === "NZ") {
        resolvedRegionData = regionDataMap.NZ;
      }
      
      setRegionData(resolvedRegionData);
      setLoading(false);
    }

    fetchRegion();
  }, []);

  return { regionData, loading };
}
