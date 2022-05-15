import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  EditOutlined,
  LogoutOutlined,
  UserAddOutlined,
  GoldOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

interface SiderDemoProps {
  children: JSX.Element;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const itemsSideBar: MenuItem[] = [
  getItem("Relatório", "1", <PieChartOutlined />),
  getItem("Caixa", "2", <DesktopOutlined />),
  getItem("Usuário", "sub1", <UserOutlined />, [
    getItem("Editar", "3", <EditOutlined />),
    getItem("Cadastrar", "4", <UserAddOutlined />),
  ]),
  getItem("Equipe", "sub2", <TeamOutlined />, [
    getItem("Editar", "5", <EditOutlined />),
    getItem("Cadastrar", "6", <UserAddOutlined />),
  ]),
  getItem("Serviço", "sub3", <ShoppingOutlined />, [
    getItem("Editar", "7", <EditOutlined />),
    getItem("Cadastrar", "8", <UserAddOutlined />),
  ]),
  getItem("Produto", "sub4", <GoldOutlined />, [
    getItem("Editar", "9", <EditOutlined />),
    getItem("Cadastrar", "10", <UserAddOutlined />),
  ]),
];

const itemsHeader: MenuItem[] = [
  getItem("Jakson", "sub1", <UserOutlined />, [
    getItem("Editar Perfil", "1", <EditOutlined />),
    getItem("Sair", "2", <LogoutOutlined />),
  ]),
];

function SiderDemo({ children }: SiderDemoProps) {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed: boolean) => setCollapsed(collapsed);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={itemsSideBar}
        />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff" }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ justifyContent: "flex-end" }}
            items={itemsHeader}
          ></Menu>
        </Header>
        <Content style={{ margin: "4px 16px" }}>
          <div style={{ padding: 24, background: "#fff" }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          JWSystem ©2022 Criado por JWS
        </Footer>
      </Layout>
    </Layout>
  );
}

export default SiderDemo;
