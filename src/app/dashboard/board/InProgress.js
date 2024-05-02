"use client";
import Title from "antd/es/typography/Title";
import Todo from "./Todo";
import { useCounterStore } from "@/Providers/CounterStoreProvider";

const InProgress = () => {
  const {
    items,
    onDragOver,
    onEndDrag,
    dragContainerName,
    onItemDragStart,
    onItemDragEnd,
  } = useCounterStore((state) => state);
  const progressItem = items?.filter((todo) => todo.status === "progress");

  return (
    <div
      data-name="progress"
      data-type="container"
      onDragOver={onDragOver}
      onDragLeave={onEndDrag}
      onDrop={onEndDrag}
      className={`border min-h-[400px] flex-grow flex-shrink p-4 rounded-md bg-yellow-500/5 basis-[300px]
      ${
        dragContainerName === "progress"
          ? "border-yellow-500  shadow-lg"
          : "!border-none shadow-sm"
      }
      `}
    >
      <Title
        level={5}
        className="uppercase !text-sm mx-1 !-mt-1 border-b-2 pb-1"
      >
        In Progress
      </Title>
      <div className=" flex flex-col gap-2 ">
        {progressItem?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onItemDragStart={onItemDragStart}
            onItemDragEnd={onItemDragEnd}
          />
        ))}
      </div>
    </div>
  );
};

export default InProgress;
