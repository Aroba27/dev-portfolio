import skillsData from "../Components/UI/SkillsData.json"


export const Skills = () => {
    return (
        <section className="bg-[#f6f3fc] py-16">
            <div className="w-[90%] lg:w-4/5 mx-auto">
                <div className="w-4/5 mx-auto">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8750f7] to-[#2a1454] text-center mb-6 leading-tight">
                        My Skills
                    </h2>

                    <p className="text-[#2a1454] text-lg leading-relaxed text-center mb-12">
I continuously upgrade my skills with the latest frameworks, tools, and techniques to deliver innovative, high-quality solutions.                    </p>
                </div>

                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-6">
                    {skillsData.map((skill, index) => (
                        <li
                            key={skill.id}
                            className={`flex flex-col items-center text-center group ${index >= 4
                                    ? "w-1/2 sm:w-4/5 md:w-1/2 lg:w-1/4 xl:w-1/6"
                                    : "w-1/2 sm:w-4/5 md:w-1/2 lg:w-1/5"
                                }`}
                        >


                            <div className="w-full h-40 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#2a1454] group-hover:to-[#8750f7]">
                                <img
                                    src={skill.image}
                                    alt={skill.skill}
                                    className="w-16 h-16 grayscale transition-all duration-300 group-hover:grayscale-0"
                                />
                                <p className="mt-2 text-base lg:text-lg font-bold text-[#747779] group-hover:text-white">
                                    {skill.percentage}
                                </p>
                            </div>
                           
                            <h3 className="mt-3 text-lg font-semibold text-[#8750f7] group-hover:text-[#2a1454]">
                                {skill.skill}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
