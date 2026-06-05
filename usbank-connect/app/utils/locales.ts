export type RegionCode = "US" | "UK" | "AU" | "HK" | "IN" | "CA" | "GLOBAL";

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
  US: {
    code: "US",
    countryName: "United States",
    supportPhone: "1-800-872-2657",
    termsUrl: "https://www.usbank.com/terms.html",
    heroSubtitle: "Connect with our U.S. support team instantly.",
    brandName: "U.S. Bank",
    legalEntityName: "U.S. Bank National Association"
  },
  UK: {
    code: "UK",
    countryName: "United Kingdom",
    supportPhone: "+1-800-872-2657",
    termsUrl: "https://www.usbank.com/terms.html",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "U.S. Bank",
    legalEntityName: "U.S. Bank National Association"
  },
  AU: {
    code: "AU",
    countryName: "Australia",
    supportPhone: "+1-800-872-2657",
    termsUrl: "https://www.usbank.com/terms.html",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "U.S. Bank",
    legalEntityName: "U.S. Bank National Association"
  },
  HK: {
    code: "HK",
    countryName: "Hong Kong",
    supportPhone: "+1-800-872-2657",
    termsUrl: "https://www.usbank.com/terms.html",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "U.S. Bank",
    legalEntityName: "U.S. Bank National Association"
  },
  IN: {
    code: "IN",
    countryName: "India",
    supportPhone: "+1-800-872-2657",
    termsUrl: "https://www.usbank.com/terms.html",
    heroSubtitle: "Connect with our international support team instantly.",
    brandName: "U.S. Bank",
    legalEntityName: "U.S. Bank National Association"
  },
  CA: {
    code: "CA",
    countryName: "Canada",
    supportPhone: "+1-800-872-2657",
    termsUrl: "https://www.usbank.com/terms.html",
    heroSubtitle: "Connect with our Canadian support team instantly.",
    brandName: "U.S. Bank",
    legalEntityName: "U.S. Bank National Association"
  },
  GLOBAL: {
    code: "GLOBAL",
    countryName: "Global",
    supportPhone: "1-800-872-2657",
    termsUrl: "https://www.usbank.com/terms.html",
    heroSubtitle: "Connect with our global support team instantly.",
    brandName: "U.S. Bank",
    legalEntityName: "U.S. Bank National Association"
  }
};
