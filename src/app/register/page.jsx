"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setCreatedUser] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setCreatedUser(true);
    } else {
      setCreatedUser(false);
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl ">Register</h1>
        {userCreated && (
          <div className="my-4 text-center">
            User has been created, Now you can{" "}
            <Link className="underline" href={"/login"}>
              login!
            </Link>
          </div>
        )}
        {error && (
          <div className="my-4 text-center">
            Error occurs, kindly try again!
          </div>
        )}
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
            disabled={creatingUser}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={creatingUser}
          />
          <button type="submit" disabled={creatingUser}>
            Register
          </button>
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
