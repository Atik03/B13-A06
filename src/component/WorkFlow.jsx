function WorkFlow() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-600 to-pink-400 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-purple-100 mt-4 text-sm md:text-base">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Products
          </button>

          <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-purple-700 transition">
            View Pricing
          </button>
        </div>

        <p className="text-purple-200 text-xs mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default WorkFlow;
