import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { useStore } from "@/utils/store";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const { collapsed, setCollapsed } = useStore((state) => state);
  return (
    <Fragment>
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
        <Outlet />
      </Sidebar>
    </Fragment>
  );
};
