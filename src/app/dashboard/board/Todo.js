import { Avatar, Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { MoreOutlined } from "@ant-design/icons";
import { useCounterStore } from "@/Providers/CounterStoreProvider";

const Todo = ({ todo }) => {
  const { onItemDragStart, onItemDragEnd } = useCounterStore((state) => state);
  return (
    <div
      onDragStart={onItemDragStart}
      data-id={todo.id}
      className="rounded shadow-sm bg-white px-3 py-3 cursor-pointer "
      draggable={true}
      onDragEnd={onItemDragEnd}
    >
      <div className="flex justify-between items-start-start">
        <Paragraph className="text-[12px] font-normal !leading-5 !text-[#0f1e38] ">
          {todo.title}
        </Paragraph>
        <Button className="menu " icon={<MoreOutlined />} />
      </div>
      <div className=" flex justify-between items-center mt-2 ">
        <p className=" text-[15px]  font-medium !leading-5 !text-[#0f1e38] ">
          {todo.user.name}
        </p>
        <Avatar size={30} className="mr-2" src={todo.user.avatar} />
      </div>
    </div>
  );
};

export default Todo;
