"use client";
import { useState } from "react";
import { Layout } from "antd";
import Sider from "./Sider";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="min-h-screen" hasSider>
      <Sider trigger={null} collapsible={true} collapsed={collapsed} />
      <Layout style={{ marginLeft: `${!collapsed ? 200 : 82}px` }}>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content>{children} </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
