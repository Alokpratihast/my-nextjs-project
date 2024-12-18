import Link from "next/link";
import React from "react";
import { Spotlight } from "./Ui/Spotlight";
import { Button } from "./Ui/moving-border";

const Herosection = () => {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md 
    flex flec-col items-center
     justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center text-white  ">
        <h1 className="text-5xl">Master the are of music</h1>
        <p className="mt-10 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Quam consequuntur, tenetur alias expedita
          <br /> nulla commodi ullam illo maiores molestias tempora magnam,
          ratione ea id quisquam odio, fugit tempore? Minima, facilis.
        </p>
        <div className="mt-8">
          <Link href={"./courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
