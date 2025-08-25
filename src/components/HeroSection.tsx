import { Button } from "@/components/ui/button";
import harshProfile from "@/assets/harsh-profile-updated.jpg";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
              <img 
                src={harshProfile} 
                alt="Harsh Mohan Sahay"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center glow-accent">
              <div className="w-6 h-6 bg-background rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Harsh Mohan Sahay</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Passionate Software Developer | Problem Solver | Tech Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Science student with expertise in C++, Python, and full-stack web technologies.
            Building efficient solutions and contributing to meaningful projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl glow-primary transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('portfolio')}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/HarshMohanSahay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:glow-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/harsh-mohan-sahay-06989a201" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:glow-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:harshmohansahay@gmail.com"
              className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:glow-accent"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;