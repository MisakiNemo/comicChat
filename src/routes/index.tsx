import {Routes, Route} from "react-router-dom";
import HomePage from '../pages/HomePage.tsx';
import AboutPage from '../pages/AboutPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import RegisterPage from "../pages/RegisterPage.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
    );
}