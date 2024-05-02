"use client";
import Title from "antd/es/typography/Title";
import Todo from "./Todo";

const Todos = ({
  state,
  onDragOver,
  onEndDrag,
  dragContainerName,
  onItemDragStart,
  onItemDragEnd,
}) => {
  const [items, setItem] = state;
  const todos = items?.filter((todo) => todo.status === "todo");

  return (
    <div
      data-name="todo"
      data-type="container"
      onDragOver={onDragOver}
      onDragLeave={onEndDrag}
      onDrop={onEndDrag}
      className={`border min-h-[400px] flex-grow flex-shrink p-4 rounded-md  basis-[300px]
      ${
        dragContainerName === "todo"
          ? "border-gray-500  shadow-lg"
          : "!border-none shadow-sm bg-gray-50"
      }
      `}
    >
      <Title
        level={5}
        className="uppercase !text-sm mx-1 !-mt-1 border-b-2 pb-1"
      >
        Todo
      </Title>
      <div className=" flex flex-col gap-2 ">
        {todos?.map((todo) => (
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

export default Todos;
