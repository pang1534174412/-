import React, { Component } from "react";
import http from "./require/index.js";
import "./App.css";
import { Layout, Menu, Breadcrumb, Spin } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      silder: [],
      collapsed: false,
      s_c: [],
      isLoading: true,
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentWillMount() {
    http({
      url: "/menu/queryNodes",
      method: "get",
    }).then((res) => {
      console.log(res);
      this.setState({
        silder: res.data,
        isLoading: false,
        s_c: res.data.children,
      });
    });
  }
  render() {
    // console.log(1)
    // console.log(this.state.silder)
    return (
      <Layout className="zong">
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          ></Menu>
        </Header>
        <Layout className="flooder">
          <Sider width={200} className="site-layout-background">
            {this.state.isLoading ? (
              <h1>1</h1>
            ) : (
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                {this.state.silder.map(function (item) {
                  return (
                    <SubMenu
                      key={item.id}
                      icon={<UserOutlined />}
                      title={item.label}
                    >
                      {(item.children || []).map(function (ite) {
                        return <Menu.Item key={ite.id}>{ite.label}</Menu.Item>;
                      })}
                    </SubMenu>
                  );
                })}
              </Menu>
            )}
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
