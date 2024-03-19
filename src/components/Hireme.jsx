import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="pt-5 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire Me As A
          <br />
          <span className="text-cyan-600">Remote Frontend Developer</span>
        </h3>
      </div>

      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mt-10 mx-auto flex">
        <div className="w-full flex-1">
          <h2 className="text-2xl font-semibold text-center">
            Why remote? Why me?
          </h2>
          <p className="text-justify text-lg  w-full mt-4 text-gray-200 leading-8">
            I believe remote work is the future trend, and I am passionate about this work mode and eager to embrace new challenges.
            I am adept at communicating and collaborating with team members effectively, resolving technical challenges efficiently, and delivering high-quality work on time.
            My self-management skills and adaptability enable me to flexibly handle different work scenarios while maintaining high efficiency and quality in my work.
            I look forward to collaborating with your team to create outstanding products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
