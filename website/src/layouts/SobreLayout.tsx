import { Link, Outlet } from "react-router-dom";

export default function SobreLayout() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-4 text-blue-400">Sobre Nós</h1>

            <div className="flex gap-6 mb-8">
                <Link to="historia" className="hover:text-blue-400 transition">História</Link>
                <Link to="missao" className="hover:text-blue-400 transition">Missão</Link>
                <Link to="visao-futuro" className="hover:text-blue-400 transition">Visão Futuro</Link>
            </div>

            {/* Aqui dentro serão renderizadas as seções (sem trocar de tela inteira) */}
            <div className="bg-gray-800 p-6 rounded-xl">
                <Outlet />
            </div>
        </section>
    );
}
