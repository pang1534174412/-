import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import http from "./../require/index.js";
import "./login.css";
import {
  Route,
  Link,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import Home from "./../App.js";
class login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onFinish = (values) => {
    console.log(values);
    if (values.username != "") {
      http({
        url: "/apc/userLogin/authUser",
        method: "get",
        params: {
          userName: values.username,
          passWord: values.password,
        },
      }).then((res) => {
        window.sessionStorage.setItem("token", res.data.accessToken);
        window.sessionStorage.setItem("username", res.data.user.userName);
        window.location.replace("/home");
      });
    }
  };

  render() {
    return (
      <Router>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            extra="请输入账号"
            rules={[{ required: true, message: "请输入正确账号" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入账号"
            />
          </Form.Item>
          <Form.Item
            name="password"
            extra="请输入密码"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Router>
    );
  }
}

export default login;
