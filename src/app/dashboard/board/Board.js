"use client";

import { Flex, Typography } from "antd";
import InProgress from "./InProgress";
import Done from "./Done";
import { useState } from "react";
import Todos from "./Todos";
import { useCounterStore } from "@/Providers/CounterStoreProvider";
const { Title } = Typography;
const myTodos = [
  {
    id: 1,
    title: "Unsupported metadata viewport, This problem is big problem (1)",
    user: {
      name: "Hira",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    status: "todo",
  },
  {
    id: 2,
    title: "Unsupported metadata viewport, This problem is big problem",
    user: {
      name: "Hira",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    status: "progress",
  },
  {
    id: 3,
    title: "Unsupported metadata viewport, This problem is big problem",
    user: {
      name: "Hira",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    status: "progress",
  },
  {
    id: 4,
    title: "Unsupported metadata viewport, This problem is big problem",
    user: {
      name: "Hira",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    status: "done",
  },
];
const Board = () => {
  // const [items, setItems] = useState(myTodos);
  // const [dragContainerName, setDragContainerName] = useState("");
  // const [currentDragItem, setCurrentDragItem] = useState(null);
 const {
   items,
   setItems,
   onDragOver,
   onEndDrag,
   setCurrentDragItem,
   dragContainerName,
   currentDragItem,
 } = useCounterStore((state) => state);

  // const onDragOver = (e) => {
  //   e.preventDefault();
  //   const name = e.target.getAttribute("data-name");
  //   setDragContainerName(name);
  // };

  // const onEndDrag = (e) => {
  //   setDragContainerName("");

  //   const updatedItems = items.map((item) => {
  //     if (item.id === currentDragItem) {
  //       const newItem = {
  //         ...item,
  //         status: dragContainerName,
  //       };
  //       return newItem;
  //     }
  //     return item;
  //   });
  //   setItems(updatedItems);
  // };

  const onItemDragStart = (e) => {
    const id = e.target.getAttribute("data-id");
    if (id) {
      setCurrentDragItem(Number(id));
    }
  };
  const onItemDragEnd = (e) => {
    setCurrentDragItem(null);
  };
  return (
    <div className="lg:px-5 lg:py-3">
      <Title level={3}>Board</Title>
      <Flex wrap="wrap" gap={16} justify="space-between" className=" h-full">
        <Todos
          state={[items, setItems]}
          onDragOver={onDragOver}
          onEndDrag={onEndDrag}
          dragContainerName={dragContainerName}
          onItemDragStart={onItemDragStart}
          onItemDragEnd={onItemDragEnd}
        />
        <InProgress
          state={[items, setItems]}
          onDragOver={onDragOver}
          onEndDrag={onEndDrag}
          dragContainerName={dragContainerName}
          onItemDragStart={onItemDragStart}
          onItemDragEnd={onItemDragEnd}
        />
        <Done
          state={[items, setItems]}
          onDragOver={onDragOver}
          onEndDrag={onEndDrag}
          dragContainerName={dragContainerName}
          onItemDragStart={onItemDragStart}
          onItemDragEnd={onItemDragEnd}
        />
      </Flex>
    </div>
  );
};

export default Board;
