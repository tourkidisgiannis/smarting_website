import { useEffect } from "react";

const FacebookMessenger = () => {
  useEffect(() => {
    // Only initialize if page ID is available
    if (!process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID) return;

    // Check if Facebook SDK is already loaded
    if (window.FB) return;

    // Create fb-root div if it doesn't exist
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    // Set up Facebook SDK initialization
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    // Load Facebook Customer Chat SDK
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.id = "facebook-jssdk";
    document.body.appendChild(script);
  }, []);

  // Only render if page ID is available
  if (!process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID) {
    return null;
  }

  return (
    <div
      className="fb-customerchat"
      data-page_id={process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID}
      data-attribution="setup_tool"
    />
  );
};

export default FacebookMessenger;
