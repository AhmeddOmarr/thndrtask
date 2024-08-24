"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import "antd/dist/reset.css";

const SplashScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/explore"); // Correct path for internal navigation
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png"
          alt="NASDAQ Logo"
          style={styles.logo}
        />
        <div style={{ marginTop: "20px" }}>
          <Spin size="large" />
        </div>
      </div>
      <div style={styles.developerName}>Ahmed Omar</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "grey",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "150px",
    height: "auto",
    marginBottom: "20px",
  },
  developerName: {
    position: "absolute" as const,
    bottom: "20px",
    textAlign: "center" as const,
    fontSize: "14px",
    color: "#888",
  },
};

export default SplashScreen;
