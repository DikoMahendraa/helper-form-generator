import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 absolute w-full bottom-0 text-white py-4 text-center rounded-tl-full rounded-tr-full">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; 2024 DM Simple Form Builder. All rights reserved.
        </p>
        <div className="mt-2 text-sm">
          <Link to="#" className="text-gray-400 ml-4">
            Contact
          </Link>
          <Link to="#" className="text-gray-400 ml-4">
            Privacy Policy
          </Link>
          <Link to="#" className="text-gray-400 ml-4">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
