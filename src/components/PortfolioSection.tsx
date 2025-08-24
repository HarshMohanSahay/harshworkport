import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Youtube, Camera } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Recipe Recommendation System",
      description: "An intelligent system that recommends recipes based on available ingredients, featuring image-based recipe recognition using Convolutional Neural Networks (CNNs) and YouTube integration for cooking tutorials.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Machine Learning", "CNN", "Computer Vision", "YouTube API"],
      features: [
        "Image-based ingredient recognition",
        "Smart recipe matching algorithm", 
        "YouTube tutorial integration",
        "Nutritional information display",
        "User preference learning"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "Machine Learning"
    },
    {
      title: "Job Portal Website",
      description: "A comprehensive job portal platform connecting employers and job seekers with advanced search functionality, application tracking, and user management systems.",
      image: "/api/placeholder/400/250", 
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
      features: [
        "Advanced job search & filtering",
        "User profile management",
        "Application tracking system",
        "Employer dashboard",
        "Resume upload & parsing"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "Web Development"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing projects, skills, and experience with a focus on user experience and performance optimization.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Dark theme",
        "Smooth animations",
        "SEO optimized",
        "Contact form integration"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "Frontend"
    }
  ];

  const getIconByCategory = (category: string) => {
    switch (category) {
      case "Machine Learning":
        return Brain;
      case "Web Development":
        return ExternalLink;
      case "Frontend":
        return Camera;
      default:
        return ExternalLink;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = getIconByCategory(project.category);
            return (
              <Card 
                key={index} 
                className={`group bg-card/50 border-border/50 hover:bg-card transition-all duration-500 overflow-hidden ${
                  index % 2 === 0 ? 'hover:glow-primary' : 'hover:glow-accent'
                }`}
              >
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative overflow-hidden bg-gradient-to-br ${
                      index % 2 === 0 ? 'from-primary/20 to-accent/20' : 'from-accent/20 to-primary/20'
                    } ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <div className="aspect-video flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Project Content */}
                    <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge 
                          variant="secondary" 
                          className={`${
                            index % 2 === 0 ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                          } border-0`}
                        >
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                index % 2 === 0 ? 'bg-primary' : 'bg-accent'
                              }`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline" 
                              className="text-xs border-border/50 hover:border-primary/50 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-border/50 hover:border-primary hover:text-primary transition-all duration-300"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button 
                          size="sm"
                          className={`${
                            index % 2 === 0 
                              ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                              : 'bg-accent hover:bg-accent/90 text-accent-foreground'
                          } transition-all duration-300 hover:scale-105`}
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;