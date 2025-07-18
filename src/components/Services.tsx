import { Network, Globe, Palette, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Computer Networking",
      description: "Comprehensive networking solutions for businesses of all sizes",
      features: [
        "Network Design & Implementation",
        "Security Configuration",
        "Performance Optimization",
        "24/7 Monitoring & Support",
        "Troubleshooting & Maintenance"
      ],
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that drive results",
      features: [
        "Custom Website Development",
        "WordPress Solutions",
        "E-commerce Platforms",
        "Mobile-Responsive Design",
        "SEO Optimization"
      ],
      color: "text-green-600"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Stunning visual identity and marketing materials",
      features: [
        "Logo & Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Digital Illustrations"
      ],
      color: "text-accent"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              My Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tech solutions tailored to help your business succeed in the digital world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/20"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-accent/10 transition-all duration-300 w-20 h-20 flex items-center justify-center">
                    <service.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  
                  <CardTitle className="font-heading text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mt-2">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your business with professional tech solutions?
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;