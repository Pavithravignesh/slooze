import React from "react";
import { SectionHeader } from ".";

function About() {
  return (
    <>
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            sint quidem id fugit accusamus. Ab quidem accusantium, alias quo
            doloribus, non aliquid dicta ut soluta, enim molestiae? Officia,
            porro provident?
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            sint quidem id fugit accusamus. Ab quidem accusantium, alias quo
            doloribus, non aliquid dicta ut soluta, enim molestiae? Officia,
            porro provident?
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
