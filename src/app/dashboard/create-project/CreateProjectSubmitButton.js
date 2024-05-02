import React, { useEffect } from "react";
import { Button, Form, message } from "antd";

const CreateProjectSubmitButton = ({ form, children }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const handleSubmit = () => {
    console.log(values);
    success();

    //   handle API
  };

  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => {
        setSubmittable(true);
      })
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <>
      <Button
        onClick={handleSubmit}
        type="primary"
        htmlType="submit"
        disabled={!submittable}
        className=" w-48"
      >
        {children}
      </Button>
      {contextHolder}
    </>
  );
};

export default CreateProjectSubmitButton;
