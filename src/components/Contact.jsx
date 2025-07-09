import React from "react"
export default function Contact() {
  return (
//     <section id="contact" className="py-16 px-4 bg-gray-100 h-screen">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
//         <p className="text-lg mb-4">Feel free to reach out to me at:</p>
//         <a href="mailto:punam@example.com" className="text-indigo-600 font-semibold">punam@example.com</a>
//       </div>
//     </section>
//   )
// }

<section id="contact" className="py-16 px-4 bg-gray-100 min-h-screen">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <p className="text-lg mb-2">Feel free to reach out:</p>
    <p className="text-indigo-600 font-semibold">punamkhem0@gmail.com</p>
    <p className="text-lg mt-4">📍 Dang, Nepal</p>
    <p className="text-lg mb-4">📞 +977-9822826345</p>

    {/* Form */}
    <form className="mt-8 max-w-xl mx-auto space-y-4 text-left">
      <input type="text" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-md" />
      <input type="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-md" />
      <textarea rows="5" placeholder="Your Message" required className="w-full p-3 border border-gray-300 rounded-md" />
      <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">Send Message</button>
    </form>

    {/* Social Links */}
    <div className="mt-8 flex justify-center gap-6 text-xl">
      <a href="https://github.com/PunamNepali" target="_blank" className="hover:text-indigo-600">GitHub</a>
      <a href="https://www.linkedin.com/in/punam-nepali-9111822a6/" target="_blank" className="hover:text-indigo-600">LinkedIn</a>
    </div>
  </div>
</section>
 )
}

