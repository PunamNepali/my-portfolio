import React from "react"
export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">I'm currently studying BSc CSIT at Padmakanya Multiple Campus. I enjoy turning designs into real websites and learning new technologies. I'm practical and down-to-earth, adaptable to any situation.</p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <p className="text-base text-center">HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub</p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">My Vision</h3>
        <p className="text-base text-wrap">
         I aim to become a full-stack developer who creates intuitive and accessible user experiences. I'm driven by curiosity and the desire to solve real-world problems through code.
        </p>
      </div>

    </section>
  )
}

