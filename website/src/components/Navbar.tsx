import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            {/* estilizar com tailwind */}
            <div className="bg-blue-600 p-4 text-white">
                <ul className="flex justify-center gap-4">
                    <li>
                        {/* <a href="" className="text-white font-bold hover:text-blue-400 transition-colors duration-300">Home</a> */}
                        <Link to="/" className="text-white font-bold hover:text-blue-400 transition-colors duration-300">Home</Link>
                    </li>

                    <li>
                        {/* <a href="" className="text-white font-bold hover:text-blue-400 transition-colors duration-300">Sobre</a> */}
                        <Link to="/sobre" className="text-white font-bold hover:text-blue-400 transition-colors duration-300">Sobre</Link>
                    </li>

                    <li>
                        {/* <a href="" className="text-white font-bold hover:text-blue-400 transition-colors duration-300">Contato</a> */}
                        <Link to="/contato" className="text-white font-bold hover:text-blue-400 transition-colors duration-300">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar