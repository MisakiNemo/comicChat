import background from "@/assets/images/loginBackGround.jpg";
import  "./LoginLayout.scss";
import {Outlet} from "react-router-dom";

const LoginLayout = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className="w-screen h-screen bg-no-repeat bg-cover flex  justify-center items-center overflow-hidden">
                <div className="h-80  w-180  bg-pink-200 bg-opacity-40 rounded-xl overflow-hidden">
                    <Outlet  />
                </div>
        </div>);
}

export default LoginLayout;