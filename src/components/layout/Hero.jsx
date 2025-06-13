import React from "react";
import Image from "next/image";
import { Right } from "../icons";

function Hero() {
  return (
    <>
      <section className="hero mt-8">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everthing <br />
            is better <br />
            with a&nbsp;
            <span className="text-primary">Briyani</span>
          </h1>
          <p className="my-6 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            obcaecati consectetur amet illum.
          </p>
          <div className="flex gap-4 text-sm">
            <button
              type="button"
              className="flex bg-primary gap-2 text-white uppercase px-4 py-2 rounded-full items-center"
            >
              Order now
              <Right />
            </button>
            <button
              type="button"
              className="flex gap-2 py-2 text-gray-600 font-semibold"
            >
              Learn more
              <Right />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/pizza.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt="pizza"
          ></Image>
        </div>
      </section>
    </>
  );
}

export default Hero;
