import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center pb-5">
        <h3 className="text-4xl font-semibold">
          Hire Me As A
          <br />
          <span className="text-cyan-600">Remote Fontend Developer</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">Why me?</p> */}
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Why remote? Why me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I believe remote work is the future trend, and I am passionate about this work mode and eager to embrace new challenges.
            I am adept at communicating and collaborating with team members effectively, resolving technical challenges efficiently, and delivering high-quality work on time.
            My self-management skills and adaptability enable me to flexibly handle different work scenarios while maintaining high efficiency and quality in my work.
            I look forward to collaborating with your team to create outstanding products.
          </p>
          {/* <button className="btn-primary mt-10">Say Hello</button> */}
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
