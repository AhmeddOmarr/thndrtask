// app/page.tsx
"use client";

import React from "react";
import styles from "./page.module.css";
import SplashScreen from "./components/Splash";
import ExplorePage from "./Explore/Explore"; // Make sure this path is correct

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <SplashScreen /> */}
      <ExplorePage />
    </main>
  );
}
