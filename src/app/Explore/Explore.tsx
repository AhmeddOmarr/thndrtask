"use client";

import React from "react";
import Stocks from "@/app/components/Stocks"; // Ensure this path is correct

const ExplorePage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          padding: "10px 20px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png"
            alt="Logo"
            style={{ height: "60px", marginLeft: "30px" }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: "1", padding: "20px" }}>
        <Stocks />
      </main>

      {/* Footer */}
      <footer
        style={{
          
          padding: "10px",
          position: "sticky",
          bottom: 0,
          width: "100%",
        }}
      >
        <p style={{ margin: 0, textAlign: "center" }}>Ahmed Omar</p>
      </footer>
    </div>
  );
};

export default ExplorePage;
