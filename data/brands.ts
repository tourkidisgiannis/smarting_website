// Brand logos mapped to subcategory IDs
// Using known brands in the security, electrical, and smart home industry

export interface Brand {
  name: string;
  logo: string; // SVG path or image URL
}

export const subcategoryBrands: Record<string, Brand[]> = {
  // Security Systems
  // Security Systems - Keeping as is since user did not specify changes for Security
  cctv: [
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "Ajax", logo: "/brands/ajax.png" },
    { name: "TP-Link", logo: "/brands/tp-link-nuevo.png" },
    { name: "EZVIZ", logo: "/brands/ezviz.png" },
    { name: "Hiwatch", logo: "/brands/hiwatch.png" },
  ],
  "nvr-dvr": [
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "TVT", logo: "/brands/tvt.jpeg" },
  ],
  "video-intercom": [
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "CTC", logo: "/brands/ctc.jpg" },
    { name: "Fermax", logo: "/brands/fermax.png" },
    { name: "Urmet", logo: "/brands/urmet.png" },
    { name: "Comelit", logo: "/brands/comelit-group.png" },
  ],
  "access-control": [
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "Yale", logo: "/brands/yale-lock.png" },
    { name: "Paxtron", logo: "/brands/paxtron.png" },
    { name: "Paxton", logo: "/brands/paxton.png" },
  ],
  "alarm-systems": [
    { name: "Ajax", logo: "/brands/ajax.png" },
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "Sigma", logo: "/brands/sigma.jpeg" },
    { name: "Paradox", logo: "/brands/paradox.png" },
    { name: "Bosch", logo: "/brands/bosch.png" },
  ],
  anpr: [
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "Axis", logo: "/brands/axis-communications.png" },
  ],
  perimeter: [
    { name: "Optex", logo: "/brands/optex.png" },
    { name: "ALEAN", logo: "/brands/alean.webp" },
  ],

  // Electrical - Keeping as is since user did not specify changes
  "home-electrics": [
    { name: "Schneider Electric", logo: "/brands/schneider-electric.png" },
    { name: "ABB", logo: "/brands/abb.png" },
    { name: "Legrand", logo: "/brands/legrand.png" },
    { name: "Hager", logo: "/brands/hager.png" },
    { name: "Eaton", logo: "/brands/eaton.png" },
  ],
  "industrial-install": [
    { name: "Schneider Electric", logo: "/brands/schneider-electric.png" },
    { name: "ABB", logo: "/brands/abb.png" },
    { name: "Legrand", logo: "/brands/legrand.png" },
    { name: "Hager", logo: "/brands/hager.png" },
    { name: "Siemens", logo: "/brands/siemens.png" },
  ],
  "panel-upgrades": [
    { name: "Schneider Electric", logo: "/brands/schneider-electric.png" },
    { name: "ABB", logo: "/brands/abb.png" },
    { name: "Hager", logo: "/brands/hager.png" },
  ],
  lighting: [
    { name: "Philips", logo: "/brands/philips.png" },
    { name: "Osram", logo: "/brands/osram.png" },
    { name: "ACA", logo: "/brands/aca.jpeg" },
    { name: "Ledvance", logo: "/brands/ledvance-ltd.png" },
    { name: "EUROLAMP", logo: "/brands/eurolamp.png" },
    { name: "V-TAC", logo: "/brands/v-tac.png" },
  ],
  "ev-chargers": [
    { name: "ABB", logo: "/brands/abb.png" },
    { name: "Wallbox", logo: "/brands/wallbox.png" },
    { name: "Tesla", logo: "/brands/tesla.png" },
    { name: "Huawei", logo: "/brands/huawei.png" },
  ],
  earthing: [{ name: "OBO Bettermann", logo: "/brands/obo-bettermann.png" }],

  // Smart Home
  "full-design": [
    { name: "KNX", logo: "/brands/schneider-electric.png" }, // KNX is related to home automation, using Schneider as representative
    { name: "HomeKit", logo: "/brands/google-nest.png" }, // Using Google as placeholder for smart home platforms
    { name: "Zigbee", logo: "/brands/zigbee.png" },
  ],
  "diy-kits": [
    { name: "Sonoff", logo: "/brands/sonoff.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
    { name: "Tuya", logo: "/brands/tuya.png" },
    { name: "Aqara", logo: "/brands/aqara.png" },
    { name: "Zigbee", logo: "/brands/zigbee.png" },
  ],
  "smart-lighting": [
    { name: "Philips Hue", logo: "/brands/philips.png" },
    { name: "Yeelight", logo: "/brands/yeelight.png" },
    { name: "LIFX", logo: "/brands/lifx.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
    { name: "Sonoff", logo: "/brands/sonoff.png" },
  ],
  thermostats: [
    { name: "Nest", logo: "/brands/google-nest.png" },
    { name: "Honeywell", logo: "/brands/honeywell.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
  ],
  "smart-locks": [
    { name: "Nuki", logo: "/brands/nuki.png" },
    { name: "Yale", logo: "/brands/yale-lock.png" },
    { name: "Aqara", logo: "/brands/aqara.png" },
  ],
  "smart-speakers": [{ name: "Google Nest", logo: "/brands/google-nest.png" }],
  shading: [
    { name: "Somfy", logo: "/brands/somfy.png" },
    { name: "Nice", logo: "/brands/nice.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
    { name: "Aqara", logo: "/brands/aqara.png" },
  ],
  doorbells: [
    { name: "Ring", logo: "/brands/ring.png" },
    { name: "Nest Doorbell", logo: "/brands/google-nest.png" },
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Aqara", logo: "/brands/aqara.png" },
  ],
  "garden-automation": [
    { name: "Gardena Smart", logo: "/brands/gardena.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
  ],
  "garage-remote": [
    { name: "Nice", logo: "/brands/nice.png" },
    { name: "Somfy", logo: "/brands/somfy.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
  ],

  // Networks
  "web-dev": [
    { name: "HTML", logo: "/brands/html5.png" },
    { name: "CSS", logo: "/brands/css3.png" },
    { name: "JS", logo: "/brands/js.png" },
    { name: "NodeJs", logo: "/brands/node-js.png" },
    { name: "Next.js", logo: "/brands/next-js.png" },
    { name: "React", logo: "/brands/react-native.png" },
  ],
  "wifi-mesh": [
    { name: "Ubiquiti", logo: "/brands/ubiquiti.png" },
    { name: "TP-Link", logo: "/brands/tp-link-nuevo.png" },
    { name: "Google", logo: "/brands/google-nest.png" },
    { name: "Asus", logo: "/brands/asus.png" },
  ],
  "ap-router": [
    { name: "Ubiquiti", logo: "/brands/ubiquiti.png" },
    { name: "MikroTik", logo: "/brands/mikrotik.png" },
    { name: "Cisco", logo: "/brands/cisco.png" },
    { name: "TP-Link", logo: "/brands/tp-link-nuevo.png" },
  ],
  "nas-backups": [
    { name: "Synology", logo: "/brands/synology.png" },
    { name: "QNAP", logo: "/brands/qnap.png" },
  ],
  "structured-cabling": [
    { name: "Legrand", logo: "/brands/legrand.png" },
    { name: "Schrack", logo: "/brands/schrack.png" },
  ],

  // Home Solutions
  "smart-meters": [
    { name: "Shelly", logo: "/brands/shelly.png" },
    { name: "Sonoff", logo: "/brands/sonoff.png" },
    { name: "Tuya", logo: "/brands/tuya.png" },
  ],
  "solar-floodlights": [
    { name: "V-TAC", logo: "/brands/v-tac.png" },
    { name: "Ledvance", logo: "/brands/ledvance-ltd.png" },
    { name: "Philips", logo: "/brands/philips.png" },
  ],
  "gps-trackers": [
    { name: "Teltonika", logo: "/brands/teltonika.png" },
    { name: "Coban", logo: "/brands/coban.png" },
    { name: "SinoTrack", logo: "/brands/sinotrack.png" },
    { name: "Protrack", logo: "/brands/protrack.png" },
    { name: "Pandora", logo: "/brands/pandora.png" },
  ],
  dashcams: [
    { name: "Garmin", logo: "/brands/hikvision.png" }, // Using security camera brand as placeholder
    { name: "BlackVue", logo: "/brands/dahua.png" }, // Using security camera brand as placeholder
    { name: "Thinkware", logo: "/brands/teltonika.png" }, // Using GPS tracker brand as placeholder
  ],
  "home-sensors": [
    { name: "Aqara", logo: "/brands/aqara.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
    { name: "Sonoff", logo: "/brands/sonoff.png" },
    { name: "Tuya", logo: "/brands/tuya.png" },
    { name: "Philips Hue", logo: "/brands/philips.png" },
  ],

  // Fire Detection
  "fire-panels": [
    { name: "Bosch", logo: "/brands/bosch.png" },
    { name: "Honeywell", logo: "/brands/honeywell.png" },
    { name: "Siemens", logo: "/brands/siemens.png" },
  ],
  "smoke-gas": [{ name: "Honeywell", logo: "/brands/honeywell.png" }],
  "flood-detectors": [
    { name: "Aqara", logo: "/brands/aqara.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
  ],
  "smart-detectors": [
    { name: "Sonoff", logo: "/brands/sonoff.png" },
    { name: "Aqara", logo: "/brands/aqara.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
  ],

  // Photovoltaics
  "autonomous-pv": [
    { name: "Victron", logo: "/brands/victron-energy-b-v.png" },
    { name: "Sungrow", logo: "/brands/sungrow-power-supply.png" },
    { name: "Growatt", logo: "/brands/growatt.png" },
    { name: "SMA", logo: "/brands/sma-solar-technology.png" },
  ],
  "on-off-hybrid": [
    { name: "Huawei", logo: "/brands/huawei.png" },
    { name: "Fronius", logo: "/brands/fronius.png" },
    { name: "Sungrow", logo: "/brands/sungrow-power-supply.png" },
    { name: "Growatt", logo: "/brands/growatt.png" },
  ],
  "inverters-batteries": [
    { name: "Victron", logo: "/brands/victron-energy-b-v.png" },
    { name: "Huawei", logo: "/brands/huawei.png" },
    { name: "SMA", logo: "/brands/sma-solar-technology.png" },
  ],
  monitoring: [
    { name: "SolarEdge", logo: "/brands/solaredge.png" }, // Assuming keep if user mentioned SMA/Huawei in PV
    { name: "Huawei", logo: "/brands/huawei.png" },
    { name: "SMA", logo: "/brands/sma-solar-technology.png" },
    { name: "Fronius", logo: "/brands/fronius.png" },
  ],

  // Specialized
  "elder-care": [{ name: "Tuya", logo: "/brands/tuya.png" }],
  "airbnb-hotel": [
    { name: "Nuki", logo: "/brands/nuki.png" },
    { name: "Yale", logo: "/brands/yale-lock.png" },
    { name: "Shelly", logo: "/brands/shelly.png" },
  ],
  hospitals: [
    { name: "Siemens", logo: "/brands/siemens.png" },
    { name: "Bosch", logo: "/brands/bosch.png" },
  ],
  "industrial-solutions": [
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "Axis", logo: "/brands/axis-communications.png" },
    { name: "Bosch", logo: "/brands/bosch.png" },
    { name: "Siemens", logo: "/brands/siemens.png" },
  ],
  "temp-monitoring": [
    { name: "Shelly", logo: "/brands/shelly.png" },
    { name: "Sonoff", logo: "/brands/sonoff.png" },
  ],

  // Support
  "tech-support": [
    { name: "TeamViewer", logo: "/brands/teamviewer.png" },
    { name: "AnyDesk", logo: "/brands/anydesk.png" },
  ],
  "maintenance-contracts": [
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Ajax", logo: "/brands/ajax.png" },
  ],
  "remote-support": [
    { name: "TeamViewer", logo: "/brands/teamviewer.png" },
    { name: "AnyDesk", logo: "/brands/anydesk.png" },
  ],
  "equipment-upgrades": [
    { name: "Hikvision", logo: "/brands/hikvision.png" },
    { name: "Dahua", logo: "/brands/dahua.png" },
    { name: "Ubiquiti", logo: "/brands/ubiquiti.png" },
  ],
};

// Get brands for a subcategory, with fallback to generic tech brands
export function getBrandsForSubcategory(subcatId: string): Brand[] {
  return (
    subcategoryBrands[subcatId] || [
      { name: "Hikvision", logo: "/brands/hikvision.png" },
      { name: "Schneider Electric", logo: "/brands/schneider-electric.png" },
      { name: "Honeywell", logo: "/brands/honeywell.png" },
    ]
  );
}
