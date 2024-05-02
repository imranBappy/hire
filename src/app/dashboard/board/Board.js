"use client";

import { Flex, Typography } from "antd";
import InProgress from "./InProgress";
import Done from "./Done";
import Todos from "./Todos";
const { Title } = Typography;

const Board = () => {
  return (
    <div className="lg:px-5 lg:py-3">
      <Title level={3}>Board</Title>
      <Flex wrap="wrap" gap={16} justify="space-between" className=" h-full">
        <Todos />
        <InProgress />
        <Done />
      </Flex>
    </div>
  );
};

export default Board;
