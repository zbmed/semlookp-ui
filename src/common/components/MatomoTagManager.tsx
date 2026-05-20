import React, { ReactNode, useEffect } from "react";

interface MatomoTagManagerProps {
  containerUrl: string;
  enabled: boolean;
  children?: ReactNode;
}

declare global {
  interface Window {
    _mtm: Array<Record<string, unknown>>;
  }
}

export const MatomoTagManager: React.FC<MatomoTagManagerProps> = ({
  containerUrl,
  enabled,
  children,
}) => {
  useEffect(() => {
    if (!enabled) return; // don't load MTM if disabled

    const _mtm = (window._mtm = window._mtm || []);
    _mtm.push({
      "mtm.startTime": new Date().getTime(),
      event: "mtm.Start",
    });

    const d = document;
    const g = d.createElement("script");
    const s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.async = true;
    g.src = containerUrl;
    s.parentNode?.insertBefore(g, s);

    // Optional: clean up if component unmounts
    return () => {
      // You could remove the script, but usually we keep it for SPA
    };
  }, [containerUrl, enabled]);

  return <>{children}</>;
};
