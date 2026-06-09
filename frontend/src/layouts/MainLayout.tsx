import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Nav />

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}