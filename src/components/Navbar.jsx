// import React from "react"
// export default function Navbar() {
//   return (
//     <header className="bg-white shadow-sm py-4">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <h1 className="text-xl font-semibold">Punam's Portfolio</h1>
//         <nav>
//           <ul className="flex space-x-6 text-lg font-normal">
//             <li><a href="#about" className="hover:text-blue-500" >About</a></li>
//             <li><a href="#works" className="hover:text-blue-500">Works</a></li>
//             <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
//             <li><a href="#gallery" className="hover:text-blue-500">Gallery</a></li>
//             <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }
 import React from "react"

 const Navbar = () =>{
 return (
   <header className="bg-black py-6  text-white sticky top-0 z-50
">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-left">Punam's Portfolio</h1>
        <nav>
          <div className="flex gap-6 text-lg font-normal list-none ">
            <li><a href="#about" className="hover:text-blue-500 mx-2 font-semibold">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500 font-semibold">Projects</a></li>
            <li><a href="#gallery" className="hover:text-blue-500 font-semibold">Gallery</a></li>
            <li><a href="#contact" className="hover:text-blue-500 font-semibold">Contact</a></li>
          </div>
        </nav>
      </div>
    </header>
  );
 };
export default Navbar


