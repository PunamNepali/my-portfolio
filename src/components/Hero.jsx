import React from "react"
export default function Hero() {
  return (
     
    <div className=" h-screen md:flex md:flex-row sm:flex-col  w-50 bg-gradient-to-b from-indigo-100 to-white gap-8 px-8 py-8 items-center " >
    <img src="/image/Punam.jpg" alt="Punam Nepali" className="w-[40%] md:h-80 rounded-full  mt-8 sm:h-36 sm:mx-auto ml-28  " />
    <section className=" flex flex-col justify-center  md:w-full md:pl-48"> 
      <h1 className="text-4xl font-bold mb-2 text-left ">Hi,</h1>
      <h1 className="text-4xl font-bold mb-2 text-left">I'm Punam Nepali</h1>
      <p className="font-semibold max-w-md mt-4 mb-6 text-left">I'm a Frontend Developer passionate about building user-friendly, responsive websites with React and Tailwind CSS.</p>
    </section>
    </div>
    
  )
}
