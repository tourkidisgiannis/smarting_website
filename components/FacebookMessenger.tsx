"use client";

import Script from "next/script";

export function FacebookMessenger() {
  // Only render if NEXT_PUBLIC_FACEBOOK_PAGE_ID is defined
  if (!process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID) {
    return null;
  }

  const fbPageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        data-page_id={fbPageId}
        data-attribution="setup_tool"
      ></div>
      <Script
        src={`https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
        id="facebook-jssdk"
      />
    </>
  );
}
