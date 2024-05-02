import Breadcrumb from "@/components/DashboardLayout/Breadcrumb";
import Board from "./Board";
const items = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Board", href: "/dashboard/board" },
];
const page = () => {
  return (
    <div>
      <Breadcrumb items={items} />
      <div className="bg-white p-4 rounded-lg shadow-md min-h-[calc(100vh-216px)] ">
       <Board />
      </div>
    </div>
  );
};

export default page;
