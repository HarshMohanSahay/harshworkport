import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code, Users, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive and modern web applications using latest technologies and best practices.",
      features: ["React & JavaScript", "Responsive Design", "Performance Optimization"],
      highlighted: false
    },
    {
      icon: Users,
      title: "Job Portal Development",
      description: "I design and develop functional and user-friendly job portals connecting employers and job seekers.",
      features: ["User Management", "Search & Filtering", "Application Tracking"],
      highlighted: true
    },
    {
      icon: Code,
      title: "Software Solutions",
      description: "Building efficient software solutions with clean code and robust architecture for various domains.",
      features: ["Custom Applications", "API Development", "Database Design"],
      highlighted: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 tracking-wider uppercase">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expertise Service! Let's <span className="text-gradient">check it out</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Offering comprehensive software development services with a focus on quality, performance, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group transition-all duration-300 hover:scale-105 ${
                service.highlighted 
                  ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 glow-primary' 
                  : 'bg-card/50 border-border/50 hover:bg-card'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  service.highlighted 
                    ? 'bg-gradient-to-br from-primary to-accent text-white' 
                    : 'bg-primary/20 text-primary'
                }`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.highlighted ? "default" : "outline"}
                  className={`w-full group/btn ${
                    service.highlighted 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                  } transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-xl glow-accent transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;