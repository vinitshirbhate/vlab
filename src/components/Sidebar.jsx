import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainFrame from "./MainFrame";
import Help from "./Help";
import Explore from "./Explore";
import Profile from "./ProfileName";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState("Profile");

  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
  };
  function handleLogout() {
    navigate("/");
  }
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <div className=" border bg-gray-400 p-4 backdrop-filter backdrop-blur-md bg-opacity-0 h-[95vh] w-72 rounded-3xl mt-5 ml-3">
            <div className="flex">
              <div className=" bg-slate-200 rounded-full h-12 w-12 flex justify-center mt-1 mr-3">
                <div className="flex flex-col justify-center h-full text-xl font-bold text-slate-500">
                  V
                </div>
              </div>
              <button
                onClick={() => handleComponentClick("Profile")}
                className="mt-3 flex flex-col justify-center text-2xl h-full font-medium mr-3.5 text-black"
              >
                Profile
              </button>
            </div>
            <div class="w-full h-px bg-white opacity-90 mt-3"></div>

            <div className="flex flex-col justify-center pt-6 space-y-4">
              <a
                href="#"
                className="flex items-center p-3 text-xl font-medium rounded-lg group dark:text-black hover:bg-blue-700 hover:bg-opacity-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <button
                  onClick={() => handleComponentClick("Explore")}
                  className="ms-3"
                >
                  Explore
                </button>
              </a>
              <a
                href="#"
                className="flex items-center p-3 text-xl font-medium rounded-lg group dark:text-black hover:bg-blue-700 hover:bg-opacity-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>

                <button className="ms-3">Courses</button>
              </a>
              <a
                href="#"
                className="flex items-center p-3 text-xl font-medium rounded-lg group dark:text-black hover:bg-blue-700 hover:bg-opacity-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>

                <button
                  onClick={() => handleComponentClick("Help")}
                  className="ms-3"
                >
                  help
                </button>
              </a>
              <div className="">
                <button
                  className=" text-black flex text-xl font-semibold ml-12 mt-20 hover:bg-red-500 rounded-lg p-3 gap-2
        "
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10">
          <div className="p-6 mr-5 ml-12 border hover:bg-clip-padding hover:backdrop-filter backdrop-blur-md bg-opacity-0 h-[95vh]  rounded-3xl mt-5">
            {selectedComponent === "Profile" && <Profile />}
            {selectedComponent === "Explore" && <Explore />}
            {selectedComponent === "Help" && <Help />}
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Sidebar;
