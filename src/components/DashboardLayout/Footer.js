import { Layout } from "antd";
import Link from "next/link";
const { Footer: AntFooter } = Layout;
const Footer = () => {
  return (
    <AntFooter className=" text-center">
      Copyright © {new Date().getFullYear()}
      <Link href="https://imranbappy.netlify.app/" className="text-black">
        {` Imran Hossen `}
      </Link>
      , All rights reserved
    </AntFooter>
  );
};

export default Footer;
