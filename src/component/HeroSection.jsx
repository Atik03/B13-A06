import React from "react";
import heroImage from "../assets/banner.png";
import playbutton from "../assets/Play.png";

const HeroSection = () => {
  return (
    <section className=" bg-white h-auto flex items-center justify-center px-6 py-12 w-full">
      <div className=" w-11/12 mx-auto md:h-[720px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
        <div className="space-y-6 flex flex-col justify-center h-full">
          <div className="w-fit inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-100">
            <i className="fa-solid fa-location-crosshairs"></i>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Supercharge Your <br />
            <span className="text-slate-800">Digital Workflow</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-slate-400 font-sm">Explore Products</p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-purple-200">
              Explore Products
            </button>

            <button className="group flex items-center gap-2 border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-3.5 rounded-full font-semibold hover:bg-purple-50 transition-all">
              <img src={playbutton} alt="Play" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-full max-h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
            <img
              src={heroImage}
              alt="Digital Workflow"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -z-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -top-10 -right-10"></div>
          <div className="absolute -z-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -bottom-10 -left-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
