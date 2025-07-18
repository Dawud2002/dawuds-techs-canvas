import { Network, Code, Palette, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const profileImage = '/lovable-uploads/eb48351d-4946-43a3-9cd2-e2b5830900a4.png';

const About = () => {
  const skills = [
    { name: 'Computer Networking', icon: Network, level: 95 },
    { name: 'HTML/CSS', icon: Code, level: 90 },
    { name: 'WordPress', icon: Code, level: 85 },
    { name: 'Adobe Photoshop', icon: Palette, level: 88 },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1 fade-in">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 scale-110"></div>
                <img
                  src={profileImage}
                  alt="Dawud Salifu - Tech Solutions Expert"
                  className="relative w-full h-auto rounded-full shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 slide-up">
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  I'm Dawud, a Koforidua-based tech specialist passionate about building secure networks, 
                  functional websites, and eye-catching designs. With a deep understanding of modern 
                  technology and a commitment to excellence, I help businesses thrive in the digital landscape.
                </p>
                
                <p>
                  My journey in technology began with a fascination for how systems connect and communicate. 
                  Today, I combine technical expertise with creative vision to deliver comprehensive 
                  solutions that not only meet but exceed client expectations.
                </p>
                
                <p>
                  When I'm not crafting digital solutions, you'll find me exploring the latest tech trends, 
                  contributing to the local tech community in Koforidua, or mentoring aspiring developers 
                  and designers who share my passion for innovation.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-8">
                  Core Skills & Expertise
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                            <skill.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{skill.name}</h4>
                            <div className="w-full bg-secondary rounded-full h-2 mt-2">
                              <div 
                                className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;