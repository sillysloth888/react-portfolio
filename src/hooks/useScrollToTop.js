import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// from https://v5.reactrouter.com/web/guides/scroll-restoration
export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0, 
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}