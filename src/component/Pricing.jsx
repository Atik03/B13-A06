import React from "react";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "$0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
      highlight: false,
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "$29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "$99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      button: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="bg-white py-[120px] w-full">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 justify-items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 mb-10 text-left transition w-full max-w-[380px] h-[460px] ${
                plan.highlight
                  ? "bg-gradient-to-b from-purple-600 to-purple-700 text-white shadow-lg scale-105"
                  : "bg-gray-100 shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>

              <p
                className={`text-sm mt-1 ${
                  plan.highlight ? "text-purple-100" : "text-gray-500"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span
                  className={`ml-1 text-sm ${
                    plan.highlight ? "text-purple-200" : "text-gray-500"
                  }`}
                >
                  /Month
                </span>
              </div>

              <ul className="mt-6 space-y-2 h-[170px]">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <i
                      className={`fa-solid fa-circle-check ${
                        plan.highlight ? "text-white" : "text-green-600"
                      }`}
                    ></i>

                    <span
                      className={
                        plan.highlight ? "text-white" : "text-gray-600"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-full font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-purple-700 hover:bg-gray-100"
                    : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:opacity-90"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
