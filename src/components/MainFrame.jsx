import React from "react";
import Profile from "./ProfileName";
import Explore from "./Explore";
import Help from "./Help";

const MainFrame = () => {
  return (
    <div className="p-6 mr-5 ml-12 border hover:bg-clip-padding hover:backdrop-filter backdrop-blur-md bg-opacity-0 h-[95vh]  rounded-3xl mt-5">
      {/* <Profile /> */}
      {/* <Explore /> */}
      <Help />
    </div>
  );
};

export default MainFrame;
