import TechBarChart from "@components/TechBarChart";
import React from "react";
import { FaReact, FaDatabase, FaBolt, FaUsers } from "react-icons/fa";

const Home: React.FC = () => {
  const techData = [
    { language: "TypeScript", percentage: 91.4, color: "#3178c6" },
    { language: "CSS", percentage: 4.8, color: "#264de4" },
    { language: "JavaScript", percentage: 2.9, color: "#f7df1e" },
    { language: "HTML", percentage: 0.9, color: "#e34c26" },
  ];

  const featureCards = [
    {
      icon: <FaUsers size={24} />,
      title: "Fetch & List Users",
      subtitle: "User Management",
      bgColor: "bg-blue-100 dark:bg-blue-700",
      textColor: "text-blue-600",
    },
    {
      icon: <FaBolt size={24} />,
      title: "Debounced Search & Pagination",
      subtitle: "Performance",
      bgColor: "bg-green-100 dark:bg-green-700",
      textColor: "text-green-600",
    },
    {
      icon: <FaReact size={24} />,
      title: "React & TypeScript",
      subtitle: "Frontend",
      bgColor: "bg-yellow-100 dark:bg-yellow-700",
      textColor: "text-yellow-600",
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Redux Toolkit + Public Api",
      subtitle: "APIs",
      bgColor: "bg-purple-100 dark:bg-purple-700",
      textColor: "text-purple-600",
    },
  ];

  const highlights = [
    "Responsive dashboard with dark mode support.",
    "Table with sorting, filtering, debounced search & pagination.",
    "Skeleton loaders for smooth data fetching.",
    "Tech stack showcase with TypeScript, React, Tailwind CSS, Redux Toolkit.",
    "Integration with public user API using Redux Toolkit + RTK Query.",
  ];

  return (
    <div className="p-6 space-y-8">
      {/*  Banner */}
<div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-400 text-white p-8 rounded-xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Welcome to Dashboard !
          </h1>
          <p className="text-blue-100 dark:text-blue-200">
            Dashboard template built using TypeScript, React, Tailwind CSS,
            Redux Toolkit, and public user API.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            View Live Demo
          </button>
        </div>
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-5 rounded-xl shadow flex items-center gap-4 transition transform hover:shadow-md"
          >
            <div
              className={`${card.bgColor} ${card.textColor} p-3 rounded-full flex items-center justify-center`}
            >
              {card.icon}
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {card.subtitle}
              </p>
              <p className="text-lg font-bold">{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Chart */}
      <div className="bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold">Tech Stack Breakdown</h2>
        <TechBarChart data={techData} />
      </div>

      {/* Project Highlights */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl  space-y-4 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold">Project Highlights</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
