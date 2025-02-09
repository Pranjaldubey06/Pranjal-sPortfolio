import { useEffect } from "react";
// import './App.css'
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
// import About from './components/About'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="bg-gray-950">
      <Hero />
      <About />
      <Navbar />
    
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
