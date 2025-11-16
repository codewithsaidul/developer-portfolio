"use client";
import Script from "next/script";

const GoogleAnalytics = ({ trackingId }: { trackingId: string }) => {
  return (
    <>
      {/* Preload GTM script for faster load */}

      {/* Load GTM script lazily after page interaction */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
        defer
      />

      {/* Inline gtag() initialization to avoid render-blocking */}
      <Script id="ga-init" async strategy="afterInteractive" defer>
        {`
          if (!window.gtagInitialized) {
            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments); }
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', '${trackingId}', { send_page_view: false });

            window.gtagInitialized = true;
          }
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;