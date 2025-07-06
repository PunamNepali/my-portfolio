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
   <header className="bg-black color-white shadow-sm py-4 mx-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-red-500">Punam's Portfolio</h1>
        <nav>
          <div className="flex gap-6 text-lg font-normal list-none ">
            <li><a href="#about" className="hover:text-blue-500 mx-2">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#gallery" className="hover:text-blue-500">Gallery</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </div>
        </nav>
      </div>
    </header>
  );
 };
export default Navbar


