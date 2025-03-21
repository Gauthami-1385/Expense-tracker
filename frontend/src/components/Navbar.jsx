import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#211F45]  flex gap-8 items-center justify-between px-8 text-[#ffba08]">
      <h3>Welcome User</h3>
      <div className="rounded-full h-10 w-10 border flex items-center justify-center">
        
        <FaUserAlt className="" />
      </div>
    </div>
  );
};

export default Navbar;
