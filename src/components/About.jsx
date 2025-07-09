import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export default function About() {
  return (
    <section id="about" className=" relative py-28 px-4 h-screen bg-gray-100 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
      <div className="mt-6 text-left shadow-md p-8 bg-white rounded-lg hover:scale-90 transition-transform">
        <h2 className="text-3xl font-semibold mb-4 mt-4  text-indigo-700 ">About Me</h2>
        <p className="text-base text-left mt-8">I'm currently studying BSc CSIT at Padmakanya Multiple Campus. I enjoy turning designs into real websites and learning new technologies. I'm practical and down-to-earth, adaptable to any situation.</p>
      </div>

      <div className="mt-6 shadow-md p-8 bg-white rounded-lg text-left hover:scale-90 transition-transform">
        <h3 className="text-3xl font-semibold mb-4 mt-4  text-indigo-700">Skills</h3>
         <p className="text-base text-left grid grid-cols-5 mt-16 mx-16px"> 
        <img src="/image/html.png" alt="html" className="h-10 w-8 hover:scale-50 transition-transform"/>
        <img src="/image/css.png" alt="css" className="h-10 w-8 hover:scale-50 transition-transform"/>
        <img src="/image/javascript.png" alt="js" className="h-8x w-8 hover:scale-50 transition-transform"/>
        <img src="/image/react.png" alt="react" className="h-10 w-8 hover:scale-50 transition-transform"/>
        <img src="/image/github.png" alt="git" className="h-10 w-8 hover:scale-50 transition-transform"/>
       </p>
      </div>

      <div className="mt-6 shadow-md p-8 bg-white rounded-lg text-left hover:scale-90 transition-transform">
        <h3 className="text-3xl font-semibold mb-4 mt-4  text-indigo-700">My Vision</h3>
        <p className="text-base text-left mt-8">
         I aim to become a full-stack developer who creates intuitive and accessible user experiences. I'm driven by curiosity and the desire to solve real-world problems through code.
        </p>
      </div>

    </section>
  )
}

