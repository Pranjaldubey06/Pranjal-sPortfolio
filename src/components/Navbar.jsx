import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My Projects", link: "#projects" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-white"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* <a href="#home" className="text-4xl font-bold italic text-gradient-to-r from-purple-400 via-pink-500 to-red-500">
         Pranjal Portfolio
        </a> */}
        <a href="#home" className="text-4xl font-bold italic flex space-x-1">
          {["P", "o", "r", "t", "f", "o", "l", "i", "o"].map(
            (letter, index) => (
              <span
                key={index}
                className=" bg-gradient-to-r text-white bg-clip-text"
              >
                {letter}
              </span>
            )
          )}
        </a>

        <button
          className="md:hidden focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>
        <nav className="hidden md:flex items-center space-x-8 text-white  ">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg ">
            Contact
          </button>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-lg text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        {/* contact button */}
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
          Contact
        </button>
      </div>
    </header>
  );
}

export default Navbar;
