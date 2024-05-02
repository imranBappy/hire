"use client";

import { Layout, Menu } from "antd";
const { Sider: AntSider } = Layout;

import {
  UnorderedListOutlined,
  PicRightOutlined,
  BorderlessTableOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import Link from "next/link";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link href="/dashboard" className="text-white">
      Dashboard
    </Link>,
    "0",
    <DashboardOutlined />
  ),
  getItem(
    <Link href="/dashboard/board" className="text-white">
      Board
    </Link>,
    "2",
    <BorderlessTableOutlined />
  ),
  getItem(
    <Link href="/dashboard/blacklog" className="text-white">
      Backlog
    </Link>,
    "1",
    <PicRightOutlined />
  ),
  getItem(
    <Link href="/dashboard/list" className="text-white">
      List
    </Link>,
    "3",
    <UnorderedListOutlined />
  ),
];

const Sider = ({ trigger, collapsible, collapsed }) => {
  return (
    <AntSider
      trigger={trigger}
      collapsible={collapsible}
      collapsed={collapsed}
      className="!h-screen !fixed !overflow-y-auto !overflow-x-hidden !left-0 !top-0 "
    >
      <div className="demo-logo-vertical  w-full">
        <div className=" h-14 bg-slate-800 rounded-md m-2"></div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        items={items}
      />
    </AntSider>
  );
};

export default Sider;
