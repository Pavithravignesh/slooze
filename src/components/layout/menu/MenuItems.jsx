"use client";

import React from "react";
import Image from "next/image";

function MenuItems() {
  return (
    <>
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/25 transition-all">
        <div className="text-center">
          <img
            src="/pizza.png"
            className="max-h-auto max-w-24 block mx-auto"
            alt="pizza"
          />
        </div>
        <h4 className="font-medium text-xl my-3">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button
          type="button"
          className="mt-4 bg-primary text-white text-sm rounded-full px-8 py-2"
        >
          Add to cart $12
        </button>
      </div>
    </>
  );
}

export default MenuItems;
