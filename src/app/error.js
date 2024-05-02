"use client";

import { Button, Flex, Result } from "antd";
import Link from "next/link";
const Error = ({ error }) => {
  console.log({ error });
  return (
    <Flex className="min-h-screen w-full" justify="center" align="center">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
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
};
export default Error;
