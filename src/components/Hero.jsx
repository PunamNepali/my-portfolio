import React from "react"
export default function Hero() {
  return (
    <div className="flex flex-row h-screen  bg-gray-100" >
    <img src="/image/Punam.jpg" alt="Punam Nepali" 
    className="w-50vw items-left" />
    <section className=" text-center flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-bold mb-6">Hi, I'm Punam Nepali</h1>
      <p className="text-2xl font-semibold max-w-2xl text-center mx-6">I'm a Frontend Developer passionate about building user-friendly, responsive websites with React and Tailwind CSS.</p>
    </section>
    </div>
  )
}
