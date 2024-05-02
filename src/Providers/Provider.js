import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";

const Provider = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
};

export default Provider;
