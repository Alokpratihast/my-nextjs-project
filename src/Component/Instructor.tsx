"use client";

import Mentors from "./Mentors";
import { WavyBackground } from "./Ui/wavy-background";
// import { AnimatedTooltip } from "./Ui/animated-tooltip";


const Instructor = () => {
  return (
   
   
   <div className=" relative h[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Hero waves are cool
    </p>
    <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Leverage the power of canvas to create a beautiful hero section
    </p>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
                <Mentors/>
            </div>
      </WavyBackground>

        
  </div>
  )
}

export default Instructor