// Brand logos mapped to subcategory IDs
// Using known brands in the security, electrical, and smart home industry

export interface Brand {
  name: string;
  logo: string; // SVG path or image URL
}

export const subcategoryBrands: Record<string, Brand[]> = {
  // Security Systems
  "cctv": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "Axis", logo: "/brands/axis.svg" },
    { name: "Hanwha", logo: "/brands/hanwha.svg" },
    { name: "Uniview", logo: "/brands/uniview.svg" },
  ],
  "nvr-dvr": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "Synology", logo: "/brands/synology.svg" },
    { name: "QNAP", logo: "/brands/qnap.svg" },
  ],
  "video-intercom": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "2N", logo: "/brands/2n.svg" },
    { name: "Akuvox", logo: "/brands/akuvox.svg" },
  ],
  "access-control": [
    { name: "ZKTeco", logo: "/brands/zkteco.svg" },
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Suprema", logo: "/brands/suprema.svg" },
    { name: "Salto", logo: "/brands/salto.svg" },
  ],
  "alarm-systems": [
    { name: "Ajax", logo: "/brands/ajax.svg" },
    { name: "Paradox", logo: "/brands/paradox.svg" },
    { name: "DSC", logo: "/brands/dsc.svg" },
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
  ],
  "anpr": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "Axis", logo: "/brands/axis.svg" },
  ],
  "perimeter": [
    { name: "Optex", logo: "/brands/optex.svg" },
    { name: "Takex", logo: "/brands/takex.svg" },
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
  ],

  // Electrical
  "home-electrics": [
    { name: "Schneider Electric", logo: "/brands/schneider.svg" },
    { name: "ABB", logo: "/brands/abb.svg" },
    { name: "Legrand", logo: "/brands/legrand.svg" },
    { name: "Hager", logo: "/brands/hager.svg" },
  ],
  "industrial-install": [
    { name: "Schneider Electric", logo: "/brands/schneider.svg" },
    { name: "Siemens", logo: "/brands/siemens.svg" },
    { name: "ABB", logo: "/brands/abb.svg" },
    { name: "Eaton", logo: "/brands/eaton.svg" },
  ],
  "panel-upgrades": [
    { name: "Schneider Electric", logo: "/brands/schneider.svg" },
    { name: "ABB", logo: "/brands/abb.svg" },
    { name: "Hager", logo: "/brands/hager.svg" },
  ],
  "lighting": [
    { name: "Philips", logo: "/brands/philips.svg" },
    { name: "Osram", logo: "/brands/osram.svg" },
    { name: "Mean Well", logo: "/brands/meanwell.svg" },
    { name: "Ledvance", logo: "/brands/ledvance.svg" },
  ],
  "ev-chargers": [
    { name: "ABB", logo: "/brands/abb.svg" },
    { name: "Schneider Electric", logo: "/brands/schneider.svg" },
    { name: "Wallbox", logo: "/brands/wallbox.svg" },
    { name: "Easee", logo: "/brands/easee.svg" },
  ],
  "earthing": [
    { name: "OBO Bettermann", logo: "/brands/obo.svg" },
    { name: "DEHN", logo: "/brands/dehn.svg" },
    { name: "Phoenix Contact", logo: "/brands/phoenix.svg" },
  ],

  // Smart Home
  "full-design": [
    { name: "Control4", logo: "/brands/control4.svg" },
    { name: "Crestron", logo: "/brands/crestron.svg" },
    { name: "KNX", logo: "/brands/knx.svg" },
    { name: "Loxone", logo: "/brands/loxone.svg" },
  ],
  "diy-kits": [
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Tuya", logo: "/brands/tuya.svg" },
    { name: "Xiaomi", logo: "/brands/xiaomi.svg" },
  ],
  "smart-lighting": [
    { name: "Philips Hue", logo: "/brands/philips.svg" },
    { name: "IKEA Tradfri", logo: "/brands/ikea.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
  ],
  "thermostats": [
    { name: "Nest", logo: "/brands/nest.svg" },
    { name: "Tado", logo: "/brands/tado.svg" },
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
    { name: "Ecobee", logo: "/brands/ecobee.svg" },
  ],
  "smart-locks": [
    { name: "Yale", logo: "/brands/yale.svg" },
    { name: "Nuki", logo: "/brands/nuki.svg" },
    { name: "August", logo: "/brands/august.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
  ],
  "smart-speakers": [
    { name: "Amazon Alexa", logo: "/brands/alexa.svg" },
    { name: "Google Home", logo: "/brands/google.svg" },
    { name: "Apple HomeKit", logo: "/brands/apple.svg" },
  ],
  "shading": [
    { name: "Somfy", logo: "/brands/somfy.svg" },
    { name: "Nice", logo: "/brands/nice.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],
  "doorbells": [
    { name: "Ring", logo: "/brands/ring.svg" },
    { name: "Google Nest", logo: "/brands/nest.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
    { name: "Eufy", logo: "/brands/eufy.svg" },
  ],
  "garden-automation": [
    { name: "Gardena", logo: "/brands/gardena.svg" },
    { name: "Rain Bird", logo: "/brands/rainbird.svg" },
    { name: "Hunter", logo: "/brands/hunter.svg" },
  ],
  "garage-remote": [
    { name: "Nice", logo: "/brands/nice.svg" },
    { name: "Came", logo: "/brands/came.svg" },
    { name: "Somfy", logo: "/brands/somfy.svg" },
    { name: "BFT", logo: "/brands/bft.svg" },
  ],

  // Networks
  "web-dev": [
    { name: "Next.js", logo: "/brands/nextjs.svg" },
    { name: "React", logo: "/brands/react.svg" },
    { name: "Vercel", logo: "/brands/vercel.svg" },
  ],
  "wifi-mesh": [
    { name: "Ubiquiti", logo: "/brands/ubiquiti.svg" },
    { name: "TP-Link", logo: "/brands/tplink.svg" },
    { name: "Netgear", logo: "/brands/netgear.svg" },
    { name: "Eero", logo: "/brands/eero.svg" },
  ],
  "ap-router": [
    { name: "Ubiquiti", logo: "/brands/ubiquiti.svg" },
    { name: "MikroTik", logo: "/brands/mikrotik.svg" },
    { name: "Cisco", logo: "/brands/cisco.svg" },
    { name: "TP-Link", logo: "/brands/tplink.svg" },
  ],
  "nas-backups": [
    { name: "Synology", logo: "/brands/synology.svg" },
    { name: "QNAP", logo: "/brands/qnap.svg" },
    { name: "Western Digital", logo: "/brands/wd.svg" },
  ],
  "structured-cabling": [
    { name: "Panduit", logo: "/brands/panduit.svg" },
    { name: "CommScope", logo: "/brands/commscope.svg" },
    { name: "Legrand", logo: "/brands/legrand.svg" },
  ],

  // Home Solutions - use generic tech brands
  "smart-meters": [
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Schneider Electric", logo: "/brands/schneider.svg" },
  ],
  "solar-floodlights": [
    { name: "Philips", logo: "/brands/philips.svg" },
    { name: "Osram", logo: "/brands/osram.svg" },
  ],
  "gps-trackers": [
    { name: "Teltonika", logo: "/brands/teltonika.svg" },
    { name: "Garmin", logo: "/brands/garmin.svg" },
  ],
  "dashcams": [
    { name: "BlackVue", logo: "/brands/blackvue.svg" },
    { name: "Garmin", logo: "/brands/garmin.svg" },
    { name: "Nextbase", logo: "/brands/nextbase.svg" },
  ],
  "home-sensors": [
    { name: "Aqara", logo: "/brands/aqara.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
  ],

  // Fire Detection
  "fire-panels": [
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
    { name: "Siemens", logo: "/brands/siemens.svg" },
    { name: "Bosch", logo: "/brands/bosch.svg" },
  ],
  "smoke-gas": [
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
    { name: "Kidde", logo: "/brands/kidde.svg" },
    { name: "Ajax", logo: "/brands/ajax.svg" },
  ],
  "flood-detectors": [
    { name: "Ajax", logo: "/brands/ajax.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],
  "smart-detectors": [
    { name: "Ajax", logo: "/brands/ajax.svg" },
    { name: "Nest", logo: "/brands/nest.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
  ],

  // Photovoltaics
  "autonomous-pv": [
    { name: "SMA", logo: "/brands/sma.svg" },
    { name: "Victron", logo: "/brands/victron.svg" },
    { name: "Huawei", logo: "/brands/huawei.svg" },
  ],
  "on-off-hybrid": [
    { name: "Huawei", logo: "/brands/huawei.svg" },
    { name: "SMA", logo: "/brands/sma.svg" },
    { name: "SolarEdge", logo: "/brands/solaredge.svg" },
    { name: "Fronius", logo: "/brands/fronius.svg" },
  ],
  "inverters-batteries": [
    { name: "Victron", logo: "/brands/victron.svg" },
    { name: "Huawei", logo: "/brands/huawei.svg" },
    { name: "BYD", logo: "/brands/byd.svg" },
    { name: "Tesla", logo: "/brands/tesla.svg" },
  ],
  "monitoring": [
    { name: "SolarEdge", logo: "/brands/solaredge.svg" },
    { name: "Huawei", logo: "/brands/huawei.svg" },
    { name: "SMA", logo: "/brands/sma.svg" },
  ],

  // Specialized
  "elder-care": [
    { name: "Philips", logo: "/brands/philips.svg" },
    { name: "Ajax", logo: "/brands/ajax.svg" },
  ],
  "airbnb-hotel": [
    { name: "Yale", logo: "/brands/yale.svg" },
    { name: "August", logo: "/brands/august.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],
  "hospitals": [
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
    { name: "Siemens", logo: "/brands/siemens.svg" },
    { name: "Bosch", logo: "/brands/bosch.svg" },
  ],
  "industrial-solutions": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
    { name: "Bosch", logo: "/brands/bosch.svg" },
  ],
  "temp-monitoring": [
    { name: "Testo", logo: "/brands/testo.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],

  // Support
  "tech-support": [
    { name: "TeamViewer", logo: "/brands/teamviewer.svg" },
    { name: "AnyDesk", logo: "/brands/anydesk.svg" },
  ],
  "maintenance-contracts": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Ajax", logo: "/brands/ajax.svg" },
  ],
  "remote-support": [
    { name: "TeamViewer", logo: "/brands/teamviewer.svg" },
    { name: "AnyDesk", logo: "/brands/anydesk.svg" },
  ],
  "equipment-upgrades": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Ubiquiti", logo: "/brands/ubiquiti.svg" },
  ],
};

// Get brands for a subcategory, with fallback to generic tech brands
export function getBrandsForSubcategory(subcatId: string): Brand[] {
  return subcategoryBrands[subcatId] || [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Schneider", logo: "/brands/schneider.svg" },
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
  ];
}
