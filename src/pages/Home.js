import React from "react";
import Navbar from "../components/molecules/Navbar";
import MainContent from "../components/molecules/MainContent";
import Footer from "../components/molecules/Footer";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br relative from-black to-cyan-900 min-h-screen text-white">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
