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
