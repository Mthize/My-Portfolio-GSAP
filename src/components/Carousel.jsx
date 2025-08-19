import { slides } from "../constants";
import { div } from "three/tsl";

const Carousel = () => {
  return ( 
    <div className="relative">
      <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh]">
        <div className="absolute w-full -left-[43vw] top-0">
          <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[60vh]
            items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div key={index} className="sliede-item w-[60vw] h-full
                flex-none relative overflow-hidden">
                <img src={slide.img} alt="slide" 
                  className="w-full h-full object-cover object-center"/>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Carousel;

