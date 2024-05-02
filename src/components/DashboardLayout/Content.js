import { Layout } from "antd";
const { Content: AntContent } = Layout;
const Content = ({ children }) => {
  return (
    <AntContent className="mt-2 mx-4">
      <div className="p-4  min-h-[calc(100vh-145px)]">{children}</div>
    </AntContent>
  );
};

export default Content;
