import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Toaster } from "./components/ui/toaster";
import { personalProjects, courseProjects } from "./data/mock";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Experience />
      <ProjectSection 
        title="Personal Projects" 
        projects={personalProjects}
        showTwoBlocks={true}
      />
      <ProjectSection 
        title="Course Projects" 
        projects={courseProjects}
        showTwoBlocks={true}
      />
      <Skills />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;