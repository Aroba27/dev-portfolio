import data from "../Components/UI/data.json"; 
import PropTypes from "prop-types";

const Section = ({ title, items }) => (
  <div>
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8750f7] to-[#2a1454] mb-8 text-center md:text-left leading-tight">
      {title}
    </h2>
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative bg-[#fff] p-6 rounded-lg shadow-md transition-all duration-300 group hover:bg-[#2a1454]"
        >
          <div className="text-[#8750f7] text-base font-semibold mb-2 group-hover:text-[#f6f3fc]">
            {item.time}
          </div>
          <h3 className="text-[#2a1454] font-semibold text-lg  group-hover:text-[#f6f3fc]">
            {item.title}
          </h3>
          <h4 className="text-[#8750f7]  text-lg mb-1 group-hover:text-[#f6f3fc]">
            {item.role}
          </h4>
          <div className="text-[#140c1c] text-sm group-hover:text-[#f6f3fc]">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Resume = () => {
  return (
    <section className="bg-[#f6f3fc] py-16" id="resume-section">
      <div className="container mx-auto w-[90%] lg:w-4/5 px-4">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8750f7] to-[#2a1454] text-center mb-6 leading-tight">
    My Resume
  </h2>

 
  <p className="text-[#2a1454] text-base md:text-lg leading-relaxed text-center mb-12 w-4/5 mx-auto">
I create visually engaging and high-performing websites that deliver real results. Discover my skills, experience, and projects that reflect my passion for front-end development.  </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Section title="My Experience" items={data.experience} />
          <Section title="My Education" items={data.education} />
        </div>
      </div>
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      title: PropTypes.string,
      role: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};