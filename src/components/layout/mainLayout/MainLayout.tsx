import {Layout} from "antd";
import "@/components/layout/mainLayout/MaiLayout.module.scss"
import SideBar from "@/components/SideBar.tsx";
import {Outlet} from "react-router-dom";


const MainLayout = ( ) => {
    return (
        <Layout className={"h-screen w-screen"}>
            <Layout.Sider width={50} >
                <SideBar />
            </Layout.Sider>
            <Layout.Content >
                <div className={"h-full"}>
                    <Outlet />
                </div>
            </Layout.Content>
        </Layout>
    )

}


export default MainLayout;