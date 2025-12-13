"use client";

import Script from "next/script";

export function FacebookMessenger() {
  // Only render if FACEBOOK_PAGE_ID is defined
  if (!process.env.FACEBOOK_PAGE_ID) {
    return null;
  }

  const fbScriptUrl = `https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js`;

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        data-page_id={process.env.FACEBOOK_PAGE_ID}
        data-attribution="setup_tool"
      ></div>
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
