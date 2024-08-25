"use client";
import React from "react";
import { Spin } from "antd";
import "antd/dist/reset.css";

const SplashScreen: React.FC = () => {
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
    color: "#1a1a1a",
  },
};

export default SplashScreen;
