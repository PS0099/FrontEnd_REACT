import React, { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { IoIosRepeat } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Features/mainSlice";

function AddTasks({showComponent}) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const hSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (text.trim() === "") return; // Prevent empty tasks
    dispatch(addTask(text));
    setText(""); // Clear input after submitting
  };




  return (
    <div className={`flex-1 ${showComponent ? 'w-auto' : ''}`}
>
      {/* ToDo Header Section */}
      <div className="w-full h-[32px] flex items-center">
        <p className="text-[13px] font-medium">ToDo</p>
        <FaCaretDown className="w-[12px] h-[12px] ml-2" />
      </div>

      {/* Main Task Input Section */}
      <div className="w-full h-auto pt-4 pb-4 border-t border-gray-300">
        <form
          className="w-full flex flex-col gap-6 pt-6 px-4 bg-gradient-to-t from-[rgba(208,255,210,0.1)] to-[rgba(53,121,55,0.1)] rounded"
          onSubmit={hSubmit} // ✅ Use onSubmit here
        >
          {/* Task Input Field */}
          <input
            type="text"
            placeholder="Add task..."
            className="w-full h-[40px] border border-gray-300 px-3 rounded-md focus:outline-none"
            value={text} // ✅ Controlled input
            onChange={(e) => setText(e.target.value)}
          />

          {/* Icons and Add Button Section */}
          <div className="w-full flex flex-wrap justify-between items-center gap-4 py-4">
            {/* Icons Group */}
            <div className="flex gap-4">
              <CiBellOn className="w-[24px] h-[24px]" />
              <IoIosRepeat className="w-[24px] h-[20px]" />
              <CiCalendar className="w-[18px] h-[19px]" />
            </div>

            {/* Add Task Button */}
            <button
              className="px-6 py-2 rounded-md bg-green-100 text-green-700 font-medium"
              type="submit"
            >
              ADD TASK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTasks;
