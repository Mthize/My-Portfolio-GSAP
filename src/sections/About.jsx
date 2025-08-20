import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TitleHeader from "../components/TitleHeader";
import GradientSphere from "../components/GradientSphere";
import { bentoSocialLinks } from "../constants";
import { Alien } from "../components/models/Alien";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Slide-in animations for cards
    gsap.from(".card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.inout",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    // Staggered animations
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inout",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
  }, []);

  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSphere
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Thapelo Mthize
                  </h1>
                  <p className="md:text-2xl mt-2">
                    I am based in Johannesburg, cybersecurity professional and
                    emerging web developer with a focus on secure design,
                    creative development, and modern digital experiences. I
                    bring diverse knowledge and adaptability from working across
                    different industries and challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#C8D751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <ambientLight />
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            {/* Web Developer Card */}
            <div className="card md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Web Developer & Cybersecurity
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Building clean, secure, and user-focused digital
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            {/* UI/UX Design Card */}
            <div className="card md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    UI/UX Design
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Intuitive web and mobile designs that captivate users.
                  </p>
                </div>
              </div>
            </div>
            {/* Moti Card */}
            <div className="card md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold animated-text">
                    OWN YOURSELF!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold animated-text">
                    BE UNIQUE!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold animated-text">
                    INNOVATE BOLDLY!
                  </h1>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="md:col-span-4 col-span-12 row-span-2"
              >
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.icon} />
                      <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                        {item.name}
                      </h1>
                    </div>
                    <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow-up"
                        className="md:scale-100 scale-50"
                      />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
