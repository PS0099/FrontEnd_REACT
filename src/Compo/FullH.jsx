import React, { useState } from "react";
import SideBar from "./SideBar";
import AddTasks from "./AddTasks";
import TodoDetails from "./ToolD";
import RenderTodos from "./RenderTodos";
import NavBar from "./NavBar";

function FullH() {
  const [showComponent, setShowComponent] = useState(true);
  const [showSComponent, setShowSComponent] = useState(true);
  console.log(showComponent)
  return ( 
    <>
      <NavBar setShowComponent={setShowComponent} setShowSComponent={setShowSComponent} />
      <div className="flex flex-col lg:flex-row justify-between items-start gap-5 p-[14px]">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/6 min-w-[250px]">
          {showComponent && <SideBar />}
        </div>

        {/* Main Section - Tasks */}
        <div className="flex-1 flex flex-col gap-4 w-full rounded-lg border border-gray-300 shadow-md p-3">
          <AddTasks />
          <RenderTodos />
        </div>

        {/* Todo Details */}
        <div className="w-full lg:w-1/4 min-w-[250px]">
          {showSComponent && <TodoDetails />}
        </div>
      </div>
    </>
  );
}

export default FullH;
