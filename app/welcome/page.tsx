// pages/welcome.tsx

import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";

const Welcome = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    localStorage.setItem("isWelcomeShown", "true");
    router.push("/setup");
  };

  useEffect(() => {
    const isWelcomeShown = localStorage.getItem("isWelcomeShown");
    if (isWelcomeShown === "true") {
      router.push("/setup");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full px-6 py-10 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our Platform!</h1>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            We're excited to have you here! Our platform is designed to help you manage your projects effectively.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">How It Works</h2>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <Image
                src="/images/dashboard.png" // Replace with your actual image path
                alt="Dashboard screenshot"
                width={500}
                height={300}
                className="rounded-lg shadow"
              />
              <p className="text-lg leading-relaxed">
                Our intuitive dashboard helps you get an overview of all your projects and tasks at a glance.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <Image
                src="/images/tasks.png" // Replace with your actual image path
                alt="Tasks screenshot"
                width={500}
                height={300}
                className="rounded-lg shadow"
              />
              <p className="text-lg leading-relaxed">
                Easily manage your tasks with our powerful task management tools.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <Image
                src="/images/reports.png" // Replace with your actual image path
                alt="Reports screenshot"
                width={500}
                height={300}
                className="rounded-lg shadow"
              />
              <p className="text-lg leading-relaxed">
                Generate detailed reports to track your progress and stay on top of your goals.
              </p>
            </div>
          </div>

          <button
            onClick={handleGetStarted}
            className="mt-8 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
