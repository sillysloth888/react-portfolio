import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// adapted from https://v5.reactrouter.com/web/guides/scroll-restoration
export default function useScrollToElement(id) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById(id).scrollIntoView();
  }, [pathname]);

  return null;
}