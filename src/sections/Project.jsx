import GradientSphere from "../components/GradientSphere"

const Project = () => {
  return (
    <section className="w-full h-full flex-center relative" id="project">
      <GradientSphere
        sphere1Class={"project-gradient-sphere project-gradient-sphere-1"}
        sphere2Class={"project-gradient-sphere project-gradient-sphere-2"}
      />
    </section>
  )
}

export default Project
