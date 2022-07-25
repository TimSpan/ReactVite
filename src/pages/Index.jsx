import React from "react";
import "tailwindcss/tailwind.css";
import Content from "../widgets/Content";
import Header from "../widgets/Header";
import Solution from "../widgets/Solution";
import Work from "../widgets/Work";
import Client from "../widgets/Client";
import Contact from "../widgets/Contact";
import Footer from "../widgets/Footer";

function Index() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="mt-20">
        <Content />
        <section className="md:p-20">
          <Solution />
        </section>
        <section className="mt-20">
          <Work />
        </section>
        <section className="mt-20 md:w-3/5 mx-auto">
          <Client />
        </section>
        <section className=" mt-20">
          <Contact />
        </section>
        <section className=" mt-20">
          <Footer/>
        </section>
      </main>
    </div>
  );
}

export default Index;
