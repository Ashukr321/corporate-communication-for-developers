"use client";

import { useEffect } from "react";

export default function ServiceWorker() {
  useEffect(() => {
    // Only in production: a dev-mode SW would cache stale HMR bundles.
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);
  return null;
}
