import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import SideBar from "./components/SideBar";







const App = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <Loader />       
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
