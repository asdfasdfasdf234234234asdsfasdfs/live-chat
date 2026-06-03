export type RegionCode = "AU" | "NZ" | "GLOBAL";

export interface RegionData {
  code: RegionCode;
  countryName: string;
  supportPhone: string;
  termsUrl: string;
  heroSubtitle: string;
  brandName: string;
  legalEntityName: string;
}

export const REGIONS: Record<RegionCode, RegionData> = {
  AU: {
    code: "AU",
    countryName: "Australia",
    supportPhone: "13 22 65",
    termsUrl: "https://www.nab.com.au/important-information",
    heroSubtitle: "Connect with our Australian support team instantly.",
    brandName: "NAB",
    legalEntityName: "National Australia Bank Limited ABN 12 004 044 937 AFSL and Australian Credit Licence 230686"
  },
  NZ: {
    code: "NZ",
    countryName: "New Zealand",
    supportPhone: "0800 872 226",
    termsUrl: "https://www.nab.com.au/important-information",
    heroSubtitle: "Connect with our New Zealand support team instantly.",
    brandName: "NAB New Zealand",
    legalEntityName: "National Australia Bank Limited (NZ Branch)"
  },
  GLOBAL: {
    code: "GLOBAL",
    countryName: "Global",
    supportPhone: "+61 3 8641 9083",
    termsUrl: "https://www.nab.com.au/important-information",
    heroSubtitle: "Connect with our global support team instantly.",
    brandName: "NAB",
    legalEntityName: "National Australia Bank Limited"
  }
};
