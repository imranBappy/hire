import Dashboard from "@/components/Dashboard/Dashboard";
import Breadcrumb from "@/components/DashboardLayout/Breadcrumb";

const items = [{ name: "Dashboard", href: "/dashboard/" }];
const page = () => {
  return (
    <div>
      <Breadcrumb items={items} />
      <div className="bg-white p-4 rounded-lg shadow-md min-h-[calc(100vh-216px)] ">
        <Dashboard />
      </div>
    </div>
  );
};

export default page;
