import React from "react"


const projects = [
  {
    title: "Tribute Page",
    description: "A tribute page for my father built with HTML and CSS.",
    image: "/image/A2.png",
    link: "/projects/tribute-page", // Can be a route or external link
  },
  {
    title: "Survey Form",
    description: "A simple survey form made with form validation.",
    image: "/image/A1.png",
    link: "/projects/survey-form",
  },
  {
    title: "Student ID Card",
    description: "A student ID card design using React and tailwindCSS.",
    image: "/image/A3.png",
    link: "https://student-id-card-lime.vercel.app/",
  },
  {
    title: "Calculator",
    description: "A simple calculator application built with React.",
    image: "/image/A4.png",
    link: "https://calculator-gules-pi.vercel.app/",
  },
  {
    title: "Documentation",
    description: "Documentation for a project or library.",
    image: "/image/A5.png",
    link: "/projects/documentation",
  }

];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-gray-100 w-full flex-row">
      <div className="w-full  px-8 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4  text-indigo-700">Projects</h2>
        <p className="text-lg mb-6  text-indigo-700">Here are some projects I have worked on .</p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition" >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover" />
              <h3 className="text-xl font-light mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 font-thin">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
