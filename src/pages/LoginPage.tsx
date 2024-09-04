import { Link } from "react-router-dom";
import { loginService } from "@/api/user";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { type Rule } from "antd/es/form";

interface LoginFormData {
  email: string;
  password: string;
}
const LoginPage = () => {
  const [buttonLoading, setButtonLoading] = useState(false);

  const login = async (values: LoginFormData) => {
    if (buttonLoading) return;
    console.log(values);
    try {
      setButtonLoading(true);
      await loginService()
        .then((response) => {
          if (response.code === 0) {
            console.log(response);
            setButtonLoading(false);
            // navigate("/");
          }
        })
        .catch((error) => {
          setButtonLoading(false);
          console.error(error);
        });
    } catch (error) {
      setButtonLoading(false);
      console.error(error);
    }
  };

  const emailRules: Rule[] = [
    { required: true, message: "Please enter your email to log in! (｡•̀ᴗ-)✧" },
    {
      type: "email",
      message: "Oops! This email doesn’t seem right. Please check it. (｡•́︿•̀｡)",
    },
  ];

  const passwordRules: Rule[] = [
    {
      required: true,
      message: "Please enter your password to log in. We need it! (｡•̀ᴗ-)✧",
    },
    {
      min: 6,
      max: 20,
      message: "Password should be 6-20 characters. Thanks for that! (＾▽＾)",
    },
  ];

  const onFinishFailed = () => {
    console.log("Failed");
  };

  return (
    <div className="flex justify-center items-start text-white w-full h-full rounded-md">
      <h1 className="leftBox"></h1>
      <Form
        name="login"
        onFinish={login}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item className="text-center">
          <span className="Title">Login</span>
        </Form.Item>
        <Form.Item name="email" rules={emailRules}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={passwordRules}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item className="text-white mb-2">
          <p className="changeText">
            Have no account yet?{" "}
            <Link to="/register" className={"underline hover:text-pink-300 "}>
              Register
            </Link>
          </p>
        </Form.Item>
        <Form.Item className={"text-center"}>
          <Button
            className={"registerButton"}
            htmlType="submit"
            loading={buttonLoading}
          >
            {buttonLoading ? "" : "Login"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
