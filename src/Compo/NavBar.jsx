import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { RiMoonClearLine } from "react-icons/ri";

function NavBar({ setShowComponent, setShowSComponent }) {
  const dark = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <div className="flex items-center justify-center px-4 py-2">
      <div className="flex justify-between items-center w-full max-w-full">
        {/* Left Section */}
        <div className="flex items-center gap-4 sm:gap-6 w-[138px] h-[32px]">
          {/* Menu Icon */}
          <IoIosMenu
            className="w-[18px] h-[18px] border-[1.5px] p-0.5 sm:w-[22px] sm:h-[22px]"
            onClick={(e) => setShowComponent((e) => !e)}
          />

          {/* Logo & Text Container */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="w-[32px] h-[32px] flex items-center justify-center">
              <img
                src="https://greenphire.com/wp-content/uploads/2023/05/ATOM-ALT_Lt-Green.png"
                alt="Logo"
                className="w-[26.63px] h-[26.63px]"
              />
            </div>

            {/* Brand Name */}
            <p className="font-[Sen] font-bold text-[20px] sm:text-[24px] leading-none tracking-[-0.04em] text-[#5dac60]">
              DoIt
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-[24px]">
          <IoSearchOutline className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
          <CiGrid41 onClick={(e)=>setShowSComponent((e)=>!e)} className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"  />
          <RiMoonClearLine
            className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
            onClick={dark}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
