import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import {
  FaPlus,
  FaBell,
  FaCalendarAlt,
  FaSyncAlt,
  FaTrashAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const TodoDetails = () => {
  const tasks = useSelector((state) => state.main?.tasks || []); // Ensure tasks is always an array
  const [latestTask, setLatestTask] = useState("No tasks available");

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("tasks")) || [];
      if (data.length > 0) {
        const lastTask = data.at(-1);
        setLatestTask(lastTask?.text || "Unnamed Task");
      }
    } catch (error) {
      console.error("Error reading tasks from localStorage:", error);
    }

    return () => {}; // Ensures useEffect always returns a function
  }, [tasks]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="w-full max-w-[452px] h-[600px] bg-[#f3f8f3] p-4 rounded-lg border border-gray-300 shadow-md">
      {/* Task Header */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-[18px] h-[18px]" />
          <p className="text-lg font-medium text-gray-900">{latestTask}</p>
        </div>
        <CiStar className="text-gray-500 w-[21px] h-[20.25px] cursor-pointer" />
      </div>

      {/* Task Options */}
      <ul className="mt-2 space-y-3 text-gray-700">
        <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600 border-b border-gray-300 pb-2">
          <FaPlus className="w-[24px] h-[24px]" />
          <span className="w-[90px] h-[20px] font-[Outfit] font-normal text-[15px] leading-[20px] tracking-[0%] text-gray-900">
            Add Step
          </span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600 border-b border-gray-300 pb-2">
          <FaBell className="w-[24px] h-[24px]" />
          <span className="w-[90px] h-[20px] font-[Outfit] font-normal text-[15px] leading-[20px] tracking-[0%] text-gray-900">
            Set Reminder
          </span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600 border-b border-gray-300 pb-2">
          <FaCalendarAlt className="w-[24px] h-[24px]" />
          <span className="w-[90px] h-[20px] font-[Outfit] font-normal text-[15px] leading-[20px] tracking-[0%] text-gray-900">
            Add Due Date
          </span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600 border-b border-gray-300 pb-2">
          <FaSyncAlt className="w-[24px] h-[24px]" />
          <span className="w-[90px] h-[20px] font-[Outfit] font-normal text-[15px] leading-[20px] tracking-[0%] text-gray-900">
            Repeat
          </span>
        </li>
      </ul>

      {/* Notes Section */}
      <p className="mt-4 text-gray-400 italic cursor-text">Add Notes</p>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center text-gray-500 text-sm border-t pt-2">
        <span>Created on {days[new Date().getDay()]}</span>
        <FaTrashAlt className="text-red-500 w-[24px] h-[24px] cursor-pointer hover:text-red-700" />
      </div>
    </div>
  );
};

export default TodoDetails;
