"use client";
// hooks/usePreviousRoute.js
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const usePreviousRoute = () => {
  const router = useRouter();
  const previousRouteRef = useRef(router.asPath);

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      previousRouteRef.current = router.asPath;
    };

    if (router.events) {
      router.events.on("routeChangeStart", handleRouteChangeStart);

      return () => {
        router.events.off("routeChangeStart", handleRouteChangeStart);
      };
    }
  }, [router]);

  return previousRouteRef.current;
};

export default usePreviousRoute;
