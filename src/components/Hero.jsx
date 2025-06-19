import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ProfileMain from "../assets/ProfileMain.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-16">
      
      {/* Decorative Gradient Rotated Div (Centered Behind Content) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 rounded-3xl opacity-30 blur-sm"></div>
      </div>

      <main
        id="home"
        className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-7xl"
      >
        {/* Text Section */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Small Circular Blur */}
          <div className="absolute z-0 w-24 h-24 sm:w-36 sm:h-36 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-8 left-4 sm:left-10"></div>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Pranjal Dubey
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl text-[#c744ec] font-semibold mb-4"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 mb-6"
          >
            A front-end developer is an artist with code, crafting visually
            stunning and user-friendly experiences to bring digital designs to
            life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center md:justify-start gap-4 mb-6"
          >
            <a href="#"><FaLinkedin size={28} className="text-white hover:text-[#0077B5] transition" /></a>
            <a href="#"><FaGithub size={28} className="text-white hover:text-gray-400 transition" /></a>
            <a href="#"><FaFacebook size={28} className="text-white hover:text-[#1877F2] transition" /></a>
            <a href="#"><FaInstagram size={28} className="text-white hover:text-[#E1306C] transition" /></a>
          </motion.div>

          <motion.a
            href="https://drive.google.com/file/d/1TIMdJH1jZQAaV_stsNcg45n8mP7Q4h_J/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <button className="bg-purple-800 hover:bg-purple-700 transition text-white px-6 py-2 rounded-full text-base sm:text-lg font-medium">
              Download CV
            </button>
          </motion.a>
        </motion.section>

        
        <figure className="flex-1 flex justify-center md:justify-end">
          <img
            src={ProfileMain}
            alt="Profile"
            className="h-[260px] sm:h-[320px] md:h-[420px] lg:h-[485px] w-auto rounded-full border border-white shadow-xl"
          />
        </figure>
      </main>
    </div>
  );
}

export default Hero;
