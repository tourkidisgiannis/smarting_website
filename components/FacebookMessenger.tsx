"use client";

import Script from "next/script";

export function FacebookMessenger() {
  // Only render if FACEBOOK_PAGE_ID is defined
  if (!process.env.FACEBOOK_PAGE_ID) {
    return null;
  }

  // Check if we have both page ID and app ID (app ID is optional but may be needed for some features)
  const fbAppId = process.env.FACEBOOK_APP_ID || '';
  const fbPageId = process.env.FACEBOOK_PAGE_ID;

  // Build the script URL - include appId if available
  const fbScriptUrl = fbAppId
    ? `https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v19.0&appId=${fbAppId}`
    : `https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v19.0`;

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        data-page_id={fbPageId}
        data-attribution="setup_tool"
      >
      </div>
      <Script
        src={fbScriptUrl}
        strategy="lazyOnload"
        crossOrigin="anonymous"
        async
        defer
      />
    </>
  );
}
