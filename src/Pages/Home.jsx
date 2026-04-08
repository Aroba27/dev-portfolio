import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen text-center px-4 md:px-8 bg-[#f6f3fc]">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2a1454]">
        I am Aroba Akram
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] mt-4">
        A  Creative Coder{" "}
        </h2>

        <p className="text-[#140C1C] text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
I turn ideas into interactive, user-focused experiences with purpose and clean code.
        </p>

        <div className="flex flex-col mt-4 lg:mt-12 md:flex-row items-center gap-3 md:gap-4">
          <NavLink
            to="/work"
            className="py-3 px-6 rounded-full font-bold text-white bg-linear-to-r from-[#8750f7] to-[#2a1454] hover:bg-linear-to-r hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-300"
          >
            View My Work
          </NavLink>

          <div className="flex gap-3 flex-row mt-4 md:mt-0">
            <a
              href="https://github.com/Aroba27"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-linear-to-r from-[#8750f7] to-[#2a1454] hover:bg-linear-to-r hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/aroba-chemcoder/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-linear-to-r from-[#8750f7] to-[#2a1454] hover:bg-linear-to-r hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-300"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="mailto:aroba.minhas02@gmail.com"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-linear-to-r from-[#8750f7] to-[#2a1454] hover:bg-linear-to-r hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-300"
            >
              <CgMail className="text-xl" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
