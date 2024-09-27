import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LinkScroller({ children }) {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    if (hash === "") {
      window.scrollTo(0, 0);
    } // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return children;
}
