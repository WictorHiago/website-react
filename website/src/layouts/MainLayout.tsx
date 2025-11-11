import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="p-6">
                <Outlet /> {/* Aqui o React Router renderiza as páginas (Home, Sobre etc.) */}
            </main>
        </div>
    );
}
