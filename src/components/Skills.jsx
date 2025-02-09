import Robot from "../assets/Robot.webp"; // ✅ Fix path if needed

const skillData = [
  {
    id: 1,
    image: "https://cdn-icons-png.freepik.com/256/919/919827.png?semt=ais_hybrid",
    title: "HTML",
    description: "HyperText Markup Language (HTML) defines content structure on a web page",
  },
  {
    id: 2,
    image: "https://w7.pngwing.com/pngs/224/77/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon-thumbnail.png",
    title: "CSS",
    description: "CSS is the language for styling web pages (HTML or XML).",
  },
  {
    id: 3,
    image: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    title: "JavaScript",
    description: "JavaScript (JS) is used to create interactive web pages.",
  },
  {
    id: 4,
    image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "React.js",
    description: "React.js is an open-source JavaScript library for UI development.",
  },
];

const SkillBox = ({ image, title, description }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </article>
);

function Skills() {
  return (
    // <section id="Skills" className="absolute min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10 bg-gray-950">
    //   <div className="absolute z-0 w-72 h-36 sm:w-86 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

    //   <img src={Robot} alt="Robot Icon" className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70" />
      
    //   <div data-aos="fade-up" data-aos-delay="300" className="relative z-20 text-center space-y-6 sm:space-y-10">
    //     <header>
    //       <h1 className="text-3xl sm:text-4xl font-bold">
    //         My Expertise
    //         <br /> and <span className="text-purple-400">Skills</span>
    //       </h1>
    //       <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, harum!
    //       </p>
    //     </header>

    //     <section data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
    //       {skillData.map((skill) => (
    //         <SkillBox key={skill.id} image={skill.image} title={skill.title} description={skill.description} />
    //       ))}
    //     </section>

    //   </div>

    //   <img src={Robot} alt="Robot Icon" className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70" />
    // </section>
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10 bg-gray-950"
    >
      <div className="absolute z-0 w-72 h-36 sm:w-86 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      <img
        src={Robot}
        alt="Robot Icon"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />

      <div data-aos="fade-up" data-aos-delay="300" className="relative z-20 text-center space-y-6 sm:space-y-10">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Expertise
            <br /> and <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, harum!
          </p>
        </header>

        <section data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
          {skillData.map((skill) => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} description={skill.description} />
          ))}
        </section>
      </div>

      <img
        src={Robot}
        alt="Robot Icon"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />
    </section>
  );
}

export default Skills;
