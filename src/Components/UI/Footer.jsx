import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-[#2a1454] text-white py-8">
            <div className="container mx-auto text-center">

                <div className="mb-5">
                    <NavLink
                        to="/"
                    >
                        <img src="/logo.png" alt="logo" className="mx-auto h-24" />
                    </NavLink>
                </div>


                <nav>
                    <ul className="flex flex-wrap justify-center space-x-6 text-sm md:text-base font-medium mb-5">
                        <li>
                            <NavLink
                                to="/"
                                className="hover:text-[#8750f7] transition duration-300"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="hover:text-[#8750f7] transition duration-300"
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/resume"
                                className="hover:text-[#8750f7] transition duration-300"
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/skills"
                                className="hover:text-[#8750f7] transition duration-300"
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/work"
                                className="hover:text-[#8750f7] transition duration-300"
                            >
                                Work
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="hover:text-[#8750f7] transition duration-300"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="text-sm">
                    <p>
                        © 2026 All rights reserved | Developed by{" "}
                        <span className="text-[#8750f7] font-semibold">Aroba Akram</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
