"use client";
import { Card, Avatar, Typography, Flex } from "antd";

import Image from "next/image";
import { Demo } from "@/assets/images";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Meta } = Card;
const ProjectCard = () => {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<Image src={Demo} alt="demo" width={300} height={200} />}
      actions={[
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" className="hover:!text-red-500" />,
      ]}
    >
      <Meta
        title={
          <Link className="text-inherit" href="/dashboard/project/1">
            View Project
          </Link>
        }
        description="This is the description"
      />
    </Card>
  );
};

export default ProjectCard;
