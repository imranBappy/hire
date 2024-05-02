"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useMutation } from "@tanstack/react-query";
import { useCounterStore } from "@/Providers/CounterStoreProvider";
import { useRouter } from "next/navigation";

const mutationFn = async ({ username, password }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username, password, isLoggedIn: true });
    }, 1000);
  });
};

const App = () => {
  const { loginIn } = useCounterStore((state) => state);
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (newTodo) => mutationFn(newTodo),
    onSuccess: (data) => {
      loginIn();
      router.push("/dashboard");
    },
  });
  const onFinish = (values) => {
    mutation.mutate(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          initialValue={"admin"}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          initialValue={"admin"}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            disabled={mutation.isLoading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
