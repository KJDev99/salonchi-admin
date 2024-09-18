import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Modal } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useMenu } from "./useMenu";
import { Wrapper } from "./style";
import { clearStorage } from "@/utils/clearStorage";
import { Navbar } from "../navbar";
import { ReactComponent as IconWarning } from "@/assets/warning.svg";
import { useScreen } from "@/hooks/useScreen";

const { confirm } = Modal;
const { Header, Content, Sider } = Layout;

export const Sidebar = ({ children, collapsed, setCollapsed }) => {
  const [selectedLink, setSelectedLink] = useState(
    window.location.pathname.replace("/", "")
  );
  const { items } = useMenu();
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const windowSizeX = useScreen();
  console.log(windowSizeX, "asd,pasmd");
  return (
    <Wrapper>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            boxShadow: !collapsed ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none",
            transform: `translate(${!collapsed ? "0" : "-230%"})`,
          }}
          width={320}
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sidebar"
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[pathname?.replace("/", "") ?? selectedLink]}
            items={items}
            onClick={({ key }) => {
              if (!(windowSizeX > 991)) {
                console.log(collapsed, "if");
                setCollapsed(!collapsed);
              }
              if (key === "logout") {
                confirm({
                  title: "Tizimdan chiqasizmi?",
                  icon: <IconWarning />,
                  onOk() {
                    clearStorage();
                    navigation(`/`);
                  },
                  okText: "Ha",
                  cancelText: "Yo'q",
                  onCancel() {
                    console.log("Cancel");
                  },
                  okButtonProps: {
                    className: "ok-button-confirm",
                  },
                  cancelButtonProps: {
                    className: "cancel-button-confirm",
                  },
                });
              } else {
                navigation(`/${key}`);
                setSelectedLink(key);
              }
            }}
          />
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: !collapsed ? 0 : 0,
          }}
        >
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              paddingLeft: 16,
              paddingRight: 16,
              // display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "none",
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <Navbar setCollapsed={setCollapsed} collapsed={collapsed} />
          </Header>
          <Content
            className="site-layout-background content-media"
            style={{
              margin: "24px 20px 24px 40px",
              padding: 20,
              minHeight: "85vh !important",
              background: "#fff",
              borderRadius: 20,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
  collapsed: PropTypes.boolean,
  setCollapsed: PropTypes.any,
};
