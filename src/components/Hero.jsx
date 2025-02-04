import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { Roll } from "react-reveal";
// import   fromimport { GrGithub } from "react-icons/gr";

import Robot from "../assets/Robot.webp";
// import About from "../components/About";

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 flex justify-center items-center">
        
          {" "}
          <div className="h-[400px] w-[400px]  bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 rounded-3xl"></div>
        
      </div>

      {/* Hero Content */}
      <main
        id="home"
        className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0"
      >
        <section
          className="flex-1 text-center md:text-left mt-10 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <header>
          <h1 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Pranjal Dubey
            </h1>
            <h2 className="text-4xl sm:text-4xl md:text-3xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
              Frontend Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, aspernatur.
          </p>
          
          <div className="flex items-center space-x-4 mb-6">
            <a href="#">
              <FaLinkedin className="text-white" size={32} />
            </a>
            <a href="#">
              <FaGithub className="text-white" size={32} />
            </a>
            <a href="#">
              <FaFacebook className="text-white" size={32} />
            </a>
            <a href="#">
              <FaInstagram className="text-white" size={32} />
            </a>
          </div>
          <a download>
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none bg-purple-800 rounded-full text-lg cursor-pointer">
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-end md:justify-end mt-10"
        >
          <img
            src={Robot}
            className=" h-[400px] sm:h-[485px] w-[250px] sm:w-[480px] animate-[bounce_5s_infinite]"
          />
          

        </figure>
      </main>
      

    </div>
   
  );
}

export default Hero;
