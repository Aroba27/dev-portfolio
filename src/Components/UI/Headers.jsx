import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 
import { useState } from "react";

export const Headers = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="w-4/5 sm:w-9/10 mx-auto flex items-center justify-between py-3 bg-white">
            
            <div className="logo">
                <NavLink to="/">
                    <img src="/logo.png" alt="logo" className="h-14" />
                </NavLink>
            </div>

            <button
                className="text-2xl text-[#2a1454] md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <FaBars />
            </button>

            {/* Nav Links */}
            <nav
                className={`absolute top-16 left-0 w-full bg-white shadow-md md:static md:shadow-none md:flex md:w-auto md:items-center ${isMenuOpen ? "block" : "hidden"
                    }`}
            >
                <ul className="flex flex-col items-center gap-4 py-4 md:flex-row md:gap-6">
                    <li>
                        <NavLink
                            to="/"
                            className="text-[#2a1454] font-medium hover:text-[#8750f7] transition duration-300"
                        onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="text-[#2a1454] hover:text-[#8750f7] transition duration-300 font-medium"
                        onClick={closeMenu}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            className="text-[#2a1454] hover:text-[#8750f7] transition duration-300 font-medium"
                        onClick={closeMenu}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume"
                            className="text-[#2a1454] hover:text-[#8750f7] transition duration-300 font-medium"
                        onClick={closeMenu}
                        >
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/work"
                            className="text-[#2a1454] hover:text-[#8750f7] transition duration-300 font-medium"
                        onClick={closeMenu}
                        >
                            My Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="text-[#2a1454] hover:text-[#8750f7] transition duration-300 font-medium"
                       onClick={closeMenu}
                       >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="hidden md:block">


                <NavLink to="/contact" className="mt-8 py-3 px-8 rounded-full font-bold text-white bg-linear-to-r from-[#8750f7] to-[#2a1454] hover:bg-linear-to-r hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-300" onClick={closeMenu}>
                    Hire Me!
                </NavLink>
            </div>
        </header>
    );
};
