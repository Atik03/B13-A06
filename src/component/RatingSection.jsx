import React from "react";

const RatingSection = () => {
  return (
    <section className="w-full bg-[#7C3AED] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center ">
        <div className="flex flex-col items-center justify-center py-6 md:border-r border-white/20">
          <h2 className="text-5xl font-bold text-white mb-2">50K+</h2>
          <p className="text-purple-100 text-lg font-medium">Active Users</p>
        </div>

        <div className="flex flex-col items-center justify-center py-6 md:border-r border-white/20">
          <h2 className="text-5xl font-bold text-white mb-2">200+</h2>
          <p className="text-purple-100 text-lg font-medium">Premium Tools</p>
        </div>

        <div className="flex flex-col items-center justify-center py-6">
          <h2 className="text-5xl font-bold text-white mb-2">4.9</h2>
          <p className="text-purple-100 text-lg font-medium">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
