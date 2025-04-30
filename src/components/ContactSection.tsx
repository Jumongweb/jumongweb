
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const contactInfo = [
  { 
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "lawaltoheeb36@gmail.com",
    link: "mailto:lawaltoheeb36@gmail.com"
  },
  { 
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "+234 816 967 9887",
    link: "tel:+2348169679887"
  },
  { 
    icon: <MapPin className="w-5 h-5" />,
    title: "Address",
    value: "314 Herbert Marcauley way, Sabo Yaba, Lagos, Nigeria",
    link: "https://maps.google.com/?q=314+Herbert+Marcauley+way,+Sabo+Yaba,+Lagos,+Nigeria"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-portfolio-navy/30 py-24">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mt-4">
          Have a project in mind or just want to chat? Feel free to reach out.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="animate-fade-in">
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a 
                  href={item.link} 
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-portfolio-navy flex items-center justify-center group-hover:bg-primary transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium mb-4">Connect on social media</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Junongweb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-portfolio-navy flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/lawal-toheeb-008b7b207" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-portfolio-navy flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <Card className="animate-fade-in animate-delay-200">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-portfolio-dark border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-portfolio-dark border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    className="bg-portfolio-dark border-border"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
