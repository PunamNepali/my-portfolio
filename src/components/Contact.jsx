
import React ,{ useState } from "react"
export default function Contact() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Message sent successfully!");
    // Reset form (optional)
    
    setEmail("");
  };
  return (
<section id="contact" className=" bg-white text-center w-full">
  <div  className="flex bg-white text-gray-800 h-full ">
      
      
      <div className="w-1/2 bg-gradient-to-b from-indigo-100 to-white flex items-center justify-center p-8">
        <div className="text-left max-w-md">
          <h2 className="text-4xl font-bold mb-4 text-indigo-700">Let's Connect</h2>
          <p className="text-lg text-gray-700 mb-4">
            I'm always open to collaboration and new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
    <div className="mt-8 flex justify-normal rounded-lg shadow-lg bg-gradient-to-b from-indigo-500 via-purple-400 to-pink-400 gap-4 text-lg">
      <img src="/image/poonam.jpg" alt="Let's Connect" className="w-10 h-10 rounded-2xl mr-40" />
      <a href="https://www.linkedin.com/in/punam-nepali-9111822a6/" target="_blank" className="hover:text-indigo-600 w-10 h-10"><img src="/image/linkedin.png"/></a>
      <a href="https://www.facebook.com/Poonam-Nepali" target="_blank" className="hover:text-indigo-600 w-10 h-10 "><img src="/image/Facebook.png"/></a>
      <a href="https://www.instagram.com/Poonam-Nepali" target="_blank" className="hover:text-indigo-600 w-10 h-8 "><img src="/image/instagram.jpg"/></a>
        <a href="https://github.com/PunamNepali" target="_blank" className="hover:text-indigo-600 w-10 h-9 "><img src="/image/github.png"/></a>    
    </div>
        </div>
      </div>
<section id="contact" className=" bg-white min-h-screen gap-8">
  <div className="flex  bg-white ho text-black-800">
  <div className="max-w-4xl mx-auto text-center">
  
    <h2 className="text-3xl font-bold  pt-20  text-indigo-700">Contact Me</h2>
    <p className="text-lg">Feel free to reach out:</p>
    <p className="text-indigo-600  ">punamkhem0@gmail.com</p>
    <p className="text-lg mt-2">📍 Dang, Nepal</p>
    <p className="text-lg mb-2">📞 +977-9822826345</p>

    {/* Form */}
    <form className="mt-4 max-w-xl mx-auto space-y-4 text-right text-black">
      <input type="text" placeholder="Your Name" required className="w-full p-2 border border-black-300 rounded-md" />
      <input type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-black-300 rounded-md" />
      <textarea rows="4" placeholder="Your Message" required className="w-full p-2 border border-black-300 rounded-md" />
      <button type="submit" className="bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-700 transition">Send Message</button>
    </form>

  </div>
 </div>
</section>
</div>
</section>
 )
}


