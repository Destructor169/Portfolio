import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Toaster } from "./components/ui/toaster";
import { nlpProjects, courseProjects } from "./data/mock";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <ProjectSection 
        title="NLP & Language Models" 
        projects={nlpProjects}
      />
      <ProjectSection 
        title="Course Projects" 
        projects={courseProjects}
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
