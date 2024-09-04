import { Layout } from "antd";
import "@/components/layout/mainLayout/MaiLayout.module.scss";
import SideBar from "@/components/SideBar.tsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="MainLayout w-screen h-screen flex flex-col justify-between items-center bg-sky-400 ">
      <Layout className={"h-full w-full mainLayout"}>
        <Layout.Sider width={50}>
          <SideBar />
        </Layout.Sider>
        <Layout.Content>
          <div className={"h-full"}>
            <Outlet />
          </div>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
