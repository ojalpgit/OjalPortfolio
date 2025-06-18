import { useEffect, useRef } from "react";
import CursorRipple from "./CursorRipple";
import IslandNav from "./IslandNav";

export default function Portfolio() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".section-fade");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Automation Tool",
      description: "A powerful Python-based automation script that streamlines repetitive web tasks and data collection.",
      technologies: ["Python", "Selenium"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "React Game Platform",
      description: "An interactive gaming platform built with React, featuring multiple mini-games and real-time scoring.",
      technologies: ["React", "JavaScript"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Open Source CLI Tool",
      description: "A command-line utility that helps developers manage project dependencies and automate build processes.",
      technologies: ["Node.js", "CLI"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const skills = [
    { name: "Python", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "HTML/CSS", level: 95, color: "bg-green-500" }
  ];

  const technologies = [
    { name: "React", icon: "fab fa-react", color: "text-blue-500" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" },
    { name: "MongoDB", icon: "fas fa-database", color: "text-purple-500" },
    { name: "Docker", icon: "fab fa-docker", color: "text-blue-600" },
    { name: "AWS", icon: "fas fa-cloud", color: "text-gray-500" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      {/* Grid Background */}
      <div className="grid-background"></div>
      
      {/* Cursor Ripple Effect */}
      <CursorRipple />
      
      {/* Island Navigation */}
      <IslandNav />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center section-fade">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
            swapnil gore
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            20-year-old developer from India
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:swapnil@example.com" 
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              <i className="fas fa-envelope mr-2"></i>mail
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              <i className="fab fa-github mr-2"></i>github
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              <i className="fab fa-linkedin mr-2"></i>linkedin
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">about</h2>
          <div className="text-lg md:text-xl leading-relaxed space-y-6 text-muted-foreground">
            <p>
              Hey there! I'm a passionate young developer with an insatiable curiosity for technology and coding. 
              My journey started when I discovered the magic of turning ideas into digital reality through programming.
            </p>
            <p>
              I love diving deep into automation scripts that make life easier, building engaging web applications, 
              and experimenting with game development. The open-source community has been my playground and school, 
              where I've learned from amazing developers worldwide.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new programming languages, contributing to open-source projects, 
              or collaborating with fellow developers on exciting challenges. I believe in the power of technology to 
              solve real-world problems and create meaningful experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
                <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
                  <i className="fas fa-external-link-alt mr-2"></i>view project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <i className={`${tech.icon} ${tech.color}`}></i>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto section-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">setup</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-laptop-code mr-3 text-blue-500"></i>Development
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• VS Code with custom themes</li>
                <li>• JetBrains Mono font</li>
                <li>• Git with custom aliases</li>
                <li>• Terminal with zsh + oh-my-zsh</li>
                <li>• Various browser dev tools</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-desktop mr-3 text-green-500"></i>Hardware
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom built PC</li>
                <li>• Dual monitor setup</li>
                <li>• Mechanical keyboard</li>
                <li>• High-DPI mouse</li>
                <li>• Blue light filtering glasses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto section-fade text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">contact</h2>
          <p className="text-xl mb-12 text-muted-foreground">
            Let's build something amazing together!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="mailto:swapnil@example.com" 
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-envelope mr-3"></i>
              Send me an email
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fab fa-github mr-3"></i>
              Check out my GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-muted-foreground">
        <p>&copy; 2024 Swapnil Gore. Built with passion and lots of coffee ☕</p>
      </footer>
    </div>
  );
}
