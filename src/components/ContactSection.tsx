import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Initialize EmailJS
  emailjs.init("b9OU85ZmatXgBMb5l");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "harshmohansahay@gmail.com",
      link: "mailto:harshmohansahay@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "NITK Surathkal",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      username: "@HarshMohanSahay",
      url: "https://github.com/HarshMohanSahay",
      color: "hover:text-white hover:bg-gray-800"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      username: "Harsh Mohan Sahay",
      url: "https://www.linkedin.com/in/harsh-mohan-sahay-06989a201",
      color: "hover:text-white hover:bg-blue-600"
    },
    {
      icon: Code,
      title: "LeetCode",
      username: "@mohan_sahay_99",
      url: "https://leetcode.com/u/mohan_sahay_99/",
      color: "hover:text-white hover:bg-orange-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Message',
        message: formData.message,
        to_name: 'Harsh Mohan Sahay',
      };

      await emailjs.send(
        'service_m4dyw2v',
        'template_s5iabr7',
        templateParams
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 tracking-wider uppercase">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Get in touch and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:bg-card transition-all duration-300">
                  <CardContent className="p-6">
                    <a 
                      href={info.link}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                          {info.title}
                        </h4>
                        <p className="font-medium group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-border transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    <div>
                      <p className="font-medium">{social.title}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border/50 hover:bg-card transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl glow-primary transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;