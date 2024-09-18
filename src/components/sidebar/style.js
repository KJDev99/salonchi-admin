import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: #f0f2f5; */
  position: relative;
  .content-media {
    @media (max-width: 540px) {
      margin: 24px 20px !important;
    }
  }
  .sidebar {
    position: fixed !important;
    top: 0;
    left: 0;
    bottom: 0;
    @media (max-width: 991px) {
      padding-top: 40px;
      top: -24px;
      left: -20px;
      z-index: 999;
      border-radius: 0;
    }
  }
  .ant-menu-title-content {
    font-family: "Readex Pro", sans-serif;
  }
  .ant-layout {
    min-height: 90vh;
  }
  #components-layout-demo-custom-trigger .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  .site-layout {
    @media (min-width: 991px) {
      margin-left: 320px !important;
    }
  }
  .logo {
    /* height: 50px; */
    width: 150px;
    margin: 16px auto;
  }
  .icon-logo {
    width: 129px;
    /* height: 45px; */
  }
  .ant-menu-item {
    height: 60px;
  }
  .ant-menu.ant-menu-root.ant-menu-inline.ant-menu-light li {
    border-radius: 20px !important;
  }

  .ant-layout-sider {
    background-color: #fff;
  }
  .ant-menu.ant-menu-light {
    background-color: #fff;
  }
  .ant-menu .ant-menu-item-selected {
    border: 1px solid rgb(100, 23, 176);
    border-radius: 20px;
    background: rgb(247, 243, 255) !important;
    color: #6417b0;
  }
  .ant-menu-light .ant-menu-submenu-selected > .ant-menu-submenu-title {
    /* color: var(--green); */
    color: #6417b0;

    /* background-color: var(--fc-event-bg-color) !important; */
  }
  .ant-menu-title-content {
  }
`;
