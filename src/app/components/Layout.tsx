"use client";
import React from 'react';
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

const layout: React.FC = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png" 
          alt="NASDAQ Logo"
          style={{ width: '100px', marginRight: '16px' }}
        />
        Welcome to NASDAQ.
      </Header>
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png" 
          alt="NASDAQ Logo"
          style={{ width: '100px', marginRight: '16px' }}
        />
        Header
      </Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png" 
          alt="NASDAQ Logo"
          style={{ width: '100px', marginRight: '16px' }}
        />
        Header
      </Header>
      <Layout>
        <Content style={contentStyle}>Content</Content>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png" 
            alt="NASDAQ Logo"
            style={{ width: '100px', marginRight: '16px' }}
          />
          Header
        </Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Flex>
);

export default layout;
