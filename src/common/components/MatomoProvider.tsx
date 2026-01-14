import React, { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    _paq?: any[];
  }
}

interface MatomoProviderProps {
  siteId: string;
  trackerUrl: string;
  enabled: boolean;
  children: ReactNode;
}

export const MatomoProvider: React.FC<MatomoProviderProps> = ({
  siteId,
  trackerUrl,
  enabled,
  children,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!enabled) return;

    window._paq = window._paq || [];
    window._paq.push(["setTrackerUrl", trackerUrl]);
    window._paq.push(["setSiteId", siteId]);
    window._paq.push(["enableLinkTracking"]);
    window._paq.push(["trackPageView"]);
  }, [enabled, siteId, trackerUrl]);

  useEffect(() => {
    if (!enabled) return;
    if (!window._paq) return;

    window._paq.push(["setCustomUrl", window.location.pathname]);
    window._paq.push(["trackPageView"]);
  }, [location.pathname, enabled]);

  return <>{children}</>;
};
