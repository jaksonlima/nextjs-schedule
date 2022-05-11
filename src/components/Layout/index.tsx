import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface SiderDemoProps {
  children: any;
}

function SiderDemo({ children }: SiderDemoProps) {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed: boolean) => setCollapsed(collapsed);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{
            position: "sticky",
            top: "0",
          }}
        >
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            Caixa
          </Menu.Item>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Usuários">
            <Menu.Item key="2" icon={<EditOutlined />}>
              Editar
            </Menu.Item>
            <Menu.Item key="3" icon={<UserAddOutlined />}>
              Cadastrar
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff" }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["4"]}
            style={{ justifyContent: "flex-end" }}
          >
            <SubMenu key="sub3" icon={<UserOutlined />} title="Jakson">
              <Menu.Item key="4" icon={<EditOutlined />}>
                Editar Perfil
              </Menu.Item>
              <Menu.Item key="5" icon={<LogoutOutlined />}>
                Sair
              </Menu.Item>
            </SubMenu>
          </Menu>
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
