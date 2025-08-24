import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "harsh.sahay@example.com",
      link: "mailto:harsh.sahay@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 1234567890",
      link: "tel:+911234567890"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bijnor, Uttar Pradesh, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      username: "@harshsahay",
      url: "https://github.com",
      color: "hover:text-white hover:bg-gray-800"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      username: "Harsh Mohan Sahay",
      url: "https://linkedin.com",
      color: "hover:text-white hover:bg-blue-600"
    },
    {
      icon: Code,
      title: "LeetCode",
      username: "@harshcoder",
      url: "https://leetcode.com",
      color: "hover:text-white hover:bg-orange-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
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

    // Simulate form submission
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
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl glow-primary transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
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