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
    supportPhone: "1-800-975-4722",
    termsUrl: "https://www.us.hsbc.com/terms-and-conditions/",
    heroSubtitle: "Connect with our US support team instantly.",
    brandName: "HSBC USA",
    legalEntityName: "HSBC Bank USA, N.A."
  },
  UK: {
    code: "UK",
    countryName: "United Kingdom",
    supportPhone: "03457 404 404",
    termsUrl: "https://www.hsbc.co.uk/terms-and-conditions/",
    heroSubtitle: "Connect with our UK support team instantly.",
    brandName: "HSBC UK",
    legalEntityName: "HSBC UK Bank plc"
  },
  AU: {
    code: "AU",
    countryName: "Australia",
    supportPhone: "1300 308 008",
    termsUrl: "https://www.hsbc.com.au/terms-and-conditions/",
    heroSubtitle: "Connect with our Australian support team instantly.",
    brandName: "HSBC Australia",
    legalEntityName: "HSBC Bank Australia Limited"
  },
  HK: {
    code: "HK",
    countryName: "Hong Kong",
    supportPhone: "+852 2233 3000",
    termsUrl: "https://www.hsbc.com.hk/terms-and-conditions/",
    heroSubtitle: "Connect with our Hong Kong support team instantly.",
    brandName: "HSBC Hong Kong",
    legalEntityName: "The Hongkong and Shanghai Banking Corporation Limited"
  },
  IN: {
    code: "IN",
    countryName: "India",
    supportPhone: "1800 266 3456",
    termsUrl: "https://www.hsbc.co.in/terms-and-conditions/",
    heroSubtitle: "Connect with our India support team instantly.",
    brandName: "HSBC India",
    legalEntityName: "HSBC Bank India"
  },
  CA: {
    code: "CA",
    countryName: "Canada",
    supportPhone: "1-888-310-4722",
    termsUrl: "https://www.hsbc.ca/terms-and-conditions/",
    heroSubtitle: "Connect with our Canadian support team instantly.",
    brandName: "HSBC Canada",
    legalEntityName: "HSBC Bank Canada"
  },
  GLOBAL: {
    code: "GLOBAL",
    countryName: "Global",
    supportPhone: "Please check your local HSBC website",
    termsUrl: "https://www.hsbc.com/",
    heroSubtitle: "Connect with our global support team instantly.",
    brandName: "HSBC Group",
    legalEntityName: "HSBC Group"
  }
};

