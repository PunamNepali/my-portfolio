import React from "react"
export default function Hero() {
  return (
    <div className="flex flex-row " >
    <img src="/image/Punam.jpg" alt="Punam Nepali" 
    className="w-20 h-15 mx-auto mt-6 shadow-lg bg-black" />
    <section className="  justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Punam Nepali</h1>
      <p className="text-3xl font-semibold max-w-2xl">I'm a Frontend Developer passionate about building user-friendly, responsive websites with React and Tailwind CSS.</p>
    </section>
    </div>
  )
}
