export const integrationCategories = [
  {
    id: "accounting",
    title: "Accounting",
    description: "Sync quotes, invoices, contacts, and payments with your books.",
    apps: [
      {
        id: "xero",
        name: "Xero",
        available: true,
        coreRoute: "/integrations/xero",
        logoSrc: "/integrations/xero.svg",
        summary: "Quotes, invoices, contacts, and payment sync.",
      },
      {
        id: "myob",
        name: "MYOB",
        available: false,
        logoSrc: "/integrations/myob.svg",
        summary: "Accounting sync for Australian workshops.",
      },
      {
        id: "quickbooks",
        name: "QuickBooks",
        available: true,
        coreRoute: "/integrations/quickbooks",
        logoSrc: "/integrations/quickbooks.svg",
        summary: "Quotes, invoices, and payment sync.",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Reach customers with SMS, reviews, and campaigns from your workshop system.",
    apps: [
      {
        id: "podium",
        name: "Podium",
        available: true,
        coreRoute: "/integrations/podium",
        logoSrc: "/integrations/podium.svg",
        summary: "Service reminder SMS from follow ups.",
      },
      {
        id: "gohighlevel",
        name: "GoHighLevel",
        available: false,
        logoSrc: "/integrations/gohighlevel.png",
        summary: "Sync customers and trigger SMS and email workflows from job events.",
      },
    ],
  },
  {
    id: "automotive",
    title: "Automotive",
    description: "Connect parts catalogs, technical data, and customer explanation tools.",
    apps: [
      {
        id: "burson-ezyparts",
        name: "Burson EzyParts",
        available: false,
        logoSrc: "/integrations/burson-ezyparts.png",
        summary: "Parts catalog, repair times, and one-click ordering.",
      },
      {
        id: "repco-navigator",
        name: "Repco Navigator Pro",
        available: false,
        logoSrc: "/integrations/repco-navigator.svg",
        summary: "Online parts catalog and trade ordering.",
      },
      {
        id: "napa",
        name: "NAPA",
        available: false,
        logoSrc: "/integrations/napa.svg",
        summary: "Parts catalog lookup and trade ordering.",
      },
      {
        id: "workshopdata",
        name: "WorkshopData",
        available: false,
        logoSrc: "/integrations/workshopdata.svg",
        summary: "Automotive technical data and repair information.",
      },
      {
        id: "hsy",
        name: "HSY",
        available: false,
        logoSrc: "/integrations/hsy.svg",
        summary: "Online catalog and ordering for parts and inventory.",
      },
      {
        id: "vehicle-visuals",
        name: "Vehicle Visuals",
        available: false,
        logoSrc: "/integrations/vehicle-visuals.svg",
        summary: "Service and repair explanation videos for customers.",
      },
    ],
  },
  {
    id: "app-distribution",
    title: "Download our app",
    description: "Get the COSA app on your phone via the App Store and Google Play.",
    apps: [
      {
        id: "apple-app-store",
        name: "Apple App Store",
        available: false,
        logoSrc: "/integrations/apple-app-store.svg",
        summary: "Download the COSA app for iPhone and iPad.",
      },
      {
        id: "google-play-store",
        name: "Google Play Store",
        available: false,
        logoSrc: "/integrations/google-play-store.svg",
        summary: "Download the COSA app for Android.",
      },
    ],
  },
];

export function getIntegrationStats() {
  const apps = integrationCategories.flatMap((category) => category.apps);

  return {
    availableCount: apps.filter((app) => app.available).length,
    comingSoonCount: apps.filter((app) => !app.available).length,
  };
}

