import GradientSphere from "../components/GradientSphere";
import TitleHeader from "../components/TitleHeader";
import Carousel from "../components/Carousel";

const Project = () => {
  return (
    <section className="w-full h-full flex-center relative" id="projects">
      <GradientSphere
        sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />

      <div className="w-full md:my-40 my-20 relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title="MY PROJECTS"
            number="03"
            text="Check out my recent projects blow for your Goal"
          />
        </div>
        <div className="md:mt-20 mt-10">
           <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Project;
