
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";

// Email JS credentials
const EMAIL_SERVICE_ID = 'service_ptqj94s';
const EMAIL_TEMPLATE_ID = 'template_gqx6jqv';
const EMAIL_PUBLIC_KEY = 'fhtwbeYOP5_4EmSuM';

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

// Type definition for form data
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize react-hook-form
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        EMAIL_PUBLIC_KEY
      );
      
      if (result.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or reach out directly via email.",
        variant: "destructive",
      });
      console.error("Email error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your name"
                            className="bg-portfolio-dark border-border"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-portfolio-dark border-border"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Your message here..."
                            rows={5}
                            className="bg-portfolio-dark border-border"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
