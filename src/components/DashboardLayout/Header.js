import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
const { Header: AntHeader } = Layout;
const Header = ({ collapsed, setCollapsed }) => {
  return (
    <AntHeader className=" !bg-white  !p-0">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="!w-16 !h-16  !text-base"
      />
    </AntHeader>
  );
};

export default Header;
