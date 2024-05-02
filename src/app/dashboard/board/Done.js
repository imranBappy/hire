import Title from "antd/es/typography/Title";
import Todo from "./Todo";

const Done = ({ state, onDragOver, onEndDrag, dragContainerName,onItemDragStart,
  onItemDragEnd, }) => {
  const [items, setItem] = state;
  const doneItems = items?.filter((todo) => todo.status === "done");
  return (
    <div
      data-name="done"
      data-type="container"
      onDragOver={onDragOver}
      onDragLeave={onEndDrag}
      onDrop={onEndDrag}
      className={`border min-h-[400px] flex-grow flex-shrink p-4 rounded-md  basis-[300px]
      ${
        dragContainerName === "done"
          ? "border-green-500  shadow-lg"
          : "!border-none shadow-sm bg-green-500/5"
      }
      `}
    >
      <Title
        level={5}
        className="uppercase !text-sm mx-1 !-mt-1 border-b-2 pb-1"
      >
        Done
      </Title>
      <div className=" flex flex-col gap-2 ">
        {doneItems?.map((todo) => (
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

export default Done;
