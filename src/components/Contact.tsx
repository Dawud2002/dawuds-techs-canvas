import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree.io for form submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Dawudsalifu893@gmail.com",
      link: "mailto:Dawudsalifu893@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0599012288",
      link: "tel:0599012288"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Koforidua, Ghana",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/dawud-salifu"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/dawud_salifu"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/dawud-salifu"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-2 hover:border-accent/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-bold text-primary">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-2 focus:border-accent resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="fade-in">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors duration-300">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-accent transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fade-in">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                  Follow Me
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                    >
                      <social.icon className="h-6 w-6 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="fade-in">
                <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
                  <CardContent className="p-6">
                    <h4 className="font-heading text-xl font-bold mb-2">
                      Ready to Start?
                    </h4>
                    <p className="mb-4 text-primary-foreground/90">
                      Let's discuss your project and how I can help you achieve your goals.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="font-semibold"
                      onClick={() => window.open('mailto:Dawudsalifu893@gmail.com', '_blank')}
                    >
                      Schedule a Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;