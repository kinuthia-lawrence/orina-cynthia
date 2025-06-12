import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Testimonials from "./components/Testimonials";
import "./index.css";

function App() {
  return (
    <>
      <div className="w-full bg-black text-gray-200 font-serif">
        <CustomCursor />
        <Hero />
        <Stack />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
        <About />
      </div>
    </>
  );
}

export default App;