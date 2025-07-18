import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import networkingImage from '@/assets/portfolio-networking.jpg';
import webdevImage from '@/assets/portfolio-webdev.jpg';
import designImage from '@/assets/portfolio-design.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Enterprise Network Infrastructure",
      category: "Networking",
      description: "Complete network overhaul for a 200+ employee company including security implementation, performance optimization, and 24/7 monitoring setup.",
      image: networkingImage,
      tags: ["Network Design", "Security", "Infrastructure"],
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Website Platform",
      category: "Web Development",
      description: "Modern, responsive e-commerce platform built with WordPress, featuring custom design, payment integration, and inventory management.",
      image: webdevImage,
      tags: ["WordPress", "E-commerce", "Responsive Design"],
      link: "#"
    },
    {
      id: 3,
      title: "Brand Identity & Marketing Suite",
      category: "Graphic Design",
      description: "Complete brand identity redesign including logo, business cards, brochures, and digital marketing materials for a local business.",
      image: designImage,
      tags: ["Branding", "Logo Design", "Print Design"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              My Portfolio
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of successful projects that demonstrate expertise across networking, web development, and graphic design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="portfolio-item group overflow-hidden border-0 shadow-lg hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing your project?
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;