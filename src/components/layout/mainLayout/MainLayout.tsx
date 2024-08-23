import {Layout} from "antd";
import "@/components/layout/mainLayout/MaiLayout.scss"
import SideBar from "@/components/SideBar.tsx";

interface Props {
    children?: React.ReactNode;
}

const MainLayout = ( props: Props ) => {
    return (
        <Layout>
            <Layout.Sider>
                <SideBar />
            </Layout.Sider>
            <div className="main-content">
                {props.children}
            </div>
</Layout>
)

}



export default MainLayout;