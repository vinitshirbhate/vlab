import React from "react";
import Sidebar from "../components/Sidebar";
import MainFrame from "../components/MainFrame";

const Main = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <MainFrame />
      </div>
    </div>
  );
};

export default Main;
