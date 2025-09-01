import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Calendar, Users, ChevronDown } from 'lucide-react';

const ProjectCard = ({ project, isLarge = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`group relative overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer ${
        isLarge ? 'aspect-[16/10]' : 'aspect-[16/12]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.backgroundImage}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-70'
        }`} />
      </div>

      <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end">
        {/* Project Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge 
            variant="secondary" 
            className={`${
              project.category === 'Research' ? 'bg-[#E50914] text-white' :
              project.category === 'NLP' ? 'bg-blue-600 text-white' :
              project.category === 'Computer Vision' ? 'bg-purple-600 text-white' :
              'bg-green-600 text-white'
            } font-medium`}
          >
            {project.category}
          </Badge>
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4">
            <Badge 
              variant="outline" 
              className={`${
                project.status === 'Complete' ? 'border-green-500 text-green-400' :
                project.status === 'Published' ? 'border-yellow-500 text-yellow-400' :
                project.status === 'Deployed' ? 'border-blue-500 text-blue-400' :
                'border-gray-500 text-gray-400'
              } bg-black/50`}
            >
              {project.status}
            </Badge>
          </div>
        )}

        {/* Content */}
        <div className={`transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
          {/* Year */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
            {project.collaborators && (
              <>
                <span>•</span>
                <Users className="w-4 h-4" />
                <span>{project.collaborators[0]}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-bold text-white mb-2 group-hover:text-[#E50914] transition-colors ${
            isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-gray-300 mb-4 leading-relaxed ${
            isLarge ? 'text-base md:text-lg' : 'text-sm md:text-base'
          }`}>
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, isLarge ? 6 : 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs text-gray-300 border-gray-600 bg-black/30">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > (isLarge ? 6 : 4) && (
              <Badge variant="outline" className="text-xs text-gray-400 border-gray-600 bg-black/30">
                +{project.technologies.length - (isLarge ? 6 : 4)}
              </Badge>
            )}
          </div>

          {/* Impact (for research projects) */}
          {project.impact && (
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-1">Impact:</p>
              <p className="text-sm text-[#E50914] font-medium">{project.impact}</p>
            </div>
          )}

          {/* Actions */}
          <div className={`flex gap-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            {project.github && (
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button 
                size="sm" 
                className="bg-[#E50914] hover:bg-[#E50914]/90 text-white"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectSection = ({ title, projects, showAll = false, showTwoBlocks = false }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const itemsPerView = showTwoBlocks ? 2 : 3;
  const maxScroll = Math.max(0, projects.length - itemsPerView);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left' && scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    } else if (direction === 'right' && scrollPosition < maxScroll) {
      setScrollPosition(scrollPosition + 1);
    }
  };

  // Add scroll wheel support
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current?.contains(e.target)) {
        e.preventDefault();
        if (e.deltaY > 0 && scrollPosition < maxScroll) {
          setScrollPosition(scrollPosition + 1);
        } else if (e.deltaY < 0 && scrollPosition > 0) {
          setScrollPosition(scrollPosition - 1);
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [scrollPosition, maxScroll]);

  if (showAll) {
    return (
      <div className="py-16 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          
          {/* Navigation Controls */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('left')}
              disabled={scrollPosition === 0}
              className="border-gray-600 text-white hover:bg-gray-800 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('right')}
              disabled={scrollPosition >= maxScroll}
              className="border-gray-600 text-white hover:bg-gray-800 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300 ease-out"
            style={{ 
              transform: showTwoBlocks 
                ? `translateX(-${scrollPosition * 50}%)` 
                : `translateX(-${scrollPosition * 33.333}%)`
            }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex-none ${
                  showTwoBlocks 
                    ? 'w-full md:w-1/2' 
                    : 'w-full md:w-1/2 lg:w-1/3'
                }`}
              >
                <ProjectCard 
                  project={project} 
                  isLarge={showTwoBlocks || (index === 0 && scrollPosition === 0)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
            View All {title}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;