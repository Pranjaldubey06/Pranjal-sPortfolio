// import React from 'react'

function Footer() {
  return (
    <section className="w-full h-auto py-6 flex flex-wrap items-center justify-between bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] px-6 md:px-10">
      <a href="#home" className="text-4xl font-bold italic flex space-x-1">
        {["P", "o", "r", "t", "f", "o", "l", "i", "o"].map((letter, index) => (
          <span key={index} className="text-white bg-clip-text">
            {letter}
          </span>
        ))}
      </a>

      <p className="text-sm text-white mt-4 md:mt-0">
        2025 MY Website. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
