"use client";

import NextImage from "next/image";
import React, { useState } from "react";
import { ConfigProvider, Breadcrumb, Button, Layout, Menu, theme } from "antd";
import {
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { themeConfig } from "@/styles/antd.config";
import { ReactElement } from "react";
import type { MenuProps } from "antd";

const { Header, Sider, Content } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

export default function MainLayout({ children }: { children: ReactElement }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <NextImage
              src={`https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg`}
              width={32}
              height={32}
              alt="ant design logo"
              style={{ margin: `0 16px` }}
            />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Ant Design
            </span>
          </div>
          <Menu
            theme={`light`}
            mode="horizontal"
            // selectedKeys={["3"]}
            defaultSelectedKeys={["1"]}
            items={items1}
          />
        </Header>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={200}
            style={{ background: colorBgContainer }}
            collapsedWidth={52}
          >
            <Menu
              mode="inline"
              // defaultSelectedKeys={["9"]}
              // defaultOpenKeys={["sub3"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <Breadcrumb
                items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
                style={{ margin: "16px 0" }}
              />
            </Header>
            <div style={{ padding: "24px" }}>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </Content>
            </div>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
