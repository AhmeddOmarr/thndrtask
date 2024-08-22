"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import SplashScreen from "./components/Splash";
import { useRouter } from "next/router";
import "antd/dist/reset.css"; 
import { Flex, Layout } from 'antd';
import { Spin } from "antd";


export default function Home() {
  
  return (
    <main className={styles.main}>
      
      <SplashScreen/>
      
    </main>
  );
}
