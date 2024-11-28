import React, { useState } from "react";

export default function Projects() {
  // State to manage which image is clicked
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to open modal and set the selected image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">Projects</h2>
          <p className="text-lg lg:text-xl text-gray-300 mt-4">
            Explore some of the innovative and impactful projects I’ve had the opportunity to work on.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="project-card bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden h-48 relative group">
              <img
                src="/p1.jpeg"
                alt="Medical Budget Tracker"
                className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 cursor-pointer"
                onClick={() => openModal("/p1.jpeg")}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                Medical Budget Tracker
              </h3>
              <p className="text-gray-300">
                This tool helps individuals manage medical expenses by tracking payments, insurance claims, and budget allocations, offering insights into spending patterns and savings opportunities.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden h-48 relative group">
              <img
                src="/p2.jpeg"
                alt="Money Manager"
                className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 cursor-pointer"
                onClick={() => openModal("/p2.jpeg")}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                Money Manager
              </h3>
              <p className="text-gray-300">
                A comprehensive finance tracker designed to help users organize and categorize their spending, set budgets, and track income for smarter money management.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden h-48 relative group">
              <img
                src="/p3.jpeg"
                alt="Expense Tracker"
                className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 cursor-pointer"
                onClick={() => openModal("/p3.jpeg")}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                Expense Tracker
              </h3>
              <p className="text-gray-300">
                This app allows users to track their daily, monthly, and yearly expenses, providing them with detailed reports to help reduce unnecessary spending.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden h-48 relative group">
              <img
                src="/p4.jpeg"
                alt="To-Do List"
                className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 cursor-pointer"
                onClick={() => openModal("/p4.jpeg")}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                To-Do List App
              </h3>
              <p className="text-gray-300">
                A simple yet effective to-do list application that helps users stay organized by allowing them to add, edit, and delete tasks.
              </p>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden h-48 relative group">
              <img
                src="/p5.jpeg"
                alt="Recipe Finder"
                className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 cursor-pointer"
                onClick={() => openModal("/p5.jpeg")}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                Recipe Finder
              </h3>
              <p className="text-gray-300">
                A recipe finder app that allows users to search for recipes based on ingredients, cuisine, and dietary preferences.
              </p>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden h-48 relative group">
              <img
                src="/p6.jpeg"
                alt="Weather App"
                className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 cursor-pointer"
                onClick={() => openModal("/p6.jpeg")}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                Weather App
              </h3>
              <p className="text-gray-300">
                An intuitive weather app that provides users with real-time forecasts, severe weather alerts, and detailed weather data for their location.
              </p>
            </div>
          </div>
        </div>

        {/* Modal for Full Image */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white p-4 rounded-lg max-w-screen-sm">
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
