import React from 'react';


export default function Gallery() {

  const projects = [
    { src: '/image/A1.png', title: 'Survey Form' },
    { src: '/image/A2.png', title: 'Tribute Page' },
    { src: '/image/A3.png', title: 'Student Id Card' },
    { src: '/image/A4.png', title: 'Calculator' },
    { src: '/image/A5.png', title: 'Documentation' },


  ];

  return (
    <section id="gallery" className="py-4 px-4  bg-gray-100 flex-row">
      <div className="w-full px-8 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <p className="text-lg mb-6">Here are some snapshots from my recent projects .</p>
        {/* Add your gallery images or components here */}

        
        <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md  hover:shadow-xl transition-shadow "
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}