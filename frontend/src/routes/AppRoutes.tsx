import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TodoPage from "../pages/TodoPage";
import AboutPage from "../pages/AboutPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}