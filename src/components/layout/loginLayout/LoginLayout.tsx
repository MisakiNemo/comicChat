import {ReactNode} from "react";
import background from "@/assets/images/loginBackGround.jpg";
import "./LoginLayout.scss";
interface LoginLayoutProps {
    children: ReactNode;
}

const LoginLayout = (props: LoginLayoutProps) => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className="w-screen h-screen bg-no-repeat bg-cover flex  justify-center items-center overflow-hidden">
                <div className="h-80  w-180  bg-pink-200 bg-opacity-40 rounded-md overflow-hidden">
                {props.children}
                </div>
        </div>);
}

export default LoginLayout;