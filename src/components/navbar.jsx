import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoSvg from "./LogoSvg";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [pageTitle, setTitle] = useState(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Weather Simulation");
        break;
      case "/demo2":
        setTitle("Building Footprints");
        break;
      case "/demo3":
        setTitle("Tracking Route");
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-10 w-full ${
        navbar ? "bg-gray-700" : "bg-gray-700/40"
      } shadow`}
    >
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-4">
        <div>
          <div className="flex items-center justify-between py-3 md:py-2 md:block">
            <div className="h-16 w-20">
              <LogoSvg className="h-full" />
            </div>
            <span className="text-white text-xl font-semibold tracking-wide md:hidden">
              {pageTitle}
            </span>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <span className="text-white text-xl font-semibold tracking-wide hidden md:block">
          {pageTitle}
        </span>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <Link to="/" replace={true}>
                  Demo 1
                </Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/demo2" replace={true}>
                  Demo 2
                </Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/demo3" replace={true}>
                  Demo 3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
