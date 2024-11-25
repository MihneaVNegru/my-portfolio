import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link className="text-white font-medium hover:text-yellow-300" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-white font-medium hover:text-yellow-300" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="text-white font-medium hover:text-yellow-300" to="/about">About</Link>
        </li>
        <li>
          <Link className="text-white font-medium hover:text-yellow-300" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
