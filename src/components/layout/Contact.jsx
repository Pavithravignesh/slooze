import React from "react";
import { SectionHeader } from ".";

function Contact() {
  return (
    <>
      <section className="text-center my-8">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+00 000 00 000 00"
          >
            +00 000 00 000 00
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
