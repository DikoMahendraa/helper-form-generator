import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="text-3xl font-bold">Form Builder</div>
        <nav className="lg:mt-4 mt-0 hidden lg:inline">
          <Link to="#" className="block sm:inline-block text-white mr-4">
            Home
          </Link>
          <Link to="#" className="block sm:inline-block text-white mr-4">
            Features
          </Link>
          <Link to="#demo" className="block sm:inline-block text-white mr-4">
            Demo
          </Link>
          <Link to="#">GitHub</Link>
        </nav>
      </div>
    </header>
  );
}
