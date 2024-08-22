"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import "antd/dist/reset.css";
import "antd/dist/reset.css"; // Ensure this is imported globally or in your app's entry point

const SplashScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/explore"); // Navigate to the main explore screen
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [router]);

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png" 
          alt="NASDAQ_Logo.svg.png"
          style={styles.logo}
        />
        <Spin size="large" style={styles.spinner} />
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
    backgroundColor: "blue",
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
  spinner: {
    marginTop: "20px",
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
