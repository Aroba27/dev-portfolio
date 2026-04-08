export const About = () => {
  return (
    <section className="bg-[#f6f3fc] py-16" id="about-section">
      <div className="container mx-auto w-[95%] lg:w-4/5 px-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8750f7] to-[#2a1454] text-center mb-10">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#2a1454] text-base lg:text-lg leading-relaxed">
              Hi! I’m Aroba Akram, a front-end developer who loves turning ideas into clean,
              <span className="font-semibold text-[#8750f7]">
                {" "}
                interactive, and visually appealing websites.{" "}
              </span>
              
              I have a keen eye for detail and enjoy crafting pixel-perfect
              interfaces that are beautiful, smooth and user-friendly.{" "}
               My toolkit includes
              <span className="font-semibold text-[#8750f7]">
                {" "}
                HTML, CSS, Tailwind, JS, React and MUI.{" "}
              </span>
            </p>
           
            <p className="text-[#2a1454] text-base lg:text-lg leading-relaxed mt-4">
              Outside of coding, I enjoy
              <span className="font-semibold text-[#8750f7]">
                {" "}
                reading non-fiction books{" "}
              </span>
              that help me grow and see things from new perspectives, and I like
              creating
              <span className="font-semibold text-[#8750f7]"> doodles </span>
              when I want to unwind.
            </p>
            <p className="text-[#2a1454] text-base lg:text-lg leading-relaxed mt-4">
              I’m always open to working on interesting projects, collaborating
              with creative people, or just having a good conversation, so feel
              free to reach out!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative bg-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all ">
              <img
                src="/profile-pic.jpg"
                alt="Aroba Minhas Avatar"
                className="w-96 aspect-square rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
