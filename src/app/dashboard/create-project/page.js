import React from "react";
import CreateProject from "./CreateProject";
import Breadcrumb from "@/components/DashboardLayout/Breadcrumb";
const items = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Create Project", href: "/dashboard/create-project" },
];
const page = () => {
  return (
    <div>
      <Breadcrumb items={items} />
      <div className="bg-white p-4 rounded-lg shadow-md min-h-[calc(100vh-216px)] ">
        <CreateProject />
      </div>
    </div>
  );
};

export default page;
