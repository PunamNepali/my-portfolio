
//  import React,{usestate} from "react"
//  const Navbar = () =>{
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };
//  return (
//    <header className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 py-6 text-white s w-vw sticky top-0 z-50">
//       <div className="w-full px-4 flex justify-between items-center ">
//         <a href="/" className="text-3xl font-semibold ">Punam's Portfolio</a>
//         <nav>
//           <div className=" gap-6 text-lg font-normal list-none">
//             <li><a href="#about" className="hover:text-blue-500 mx-2 font-semibold">About</a></li>
//             <li><a href="#projects" className="hover:text-blue-500 font-semibold">Projects</a></li>
//             <li><a href="#gallery" className="hover:text-blue-500 font-semibold">Gallery</a></li>
//             <li><a href="#contact" className="hover:text-blue-500 font-semibold">Contact</a></li>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
//  };
// export default Navbar

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 py-6 text-white w-full sticky top-0 z-50">
      <div className="px-4 flex justify-between items-center max-w-6xl mx-auto">
        <a href="/" className="text-3xl font-semibold">Punam's Portfolio</a>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg font-normal ">
          <li><a href="#about" className="hover:text-blue-200 font-semibold">About</a></li>
          <li><a href="#projects" className="hover:text-blue-200 font-semibold">Projects</a></li>
          <li><a href="#gallery" className="hover:text-blue-200 font-semibold">Gallery</a></li>
          <li><a href="#contact" className="hover:text-blue-200 font-semibold">Contact</a></li>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden px-4 mt-4 space-y-2">
          <li><a href="#about" onClick={closeMenu} className="block text-lg hover:text-blue-200 font-semibold">About</a></li>
          <li><a href="#projects" onClick={closeMenu} className="block text-lg hover:text-blue-200 font-semibold">Projects</a></li>
          <li><a href="#gallery" onClick={closeMenu} className="block text-lg hover:text-blue-200 font-semibold">Gallery</a></li>
          <li><a href="#contact" onClick={closeMenu} className="block text-lg hover:text-blue-200 font-semibold">Contact</a></li>
        </nav>
      )}
    </header>
  );
};

export default Navbar;



