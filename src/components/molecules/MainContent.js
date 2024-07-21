import React from "react";
import { FilePenLine, FileScan, Signature, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <main className="py-12 pb-24">
      <section id="hero" className="container mx-auto text-center mb-6 py-12">
        <h1 className="text-4xl font-bold mb-4">
          Effortlessly Create HTML Forms
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Generate and customize forms with just a few clicks. Copy and paste
          directly into your projects.
        </p>
        <Link to="/create-component">
          <button className="bg-cyan-500/50 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
            Try It Now
          </button>
        </Link>
      </section>

      <section className="container mx-auto">
        <section id="features" className="bg-gray-900 py-12 rounded-xl px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Key Features
            </h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <Signature size={28} />
                  <h3 className="text-xl my-2 font-bold text-white">
                    Easy Form Creation
                  </h3>
                  <p className="text-gray-300">
                    Generate forms by clicking on input types and options.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <FilePenLine size={28} />
                  <h3 className="text-xl my-2 font-bold text-white">
                    Customization Options
                  </h3>
                  <p className="text-gray-300">
                    Customize labels, placeholders, and validation rules.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <FileScan size={28} />
                  <h3 className="text-xl my-2 font-bold text-white">
                    Code Generation
                  </h3>
                  <p className="text-gray-300">
                    Automatically generates HTML and JavaScript code.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <Workflow size={28} />{" "}
                  <h3 className="text-xl my-2 font-bold text-white">
                    Easy Integration
                  </h3>
                  <p className="text-gray-300">
                    Integrate with Zod, Yup, and React Hook Form with just a
                    click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
