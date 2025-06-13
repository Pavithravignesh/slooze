"use client";

import Image from "next/image";
import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    fetch("api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl ">Register</h1>
        <form
          action=""
          className="block max-w-xs mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <div className="my-4 text-center text-gray-500 mb-4">
            or Login with Provider
          </div>
          <button className="flex gap-4 justify-center">
            <Image
              src={"/google.png"}
              alt={"google_logo"}
              width={24}
              height={24}
            ></Image>
            Login with Google
          </button>
        </form>
        <div className=""></div>
      </section>
    </>
  );
}

export default Register;