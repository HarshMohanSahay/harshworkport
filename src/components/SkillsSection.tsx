import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Terminal, Cpu, Palette } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 90, color: "bg-blue-500" },
        { name: "Python", level: 85, color: "bg-green-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe, 
      skills: [
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "React", level: 75, color: "bg-blue-400" },
        { name: "Node.js", level: 70, color: "bg-green-600" },
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Terminal,
      skills: [
        { name: "Git/GitHub", level: 85, color: "bg-purple-500" },
        { name: "Machine Learning", level: 75, color: "bg-red-500" },
        { name: "Databases", level: 70, color: "bg-indigo-500" },
      ]
    }
  ];

  const technicalSkills = [
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "CNN, Image Recognition, Data Analysis",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "APIs, Databases, Server Management",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "Frontend Development",
      description: "Responsive Design, User Experience",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4 tracking-wider uppercase">My Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks, constantly learning and adapting to new tools and methodologies.
          </p>
        </div>

        {/* Technical Skills Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {technicalSkills.map((skill, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card/50 border-border/50 hover:bg-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-muted"
                        />
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;