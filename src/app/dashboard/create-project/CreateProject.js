"use client";

import Title from "antd/es/typography/Title";
import React from "react";
import { Form, Input, Space } from "antd";
import SubmitButton from "./CreateProjectSubmitButton";

const CreateProject = () => {
  const [form] = Form.useForm();
  return (
    <div className="lg:px-5 lg:py-3">
      <Title level={3}>Create Project</Title>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="on"
        className="  max-w-[600px]"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="details"
          label="Details"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Space
            direction="horizontal"
            className="justify-end"
            size="middle"
            style={{ width: "100%" }}
          >
            <SubmitButton form={form}>Submit</SubmitButton>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProject;
