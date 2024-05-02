import { Flex, Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <Flex justify="center" align="center" className=" min-h-screen w-full">
      <Spin size="large" tip="Loading..." />
    </Flex>
  );
};

export default Loader;
