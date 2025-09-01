import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Briefcase, 
  MapPin, 
  Calendar,
  Users,
  GraduationCap,
  Clock
} from 'lucide-react';
import { workExperience } from '../data/mock';

const ExperienceCard = ({ experience }) => (
  <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 group">
    <CardHeader className="pb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#E50914]/10 rounded-lg group-hover:bg-[#E50914]/20 transition-colors">
            <Briefcase className="w-6 h-6 text-[#E50914]" />
          </div>
          <div>
            <CardTitle className="text-xl text-white group-hover:text-[#E50914] transition-colors">
              {experience.title}
            </CardTitle>
            <p className="text-lg text-gray-300 font-medium">
              {experience.company}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <Badge 
            variant="outline" 
            className={`${
              experience.current 
                ? 'border-green-500 text-green-400 bg-green-500/10' 
                : 'border-gray-600 text-gray-400'
            }`}
          >
            {experience.current ? 'Current' : 'Completed'}
          </Badge>
          <Badge variant="outline" className="text-gray-300 border-gray-600">
            {experience.type}
          </Badge>
        </div>
      </div>
    </CardHeader>
    
    <CardContent className="space-y-4">
      {/* Duration and Location */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{experience.duration}</span>
          <span>•</span>
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{experience.location}</span>
          <span>•</span>
          <span>{experience.workType}</span>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-300 leading-relaxed">
        {experience.description}
      </p>
      
      {/* Skills */}
      <div className="space-y-2">
        <p className="text-sm text-gray-400 flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          Key Skills:
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-gray-300 border-gray-600 hover:border-[#E50914] hover:text-[#E50914] transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Experience = () => {
  return (
    <div className="py-16 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Work Experience & Teaching
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {workExperience.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#E50914]/10 via-[#E50914]/5 to-transparent rounded-lg p-8 border border-gray-800 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Teaching Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E50914] mb-2">400+</div>
                <div className="text-gray-300">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E50914] mb-2">2</div>
                <div className="text-gray-300">Active Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E50914] mb-2">9</div>
                <div className="text-gray-300">Months Experience</div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-300 mb-4">
                Passionate about education and knowledge sharing, actively contributing to student success through hands-on mentoring and technical guidance.
              </p>
              <div className="flex justify-center gap-4">
                <Badge className="bg-blue-600 text-white px-4 py-2">
                  Technical Mentoring
                </Badge>
                <Badge className="bg-green-600 text-white px-4 py-2">
                  Live Coding Demos
                </Badge>
                <Badge className="bg-purple-600 text-white px-4 py-2">
                  Assignment Evaluation
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;