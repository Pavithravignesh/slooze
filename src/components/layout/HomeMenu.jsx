import React from "react";
import Image from "next/image";

function HomeMenu() {
  return (
    <>
      <section className="">
        <div className="absolute h-full left-0 right-0 w-full justify-start ">
          <div className="h-48 w-48 absolute left-0 -top-[70px] text-left -z-10">
            <Image
              src={"/sallad1.png"}
              width={109}
              height={189}
              alt={"sallad"}
            />
          </div>
          <div className="h-48 absolute -top-[100px] right-0 -z-10">
            <Image
              src={"/sallad2.png"}
              width={107}
              height={195}
              alt={"sallad"}
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="uppercase text-gray-600 font-semibold ">Check out</h3>
          <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
        </div>
      </section>
    </>
  );
}

export default HomeMenu;
