// import React from 'react'
// import {Robot}  from "../assets/Robot.webp"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div  className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-1 
          from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform 
          rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"></div>
          <img
            src="https://img.freepik.com/premium-photo/hello-screen-cute-robot-with-raised-isolated-purple-background-technological-idea_410516-47759.jpg?w=900"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-72 h-72 sm:w-32 sm:h-32 rounded-3xl shadow-lg "
          />
          <img
            src="https://img.freepik.com/premium-photo/hello-screen-cute-robot-with-raised-isolated-purple-background-technological-idea_410516-47759.jpg?w=900"
            className="relative z-10 w-36 h-44 sm:w-72 sm:h-40 md:h-96 rounded-xl shadow-lg"
          />
          <img
            src="https://img.freepik.com/premium-photo/hello-screen-cute-robot-with-raised-isolated-purple-background-technological-idea_410516-47759.jpg?w=900"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delays="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-50  h-50   sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-60 -top-5 left-5"></div>
          <header>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-16 sm:mt-24">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
           Hello I am Pranjal Passionate web-developer with a kean eye for Front-end development with a background in IT.
          </p>
          <footer>
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none bg-purple-800 rounded-full text-lg cursor-pointer">
              About Us
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}

export default About;
