import Slider from "react-slick";
import SkillImg from "../assets/SkillImg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skillData = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s",
    title: "HTML",
    description:
      "HyperText Markup Language (HTML) defines content structure on a web page",
  },
  {
    id: 2,
    image:
      "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png",
    title: "CSS",
    description: "CSS is the language for styling web pages (HTML or XML).",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmAgp21Zn-NRH5o2VoABScTK75_jpUh9cCA&s",
    title: "JavaScript",
    description: "JavaScript (JS) is used to create interactive web pages.",
  },
  {
    id: 4,
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "React.js",
    description:
      "React.js is an open-source JavaScript library for UI development.",
  },
  {
    id: 5,
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    title: "Next.js",
    description: "Next.js by Vercel is the full-stack React framework for the web.",
  },
  {
    id: 6,
    image:
      "https://static-00.iconduck.com/assets.00/typescript-icon-icon-512x512-yh0yu3ta.png",
    title: "Typescript",
    description:
      "TypeScript is a syntactic superset of JavaScript which adds static typing.",
  },
  {
    id: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
    title: "Bootstrap",
    description:
      "Bootstrap is an HTML, CSS and JS library that simplifies development.",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    title: "TailwindCss",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building websites.",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghdWGl00O5hS7sDlc98yJT_gszgNh1wwUlQ&s",
    title: "Java Fullstack",
    description:
      "Java is a high-level, class-based, object-oriented programming language.",
  },
  {
    id: 10,
    image:
      "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
    title: "MySQL",
    description:
      "MySQL is an open source relational database management system (RDBMS).",
  },
  {
    id: 11,
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL database that uses a document-oriented data model.",
  },
];

const SkillBox = ({ image, title, description }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300 h-full flex flex-col justify-between min-h-[300px]">
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // smooth speed
    autoplay: true,
    autoplaySpeed: 0, // no delay
    cssEase: "linear", // makes it scroll like a marquee
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10 pt-24 bg-gray-950 scroll-mt-16"
    >
      {/* Glow effect */}
      <div className="absolute z-0 w-72 h-36 sm:w-86 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      {/* Left floating image */}
      <img
        src={SkillImg}
        alt="Skill"
        className="hidden sm:block absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-28 opacity-70 rounded-full"
      />

      <div className="relative text-center space-y-6 sm:space-y-10 w-full max-w-7xl">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Expertise <br />
            and <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            I have strong knowledge in these below technologies.
          </p>
        </header>

        {/* Auto-moving slider */}
        <Slider {...settings} className="mt-16">
          {skillData.map((skill) => (
            <div key={skill.id} className="px-3 h-full">
              <SkillBox
                image={skill.image}
                title={skill.title}
                description={skill.description}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Right floating image */}
      <img
        src={SkillImg}
        alt="Skill"
        className="hidden sm:block absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-28 opacity-70 rounded-full"
      />
    </section>
  );
}

export default Skills;
