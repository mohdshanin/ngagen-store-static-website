import { useState, useEffect } from "react";

export default function useMobile(query) {
  const [matches, setMatches] = useState();
  useEffect(() => {
    setMatches(window?.matchMedia(query).matches);
  }, []);

  useEffect(() => {
    const media = window?.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    try {
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } catch (error) {
      console.error(error);
    }
  }, [matches, query]);
  return matches;
}

export function useWindowSize() {
  const getSize = () => ({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  const [windowSize, setWindowSize] = useState({ getSize });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const useDisableBodyScroll = (open) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
};
