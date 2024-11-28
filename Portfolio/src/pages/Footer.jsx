import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300   py-8">
      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src="/logo2.png"
              alt="Ashish Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-semibold text-gray-200">Aashish</span>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-6 md:mb-0">
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <a
                    href="#home"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <a
                    href="#about"
                    className="hover:text-gray-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#help"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Need Help?
                  </a>
                </li>
                <li>
                  <a
                    href="#content"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Content Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#store"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Lifehacker Store
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-center md:text-right">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#ads"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Advertising
                  </a>
                </li>
                <li>
                  <a
                    href="#jobs"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

     
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400 mb-2">Follow me on social media:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aashish-jadav-30965527b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition-colors"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://github.com/aashish0959"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-gray-400 mb-2">More from our network:</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ashish Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
