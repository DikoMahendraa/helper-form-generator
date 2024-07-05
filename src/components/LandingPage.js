import { FilePenLine, FileScan, Signature } from "lucide-react";
import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-black min-h-screen text-white">
      <header className="py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="text-3xl font-bold">Simple Form Generator</div>
          <nav className="mt-4 sm:mt-0">
            <a href="#" className="block sm:inline-block text-white mr-4">
              Home
            </a>
            <a
              href="#features"
              className="block sm:inline-block text-white mr-4"
            >
              Features
            </a>
            <a href="#demo" className="block sm:inline-block text-white mr-4">
              Demo
            </a>
            <a
              href="https://github.com/yourusername/simple-form-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline-block text-white"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="py-12">
        <section id="hero" className="container mx-auto text-center mb-6">
          <div className="mb-8">
            <img
              src="/illustration.png"
              alt="Illustration"
              className="mx-auto w-1/4 h-1/3 rounded-xl"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Effortlessly Create HTML Forms
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Generate and customize forms with just a few clicks. Copy and paste
            directly into your projects.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Try It Now
          </button>
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
              </div>
            </div>
          </section>
        </section>

        {/* Include other sections like Demo, How It Works, Code Example, etc. */}
      </main>

      <footer className="bg-gray-900 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Simple Form Generator. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-white ml-4">
              Contact
            </a>
            <a href="#" className="text-white ml-4">
              Privacy Policy
            </a>
            <a href="#" className="text-white ml-4">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
