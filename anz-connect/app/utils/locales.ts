export type Region = "AU" | "NZ";

export interface RegionData {
  brandName: string;
  supportPhone: string;
  supportUrl: string;
  legalEntity: string;
  websiteUrl: string;
}

export const regionDataMap: Record<Region, RegionData> = {
  AU: {
    brandName: "ANZ",
    supportPhone: "13 13 14",
    supportUrl: "https://www.anz.com.au/support/contact-us/",
    legalEntity: "Australia and New Zealand Banking Group Limited",
    websiteUrl: "https://www.anz.com.au",
  },
  NZ: {
    brandName: "ANZ",
    supportPhone: "0800 269 296",
    supportUrl: "https://www.anz.co.nz/contact-us/",
    legalEntity: "ANZ Bank New Zealand Limited",
    websiteUrl: "https://www.anz.co.nz",
  },
};
