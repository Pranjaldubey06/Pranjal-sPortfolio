 import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Robot from "../assets/Robot.webp";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 rounded-3xl"></div>
      </div>

      <main
        id="home"
        className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 sm:px-12 md:px-24 lg:px-32 xl:px-52 pb-8 md:pb-24 pt-24 md:pt-32"
      >
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="absolute z-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-5 md:left-10"></div>
          <header>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            >
              Pranjal Dubey
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c744ec] mb-2"
            >
              Frontend Developer
            </motion.h2>
          </header>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 px-2 sm:px-0"
          >
           A front-end developer is an artist with code, crafting visually stunning and user-friendly experiences, to bring digital designs to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center md:justify-start space-x-4 mb-6"
          >
            <a href="#"><FaLinkedin className="text-white" size={32} /></a>
            <a href="#"><FaGithub className="text-white" size={32} /></a>
            <a href="#"><FaFacebook className="text-white" size={32} /></a>
            <a href="#"><FaInstagram className="text-white" size={32} /></a>
          </motion.div>

          <motion.a
            href="https://drive.google.com/file/d/16e4PB8Fc0EwK3DiaavU0-HsznCzlJ_kg/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none bg-purple-800 rounded-full text-lg cursor-pointer">
              Download CV
            </button>
          </motion.a>
        </motion.section>

        <figure className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={Robot}
            className="h-[300px] sm:h-[400px] md:h-[485px] w-auto animate-[bounce_5s_infinite]"
            alt="Robot"
          />
        </figure>
      </main>
    </div>
  );
}

export default Hero;
