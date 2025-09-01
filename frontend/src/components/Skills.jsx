import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { skills, stats } from '../data/mock';
import { 
  Code2, 
  Brain, 
  MessageSquare, 
  Database, 
  Cloud, 
  Globe,
  Star,
  GitFork,
  Trophy,
  Calendar
} from 'lucide-react';

const iconMap = {
  "Programming Languages": Code2,
  "ML/DL Frameworks": Brain,
  "NLP Libraries": MessageSquare,
  "Data Tools": Database,
  "Cloud & DevOps": Cloud,
  "Web Technologies": Globe
};

const StatCard = ({ icon: Icon, label, value, color = "text-[#E50914]" }) => (
  <div className="text-center">
    <Icon className={`w-6 h-6 mx-auto mb-2 ${color}`} />
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

const Skills = () => {
  return (
    <div className="py-16 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Portfolio Overview
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <StatCard 
              icon={Code2} 
              label="Total Projects" 
              value={stats.totalProjects}
              color="text-[#E50914]"
            />
            <StatCard 
              icon={Trophy} 
              label="Research Papers" 
              value={stats.researchPapers}
              color="text-yellow-400"
            />
            <StatCard 
              icon={Star} 
              label="Certifications" 
              value={stats.certifications}
              color="text-blue-400"
            />
            <StatCard 
              icon={Calendar} 
              label="Years Experience" 
              value={`${stats.yearsExperience}+`}
              color="text-green-400"
            />
            <StatCard 
              icon={Star} 
              label="GitHub Stars" 
              value={stats.githubStars}
              color="text-purple-400"
            />
            <StatCard 
              icon={GitFork} 
              label="Contributions" 
              value={`${stats.contributions}+`}
              color="text-orange-400"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => {
              const Icon = iconMap[category] || Code2;
              
              return (
                <Card key={category} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-white">
                      <div className="p-2 bg-[#E50914]/10 rounded-lg">
                        <Icon className="w-5 h-5 text-[#E50914]" />
                      </div>
                      <span className="text-lg">{category}</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-gray-300 border-gray-600 hover:border-[#E50914] hover:text-[#E50914] transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#E50914]/10 via-[#E50914]/5 to-transparent rounded-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities in AI/ML research, 
              NLP projects, and innovative technology solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-[#E50914] text-white px-4 py-2 text-sm">
                Available for Research Collaboration
              </Badge>
              <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">
                Open to New Opportunities
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;