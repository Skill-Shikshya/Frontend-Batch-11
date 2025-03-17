import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <p className="text-gray-700">
              Our blog is dedicated to sharing insightful stories, tips, and
              experiences. Learn more about our journey, mission, and the team
              behind the scenes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
