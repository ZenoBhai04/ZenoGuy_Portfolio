"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/loading-screen";
import Ballpit from "@/components/Ballpit";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const minLoadingTime = 2000;
    const startTime = Date.now();

    const checkLoadingComplete = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= minLoadingTime && document.readyState === "complete") {
        setIsLoading(false);
      } else {
        setTimeout(checkLoadingComplete, 100);
      }
    };

    if (document.readyState === "complete") {
      checkLoadingComplete();
    } else {
      window.addEventListener("load", checkLoadingComplete);
      return () => window.removeEventListener("load", checkLoadingComplete);
    }
  }, []);

  if (!isHydrated) return null;

  return (
    <div className="relative min-h-screen">
    {/* ================= BALLPIT BACKGROUND ================= */}
    <div className="fixed inset-0 z-0 pointer-events-none">
    <Ballpit
    className="w-full h-full"
    count={50}
    gravity={0.0}
    friction={1.00}
    wallBounce={0.95}
    followCursor
    />
    </div>

    {/* ================= CONTENT (ABOVE BALLPIT) ================= */}
    <div className="relative z-10">
    <AnimatePresence mode="wait">
    {isLoading && (
      <LoadingScreen
      key="loading"
      onLoadingComplete={() => setIsLoading(false)}
      />
    )}
    </AnimatePresence>

    <AnimatePresence mode="wait">
    {!isLoading && <div key="content">{children}</div>}
    </AnimatePresence>
    </div>
    </div>
  );
}
