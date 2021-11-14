import React, { useState } from "react";

// import { SmileOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import store from "../../store/store";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function CreateAcc() {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [validEmail, setvalidEmail] = useState(true);
  const history = useHistory();

  const onFinish = (user) => {
    store.dispatch({
      type: "logined",
      payload: {
        username: user.Fname,
        password: user.password,
        family: user.Lname,
        email: user.email,
        logined: true,
      },
    });

    setTimeout(() => {
      history.replace("/");
    }, 500);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateEmail = (e) => {
    if (regex.test(String(e.target.value).toLowerCase()) === true) {
      setvalidEmail(false);
    }
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            validator: validEmail,
          },
        ]}
      >
        <Input onChange={validateEmail} />
      </Form.Item>
      <Form.Item
        label="Fname"
        name="Fname"
        rules={[
          {
            required: true,
            message: "Please input your Fname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lname"
        name="Lname"
        rules={[
          {
            required: true,
            message: "Please input your Lname!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
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
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
