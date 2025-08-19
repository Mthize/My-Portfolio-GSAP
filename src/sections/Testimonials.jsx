import GradientSphere from "../components/GradientSphere";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import TestimonialCard from "../components/TestimonialCard";


const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center relative md:p-0 px-5">
      <GradientSphere
        sphere1Class={"testimonial-gradient-sphere testimonial-sphere-1"}
        sphere2Class={"testimonial-gradient-sphere testimonial-sphere-2"}
      />

      <div className="w-full h-full container relative z-10 md:my-40 my-20">
        <TitleHeader
          title="Testimonials"
          number="04"
          text="Hear it straight from my clients!"
        />
        <div classNmae="mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
