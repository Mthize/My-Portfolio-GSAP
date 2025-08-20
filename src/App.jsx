import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";



const App = () => {
  return (
    <div>
      <NavBar />
      
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
