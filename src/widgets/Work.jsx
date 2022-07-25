import React from "react";
import SectionHeader from "./SectionHeader";
import workSVG from "../assets/work.svg";
import "tailwindcss/tailwind.css";

function Work() {
  return (
    <div>
      <SectionHeader
        title="工作流程"
        subTitle="How to work.How to work.How to work.How to work.How to work."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-16">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div key={item} className="grid justify-items-center gap-y-2">
                  <img src={workSVG} alt="" />
                  <p className="text -2xl font-bold">初步沟通</p>
                  <p>How to work.How to work.How to work.How to work.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
