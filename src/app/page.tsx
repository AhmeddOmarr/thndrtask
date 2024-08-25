// app/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import SplashScreen from "./components/Splash";
import ExplorePage from "./Explore/Explore"; // Make sure this path is correct

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Same delay as in SplashScreen

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      {showSplash ? <SplashScreen /> : <ExplorePage />}
    </main>
  );
}