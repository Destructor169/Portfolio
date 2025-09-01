import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, MapPin, ChevronRight, Play } from 'lucide-react';
import { personalInfo, featuredProjects } from '../data/mock';

const Hero = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const featured = featuredProjects[currentProject];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={featured.backgroundImage}
          alt={featured.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Personal Info Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E50914] flex items-center justify-center">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{personalInfo.name}</h1>
                  <p className="text-gray-300 text-sm">{personalInfo.title}</p>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {personalInfo.subtitle}
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Featured Project Section */}
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-[#E50914] text-white hover:bg-[#E50914]/90">
                  Featured Research
                </Badge>
                <span className="text-gray-400 text-sm">• {featured.year} • {featured.duration}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {featured.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                {featured.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-gray-300 border-gray-600">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">Impact:</p>
                <p className="text-[#E50914] font-medium">{featured.impact}</p>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="bg-[#E50914] hover:bg-[#E50914]/90 text-white font-medium px-6"
                  asChild
                >
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-white hover:bg-gray-800"
                  asChild
                >
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800"
                asChild
              >
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800"
                asChild
              >
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800"
                asChild
              >
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentProject ? 'bg-[#E50914]' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;