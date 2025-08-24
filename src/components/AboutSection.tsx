import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Download, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Rajkiya Engineering College Bijnor",
      year: "2024",
      status: "Completed"
    },
    {
      degree: "Intermediate Education",
      institution: "Pt. Deendayal Upadhyay Inter College",
      year: "2020",
      status: "Completed"
    },
    {
      degree: "High School",
      institution: "Pt. Deendayal Upadhyay Inter College", 
      year: "2018",
      status: "Completed"
    }
  ];

  const achievements = [
    {
      title: "5k+ Complete Projects",
      description: "Successfully delivered multiple software solutions and web applications"
    },
    {
      title: "8+ Years of Experience",
      description: "Strong foundation in programming and problem-solving across various technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 tracking-wider uppercase">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designing Solutions, Not <br />
            <span className="text-gradient">Just Visuals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a Computer Science student and passionate software developer with a strong foundation in programming, problem-solving, and building efficient solutions. I aim to grow as a professional while contributing to meaningful projects.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With expertise in C++, Python, and full-stack web technologies, I focus on creating innovative solutions that make a real impact. My experience includes machine learning projects and web development.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-xl glow-accent transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Right side - Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Education & Experience</h3>
            
            {/* Work Experience */}
            <Card className="bg-card/50 border-border/50 hover:bg-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Machine Learning Intern</h4>
                    <p className="text-accent font-medium mb-2">Acmagrade</p>
                    <p className="text-muted-foreground text-sm mb-2">3-Month Internship</p>
                    <p className="text-muted-foreground">
                      Worked on machine learning projects, developing models for data analysis and pattern recognition.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Timeline */}
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:bg-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-accent font-medium">{edu.year}</span>
                          <span className="px-3 py-1 bg-success/20 text-success text-sm rounded-full">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;