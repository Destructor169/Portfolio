import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar,
  Award,
  ExternalLink,
  Download
} from 'lucide-react';
import { personalInfo, certifications } from '../data/mock';

const CertificationCard = ({ cert }) => (
  <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group">
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-4">
        <Award className="w-6 h-6 text-[#E50914] flex-shrink-0 mt-1" />
        <Badge variant="outline" className="text-gray-300 border-gray-600 text-xs">
          {cert.date}
        </Badge>
      </div>
      
      <h3 className="font-bold text-white mb-2 text-lg leading-tight group-hover:text-[#E50914] transition-colors">
        {cert.title}
      </h3>
      
      <p className="text-gray-400 mb-4 text-sm">
        {cert.issuer}
      </p>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {cert.skills.slice(0, 3).map((skill) => (
          <Badge key={skill} variant="outline" className="text-xs text-gray-300 border-gray-600">
            {skill}
          </Badge>
        ))}
        {cert.skills.length > 3 && (
          <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
            +{cert.skills.length - 3}
          </Badge>
        )}
      </div>
      
      <div className="space-y-1">
        <div className="text-xs text-gray-500">
          ID: {cert.credentialId}
        </div>
        {cert.credentialUrl && (
          <Button 
            size="sm" 
            variant="outline" 
            className="w-full border-gray-600 text-white hover:bg-gray-800 text-xs"
            asChild
          >
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-1" />
              View Certificate
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const Contact = () => {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Certifications & Credentials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Let's Connect
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm passionate about AI/ML research and always interested in discussing 
                  innovative projects, collaboration opportunities, and the latest developments 
                  in artificial intelligence and natural language processing.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-[#E50914] transition-colors font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">{personalInfo.location}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Availability</p>
                    <p className="text-white font-medium">Open to opportunities</p>
                    <Badge className="bg-green-500/20 text-green-400 mt-1">Available</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="space-y-6">
              {/* GitHub Card */}
              <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Github className="w-8 h-8 text-white" />
                      <div>
                        <h3 className="text-lg font-bold text-white">GitHub</h3>
                        <p className="text-gray-400 text-sm">View my code & projects</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    Explore my open-source contributions, research projects, and code repositories.
                  </p>
                  
                  <Button 
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                    asChild
                  >
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Visit GitHub Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* LinkedIn Card */}
              <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-8 h-8 text-blue-400" />
                      <div>
                        <h3 className="text-lg font-bold text-white">LinkedIn</h3>
                        <p className="text-gray-400 text-sm">Professional network</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    Connect with me professionally and stay updated with my career journey.
                  </p>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Resume Card */}
              <Card className="bg-gradient-to-br from-[#E50914]/10 to-transparent border-[#E50914]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Download className="w-8 h-8 text-[#E50914]" />
                      <div>
                        <h3 className="text-lg font-bold text-white">Resume</h3>
                        <p className="text-gray-400 text-sm">Download my CV</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    Get a comprehensive overview of my skills, experience, and achievements.
                  </p>
                  
                  <Button className="w-full bg-[#E50914] hover:bg-[#E50914]/90 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Open to research collaborations, job opportunities, and interesting AI/ML projects.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Badge variant="outline" className="text-gray-300 border-gray-600">
                Research Collaboration
              </Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-600">
                Job Opportunities
              </Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-600">
                Mentorship
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;