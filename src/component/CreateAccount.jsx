import userImg from "../assets/user.png";
import pakageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

function CreateAccount() {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
      image: userImg,
    },
    {
      id: "02",
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
      image: pakageImg,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      image: rocketImg,
    },
  ];

  return (
    <div className="bg-gray-100 py-[120px]">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition w-[380px] h-[380px] flex flex-col items-center justify-center text-center mx-auto"
            >
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full">
                {step.id}
              </div>

              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <img src={step.image} alt={step.title} className="w-8 h-8" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2 px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
