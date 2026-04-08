import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Catch Pokemon",
    description:
      "Developed a Pokémon search website using React to reinforce component-based architecture and state management concepts.",
    link: "https://catch-apokemon.netlify.app/",
    category: "React JS",
    image: "/project-1.png",
  },
  {
    id: 2,
    title: "World Atlas",
    description:
      "Built an interactive World Atlas website showcasing detailed country information with sortable search and continent filters. Developed using React with a focus on reusable components, efficient state management, and responsive design.",
    link: "https://react-world90.netlify.app/",
    category: "React JS",
    image: "/project-2.png",
  },
  {
    id: 3,
    title: "Resturant Website",
    description:
      "Converted a restaurant Figma design into a fully responsive, multi-purpose website template using HTML, CSS, Bootstrap, and JavaScript. Built clean, scalable UI components and responsive sections to ensure a seamless experience across all devices.",
    link: "https://eatngo-resturant.netlify.app",
    category: "CSS / JS",
    image: "/project-3.png",
  },
  {
    id: 4,
    title: "Gym Website",
    description:
      "Converted a fitness-focused Figma design into a fully responsive website using HTML, CSS, and Bootstrap. Incorporated smooth microinteractions, hover states, and transitions to elevate user experience and create a more interactive, modern interface.",
    link: "https://fitfusion-gymwebsite.netlify.app/",
    category: "CSS / JS",
    image: "/project-4.png",
  },
  {
    id: 5,
    title: "Wayback Downloaders",
    description:
      "Converted a multi-page Figma design into a fully responsive, production-ready website. Focused on delivering pixel-perfect UI with clean, well-structured HTML and modern CSS practices.",
    link: "https://wayback-downloader.netlify.app/",
    category: "CSS / JS",
    image: "/project-5.png",
  },
  {
    id: 6,
    title: "SimlessPay",
    description:
      "Built a responsive and intuitive user interface for SimlessPay, a secure digital payment platform, focusing on performance, scalability, and seamless user experience.",
    link: "https://simlesspay.com/",
    category: "React JS",
    image: "/project-07.PNG",
  },
];

export const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      className="portfolio-section bg-[#f6f3fc] py-16"
      id="works-section"
    >
      <div className="container mx-auto w-[90%] lg:w-4/5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8750f7] to-[#2a1454] text-center mb-6 leading-tight">
            My Recent Works
          </h2>

          <p className="text-[#2a1454] text-base md:text-lg leading-relaxed text-center mb-12 w-4/5 mx-auto">
            I craft custom web projects that bring your ideas to life, delight
            your customers, and enhance your brand presence.
          </p>
        </div>

        <div className="text-center mb-8">
          {["All", "React JS", "CSS / JS"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 mx-1 text-sm font-semibold rounded-lg ${
                activeFilter === category
                  ? "bg-linear-to-r from-[#2a1454] to-[#8750f7] text-white"
                  : "bg-white text-[#2a1454] border border-[#2a1454]"
              } transition-all duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-[#140c1c] rounded-lg shadow-lg overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              <div className="p-8 pb-0">
                <div className="relative w-full h-full overflow-hidden bg-white rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-linear-to-r from-[#8750f7] to-[#2a1454] bg-opacity-90 text-white rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#2a1454] hover:bg-[#8750f7] text-white rounded-full p-2 flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="text-base">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};