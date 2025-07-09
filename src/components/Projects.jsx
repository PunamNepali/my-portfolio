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
    link: "/projects/student-id-card",
  },
  {
    title: "Calculator",
    description: "A simple calculator application built with React.",
    image: "/image/A4.png",
    link: "/projects/calculator",
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
    <section id="projects" className="py-4 px-4 mx-6 bg-gray-100 flex-row">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="text-lg mb-6">Here are some projects I have worked on .</p>

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
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
