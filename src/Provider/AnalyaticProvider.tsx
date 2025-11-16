"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const AnalyticsProvider = ({ trackingId }: { trackingId: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Exit if gtag.js isn't loaded or no trackingId is provided
    if (typeof window === "undefined" || !window.gtag || !trackingId) {
      return;
    }

    // Construct the full URL, including search parameters
    const url = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    // Prevent duplicate tracking for the same URL
    if (window.lastTrackedPath === url) {
      return;
    }
    window.lastTrackedPath = url; // Update the last tracked path

    // Send the 'page_view' event using the 'config' command.
    // This is the recommended way to track page views in an SPA.
    window.gtag("config", trackingId, {
      page_path: url,
    });
    
  }, [pathname, searchParams, trackingId]); // Add trackingId to the dependency array

  return null;
};

export default AnalyticsProvider;