import React from "react"; 
import { LuNotepadText } from "react-icons/lu"; 
import { CiCalendar } from "react-icons/ci"; 
import { CiStar } from "react-icons/ci"; 
import { MdOutlineAssignmentInd } from "react-icons/md"; 
import { PiBookOpenTextBold } from "react-icons/pi"; 
import { FaPlus } from "react-icons/fa6"; 
import { HiOutlineInformationCircle } from "react-icons/hi2"; 
import DonutChart from "./PieChart"; 
import { useSelector } from "react-redux";
 
function SideBar() { 
  const user = JSON.parse(localStorage.getItem('CurrentUser')) || [];
  return ( 
    <div className="w-[280px] flex flex-col gap-[9px] bg-[#EEF6EF] p-4 rounded-lg border border-gray-300 shadow-md "> 
      
      {/* Profile Image Section */}
      <div className="flex justify-center text-center"> 
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s" 
          alt="Profile" 
          className="w-[118px] h-[118px] rounded-[2947.05px] border-[4.43px] border-black border-t-black" 
        /> 
      </div> 
      
      {/* Welcome Message */}
      <div className="flex justify-center text-center"> 
        <p className="font-[Outfit] font-medium text-[15px] leading-[20px] tracking-[0] text-[#1B281B] p-2"> 
          {user.email} 
        </p> 
      </div> 
 
      {/* Sidebar Menu Section */}
      <div className="w-[240px] h-[248px] pt-[24px] pb-[24px] bg-[#FBFDFC]"> 
        
        {/* All Tasks */}
        <div className="w-[240px] h-[40px] flex gap-[16px] p-[8px_16px] rounded-[8px] bg-[#FBFDFC] items-center"> 
          <LuNotepadText className="h-[24px] w-[24px]" /> 
          <p className="font-[Outfit] font-medium text-[15px] leading-[20px] tracking-[0%] text-[#1B281B]"> 
            All Tasks 
          </p> 
        </div> 
 
        {/* Today */}
        <div className="w-[240px] h-[40px] flex gap-[16px] p-[8px_16px] rounded-[8px] bg-[#FBFDFC] items-center"> 
          <CiCalendar className="h-[24px] w-[24px]" /> 
          <p className="font-[Outfit] font-medium text-[15px] leading-[20px] tracking-[0%] text-[#1B281B]"> 
            Today 
          </p> 
        </div> 
 
        {/* Important */}
        <div className="w-[240px] h-[40px] flex gap-[16px] p-[8px_16px] rounded-[8px] bg-[#FBFDFC] items-center"> 
          <CiStar className="h-[24px] w-[24px]" /> 
          <p className="font-[Outfit] font-medium text-[15px] leading-[20px] tracking-[0%] text-[#1B281B]"> 
            Important 
          </p> 
        </div> 
 
        {/* Planned */}
        <div className="w-[240px] h-[40px] flex gap-[16px] p-[8px_16px] rounded-[8px] bg-[#FBFDFC] items-center"> 
          <PiBookOpenTextBold className="h-[24px] w-[24px]" /> 
          <p className="font-[Outfit] font-medium text-[15px] leading-[20px] tracking-[0%] text-[#1B281B]"> 
            Planned 
          </p> 
        </div> 
 
        {/* Assigned to Me */}
        <div className="w-[240px] h-[40px] flex gap-[16px] p-[8px_16px] rounded-[8px] bg-[#FBFDFC] items-center"> 
          <MdOutlineAssignmentInd className="h-[24px] w-[24px]" /> 
          <p className="font-[Outfit] font-medium text-[15px] leading-[20px] tracking-[0%] text-[#1B281B]"> 
            Assigned to me 
          </p> 
        </div> 
      </div> 
 
      {/* Add List Section */}
      <div className="w-[240px] h-[88px] bg-[#FBFDFC] flex justify-between items-center"> 
        <div className="w-[240px] h-[40px] flex gap-4 p-2 px-4 rounded-lg bg-[#FBFDFC]"> 
          <FaPlus className="h-[24px] w-[24px]" /> 
          <p className="font-[Outfit] font-medium text-[15px] leading-[20px] tracking-[0%] text-[#1B281B]"> 
            Add list 
          </p> 
        </div> 
      </div> 
 
      {/* Today's Tasks Section */}
      <div className="w-[240px] h-[307px] bg-[#FBFDFC]"> 
        <div className="m-5"> 
          <div className="flex justify-between"> 
            {/* Section Header */}
            <p className="w-[80px] h-[16px] font-inter font-medium text-[13.3px] leading-[100%] tracking-[0%]"> 
              Today's Tasks 
            </p> 
            {/* Info Icon */}
            <HiOutlineInformationCircle className="h-[16px] rounded-[3.99px]" /> 
          </div> 
          
          {/* Task Count */}
          <p className="w-[21px] h-[26px] font-inter font-medium text-[21.27px] leading-[100%] tracking-[0%]"> 
            11 
          </p> 
        </div> 
 
        {/* Divider Line */}
        <hr className="w-[236px] border-[1.33px] border-gray-200" /> 
 
        {/* Donut Chart Section */}
        <div className="flex items-center justify-center mt-[15.85px]"> 
          <DonutChart /> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default SideBar;
