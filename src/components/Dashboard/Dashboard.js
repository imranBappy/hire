"use client";
import { Button, Flex } from "antd";
import { Typography } from "antd";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
const { Title } = Typography;
const Dashboard = () => {
  return (
    <div className="lg:px-5 lg:py-3">
      <Flex justify="space-between" items="center" className="mb-4">
        <Title level={3}>Projects</Title>
        <Button type="primary">
          <Link href="/dashboard/create-project">New Project</Link>
        </Button>
      </Flex>
      <Flex wrap="wrap" gap={8}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Flex>
    </div>
  );
};

export default Dashboard;
