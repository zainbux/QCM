import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavSidebar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <AiOutlineMenu
        size={30}
        onClick={handleNav}
        className={`cursor-pointer fixed top-4 right-4 z-50 md:hidden ${
          nav ? 'text-[101a33]' : 'text-white'
        }`}
      />

      <div
        className={`font-poppins cursor-pointer text-[20px] gap-5 fixed w-full h-screen bg-sky-50 flex flex-col justify-center items-center z-40 transition-transform duration-300 ${
          nav ? '' : '-translate-y-full'
        }`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="w-[55%] flex justify-center rounded-lg shadow-lg bg-[#101a33] text-white p-3 m-2 hover:scale-110 duration-200 ease-out"
          onClick={handleNav}
        >
          <span>HOME</span>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="w-[55%] flex justify-center rounded-lg shadow-lg bg-[#101a33] text-white p-3 m-2 hover:scale-110 ease-out duration-200"
          onClick={handleNav}
        >
          <span>ABOUT</span>
        </Link>
        <Link
          to="pricing"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="w-[55%] flex justify-center rounded-lg shadow-lg bg-[#101a33] text-white p-3 m-2 hover:scale-110 ease-out duration-200"
          onClick={handleNav}
        >
          <span>PRICING</span>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          className="w-[55%] flex justify-center rounded-lg shadow-lg bg-[#101a33] text-white p-3 m-2 hover:scale-110 ease-out duration-200"
          onClick={handleNav}
        >
          <span>CONTACT</span>
        </Link>
      </div>
    </>
  );
};

export default NavSidebar;
