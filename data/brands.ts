// Brand logos mapped to subcategory IDs
// Using known brands in the security, electrical, and smart home industry

export interface Brand {
  name: string;
  logo: string; // SVG path or image URL
}

export const subcategoryBrands: Record<string, Brand[]> = {
  // Security Systems
  // Security Systems - Keeping as is since user did not specify changes for Security
  "cctv": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "Ajax", logo: "/brands/ajax.svg" },
    { name: "TP-Link", logo: "/brands/tp-link.svg" },
    { name: "EZVIZ", logo: "/brands/ezviz.svg" },
    { name: "Hiwatch", logo: "/brands/hiwatch.svg" },
  ],
  "nvr-dvr": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "TVT", logo: "/brands/tvt.svg" },
  ],
  "video-intercom": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "CTC", logo: "/brands/ctc.svg" },
    { name: "Fermax", logo: "/brands/fermax.svg" },
    { name: "Urmet", logo: "/brands/urmet.svg" },
    { name: "Comelit", logo: "/brands/comelit.svg" },
  ],
  "access-control": [  
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "Yale", logo: "/brands/yale.svg" },
    { name: "Paxtron", logo: "/brands/paxtron.svg" },
  ],
  "alarm-systems": [
    { name: "Ajax", logo: "/brands/ajax.svg" },
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "Sigma", logo: "/brands/sigma.svg" },
    { name: "Paradox", logo: "/brands/paradox.svg" },
    { name: "Bosch", logo: "/brands/bosch.svg" },
  ],
  "anpr": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Dahua", logo: "/brands/dahua.svg" },
    { name: "Axis", logo: "/brands/axis.svg" },
  ],
  "perimeter": [
    { name: "Optex", logo: "/brands/optex.svg" },
    { name: "ALEAN", logo: "/brands/alean.svg" },
  ],

  // Electrical - Keeping as is since user did not specify changes
  "home-electrics": [
    { name: "Schneider Electric", logo: "/brands/schneider.svg" },
    { name: "ABB", logo: "/brands/abb.svg" },
    { name: "Legrand", logo: "/brands/legrand.svg" },
    { name: "Hager", logo: "/brands/hager.svg" },
    { name: "Eaton", logo: "/brands/eaton.svg" },
  ],
  "industrial-install": [
    { name: "Schneider Electric", logo: "/brands/schneider.svg" },
    { name: "ABB", logo: "/brands/abb.svg" },
    { name: "Legrand", logo: "/brands/legrand.svg" },
    { name: "Hager", logo: "/brands/hager.svg" },
    { name: "Siemens", logo: "/brands/siemens.svg" },
  ],
  "panel-upgrades": [
    { name: "Schneider Electric", logo: "/brands/schneider.svg" },
    { name: "ABB", logo: "/brands/abb.svg" },
    { name: "Hager", logo: "/brands/hager.svg" },
  ],
  "lighting": [
    { name: "Philips", logo: "/brands/philips.svg" },
    { name: "Osram", logo: "/brands/osram.svg" },
    { name: "ACA", logo: "/brands/aca.svg" },
    { name: "Ledvance", logo: "/brands/ledvance.svg" },
    { name: "EUROLAMP", logo: "/brands/eurolamp.svg" },
    { name: "V-TAC", logo: "/brands/v-tac.svg" },
  ],
  "ev-chargers": [
    { name: "ABB", logo: "/brands/abb.svg" },
    { name: "Wallbox", logo: "/brands/wallbox.svg" },
    { name: "Tesla", logo: "/brands/tesla.svg" },
    { name: "MC Chargers", logo: "/brands/mcchargers.svg" },
    { name: "Huawei", logo: "/brands/huawei.svg" },
  ],
  "earthing": [
    { name: "OBO Bettermann", logo: "/brands/obo.svg" },
    { name: "DEHN", logo: "/brands/dehn.svg" },
    { name: "Furse", logo: "/brands/furse.svg" },
  ],

  // Smart Home
  "full-design": [
    { name: "KNX", logo: "/brands/knx.svg" },
  ],
  "diy-kits": [
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Tuya", logo: "/brands/tuya.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
    { name: "Zigbee", logo: "/brands/zigbee.svg" },
  ],
  "smart-lighting": [
    { name: "Philips Hue", logo: "/brands/philips.svg" },
    { name: "Yeelight", logo: "/brands/yeelight.svg" },
    { name: "LIFX", logo: "/brands/lifx.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
  ],
  "thermostats": [
    { name: "Nest", logo: "/brands/nest.svg" },
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],
  "smart-locks": [
    { name: "Nuki", logo: "/brands/nuki.svg" },
    { name: "Yale", logo: "/brands/yale.svg" },
    { name: "August", logo: "/brands/august.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
  ],
  "smart-speakers": [
    { name: "Google Nest", logo: "/brands/google.svg" },
  ],
  "shading": [
    { name: "Somfy", logo: "/brands/somfy.svg" },
    { name: "Nice", logo: "/brands/nice.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
  ],
  "doorbells": [
    { name: "Ring", logo: "/brands/ring.svg" },
    { name: "Nest Doorbell", logo: "/brands/nest.svg" },
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
  ],
  "garden-automation": [
    { name: "Gardena Smart", logo: "/brands/gardena.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],
  "garage-remote": [
    { name: "Nice", logo: "/brands/nice.svg" },
    { name: "Somfy", logo: "/brands/somfy.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],

  // Networks
  "web-dev": [],
  "wifi-mesh": [
    { name: "Ubiquiti", logo: "/brands/ubiquiti.svg" },
    { name: "TP-Link", logo: "/brands/tplink.svg" },
    { name: "Google", logo: "/brands/google.svg" },
    { name: "Asus", logo: "/brands/asus.svg" },
  ],
  "ap-router": [
    { name: "Ubiquiti", logo: "/brands/ubiquiti.svg" },
    { name: "MikroTik", logo: "/brands/mikrotik.svg" },
    { name: "Cisco", logo: "/brands/cisco.svg" },
    { name: "TP-Link Omada", logo: "/brands/tplink.svg" },
  ],
  "nas-backups": [
    { name: "Synology", logo: "/brands/synology.svg" },
    { name: "QNAP", logo: "/brands/qnap.svg" },
    { name: "TrueNAS", logo: "/brands/truenas.svg" },
  ],
  "structured-cabling": [
    { name: "Legrand", logo: "/brands/legrand.svg" },
    { name: "Schrack", logo: "/brands/schrack.svg" },
  ],

  // Home Solutions
  "smart-meters": [
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
    { name: "Tuya", logo: "/brands/tuya.svg" },
  ],
  "solar-floodlights": [
    { name: "V-TAC", logo: "/brands/v-tac.svg" },
    { name: "Ledvance", logo: "/brands/ledvance.svg" },
    { name: "Philips", logo: "/brands/philips.svg" },
  ],
  "gps-trackers": [
    { name: "Teltonika", logo: "/brands/teltonika.svg" },
    { name: "Coban", logo: "/brands/coban.svg" },
    { name: "SinoTrack", logo: "/brands/sinotrack.svg" },
    { name: "Protrack", logo: "/brands/protrack.svg" },
    { name: "Pandora", logo: "/brands/pandora.svg" },
  ],
  "dashcams": [],
  "home-sensors": [
    { name: "Aqara", logo: "/brands/aqara.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
    { name: "Tuya", logo: "/brands/tuya.svg" },
    { name: "Philips Hue", logo: "/brands/philips.svg" },
  ],

  // Fire Detection
  "fire-panels": [
    { name: "Bosch", logo: "/brands/bosch.svg" },
    { name: "Olympia Electronics", logo: "/brands/olympia.svg" },
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
    { name: "Siemens", logo: "/brands/siemens.svg" },
  ],
  "smoke-gas": [
    { name: "Honeywell", logo: "/brands/honeywell.svg" },
    { name: "Olympia Electronics", logo: "/brands/olympia.svg" },
  ],
  "flood-detectors": [
    { name: "Aqara", logo: "/brands/aqara.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],
  "smart-detectors": [
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
    { name: "Aqara", logo: "/brands/aqara.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],

  // Photovoltaics
  "autonomous-pv": [
    { name: "Victron", logo: "/brands/victron.svg" },
    { name: "Sungrow", logo: "/brands/sungrow.svg" },
    { name: "Growatt", logo: "/brands/growatt.svg" },
    { name: "SMA", logo: "/brands/sma.svg" },
  ],
  "on-off-hybrid": [
    { name: "Huawei", logo: "/brands/huawei.svg" },
    { name: "Fronius", logo: "/brands/fronius.svg" },
    { name: "Sungrow", logo: "/brands/sungrow.svg" },
    { name: "Growatt", logo: "/brands/growatt.svg" },
  ],
  "inverters-batteries": [
    { name: "Victron", logo: "/brands/victron.svg" },
    { name: "Huawei", logo: "/brands/huawei.svg" },
    { name: "SMA", logo: "/brands/sma.svg" },
  ],
  "monitoring": [
    { name: "SolarEdge", logo: "/brands/solaredge.svg" }, // Assuming keep if user mentioned SMA/Huawei in PV
    { name: "Huawei", logo: "/brands/huawei.svg" },
    { name: "SMA", logo: "/brands/sma.svg" },
    { name: "Fronius", logo: "/brands/fronius.svg" },
  ],

  // Specialized
  "elder-care": [
    { name: "Tuya", logo: "/brands/tuya.svg" },
  ],
  "airbnb-hotel": [
    { name: "Nuki", logo: "/brands/nuki.svg" },
    { name: "Yale", logo: "/brands/yale.svg" },
    { name: "August", logo: "/brands/august.svg" },
    { name: "Shelly", logo: "/brands/shelly.svg" },
  ],
  "hospitals": [
    { name: "Siemens", logo: "/brands/siemens.svg" },
    { name: "Bosch", logo: "/brands/bosch.svg" },
  ],
  "industrial-solutions": [
    { name: "Hikvision", logo: "/brands/hikvision.svg" },
    { name: "Axis", logo: "/brands/axis.svg" },
    { name: "Bosch", logo: "/brands/bosch.svg" },
    { name: "Siemens", logo: "/brands/siemens.svg" },
  ],
  "temp-monitoring": [
    { name: "Shelly", logo: "/brands/shelly.svg" },
    { name: "Sonoff", logo: "/brands/sonoff.svg" },
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
