import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-fit bg-gray-100 dark:bg-gray-900 p-6 text-center">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg max-w-md">
        <FaExclamationTriangle size={60} className="text-red-500 mb-4 mx-auto" />
        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">404</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
