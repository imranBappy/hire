import { Avatar, Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import React, { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";

const Todo = ({ todo, onItemDragStart, onItemDragEnd }) => {
  //   const handleDragEnter = (e) => {
  //     const id = e.target.getAttribute("data-id");
  //     console.log("enter", id);
  //   };
  return (
    <div
      onDragStart={onItemDragStart}
      //   onDragEnter={handleDragEnter}
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
