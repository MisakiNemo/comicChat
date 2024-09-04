import { Routes, Route, Navigate } from "react-router-dom";
import LoginLayout from "@/components/layout/loginLayout/LoginLayout.tsx";
import ChatPage from "@/pages/ChatPage.tsx";
import AboutPage from "@/pages/AboutPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import RegisterPage from "@/pages/RegisterPage.tsx";
import CommunityPage from "@/pages/CommunityPage.tsx";
import MainLayout from "@/components/layout/mainLayout/MainLayout.tsx";
import VideoPage from "@/pages/VideoPage.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Route>
      <Route index element={<Navigate to="/chat" />} />
    </Routes>
  );
}
