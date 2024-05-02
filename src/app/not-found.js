import React from "react";
import { Button, Flex, Result } from "antd";
import Link from "next/link";

const App = () => (
  <Flex justify="center" align="center" className="min-h-screen w-full">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link href={"/"} className="text-inherit">
            Back Home
          </Link>
        </Button>
      }
    />
  </Flex>
);

export default App;
