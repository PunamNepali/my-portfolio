import React from "react"
export default function Footer() {
  return (
    <footer className=" relative bg-indigo-600 text-white text-center py-4 w-full">
      <p>&copy; {new Date().getFullYear()} Punam Nepali. All rights reserved.</p>
    </footer>
  );
}
