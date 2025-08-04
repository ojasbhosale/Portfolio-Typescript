"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Database, Mic, BarChart3, Star, Sparkles, Code, Zap, Trophy, Target, Layers, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "NewsFlash AI: GenAI News Summarizer",
    description:
      "A full-stack AI-powered news application utilizing OpenAI GPT-3.5 for real-time news summarization and content generation.",
    image: "/projects/newsflashai.png?height=400&width=600",
    technologies: ["Nextjs", "Typescript", "OpenAI", "API Integration"],
    features: [
      "AI-powered real-time summarization",
      "GenAI API integration for NLP",
      "Responsive frontend UI",
      "Backend with secure endpoints",
    ],
    github: "https://github.com/ojasbhosale/NewsFlash-AI",
    demo: "https://newsflashai.netlify.app/",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    category: "GenAI",
    status: "Live",
    year: "2025"
  },
  {
    title: "Expenso: Full-Stack Expense Tracker App",
    description:
      "A responsive and fully functional expense management tool for tracking, visualizing, and managing expenses with dynamic charting and CRUD features.",
    image: "/projects/expenso.png?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Express.js"],
    features: [
      "Real-time expense tracking",
      "Interactive visual charts",
      "CRUD operations with secure backend",
      "Responsive and modern UI",
    ],
    github: "https://github.com/ojasbhosale/expenso-v2.git",
    demo: "https://expensov2.netlify.app/",
    icon: Mic,
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    category: "Full Stack",
    status: "Live",
    year: "2025"
  },
  {
    title: "AudibleScript: Text-Speech Conversion",
    description:
      "A browser-based application enabling seamless two-way conversion between text and speech using the Web Speech API, ideal for accessibility and productivity.",
    image: "/projects/a3.png?height=400&width=600",
    technologies: ["React.js", "JavaScript", "Web Speech API", "Chart.js"],
    features: [
      "Text-to-speech and speech-to-text",
      "User audio uploads supported",
      "Live transcription display",
      "Downloadable audio output",
    ],
    github: "https://github.com/ojasbhosale/AudibleScript_Text-Speech_Conversion.git",
    demo: "https://audible-script-ojasbhosale.netlify.app/",
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    category: "Frontend",
    status: "Live",
    year: "2024"
  },
]

const categoryColors = {
  "Full-Stack": "from-emerald-500 to-teal-500",
  "Frontend": "from-blue-500 to-cyan-500",
  "Backend": "from-orange-500 to-red-500",
  "Education": "from-violet-500 to-purple-500",
  "Mobile": "from-pink-500 to-rose-500"
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const ProjectIcon = project.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <Card className={`overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 ${
        isHovered ? 'transform scale-[1.02] shadow-2xl shadow-slate-900/10 dark:shadow-black/20' : 'shadow-xl shadow-slate-900/5 dark:shadow-black/10'
      }`}>
        
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Floating Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${project.color} rounded-full`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0],
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 300 - 150
                }}
                transition={{ 
                  duration: 2.5, 
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3 
                }}
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </div>
        )}

        <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Image Section */}
          <div className={`relative overflow-hidden ${!isEven ? "lg:col-start-2" : ""}`}>
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    {linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.1) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.1) 75%)}
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }} />
              </div>

              {/* Project Thumbnail */}
              <div className="absolute inset-0 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white shadow-lg`}
                >
                  {project.status}
                </motion.div>
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4">
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 dark:bg-white/80 text-white dark:text-slate-900 backdrop-blur-sm"
                >
                  {project.year}
                </motion.div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-black/10 dark:group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </div>

          {/* Content Section */}
          <div className={`relative p-8 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:col-start-1" : ""}`}>
            <CardHeader className="p-0 mb-8">
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="inline-flex items-center space-x-2 mb-4"
              >
                <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.bgGradient} border ${project.borderColor} backdrop-blur-sm`}>
                  <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.category}
                  </span>
                </div>
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                className="flex items-start space-x-4 mb-6"
              >
                <div className={`flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg ${
                  isHovered ? 'transform rotate-12 scale-110' : ''
                } transition-all duration-300`}>
                  <ProjectIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  <div className={`w-16 h-1 bg-gradient-to-r ${project.color} rounded-full`} />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
              >
                {project.description}
              </motion.p>
            </CardHeader>

            <CardContent className="p-0 space-y-8">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">Key Features</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature: string, featureIndex: number) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.7 + featureIndex * 0.1 }}
                      className="group/feature flex items-start space-x-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300`} />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.9 + techIndex * 0.1 }}
                    >
                      <Badge
                        variant="outline"
                        className={`${project.borderColor} hover:bg-gradient-to-r hover:${project.bgGradient} transition-all duration-300 cursor-pointer`}
                      >
                        <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-semibold`}>
                          {tech}
                        </span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                className="flex space-x-4 pt-6"
              >
                <Button 
                  asChild 
                  className={`group/btn bg-gradient-to-r ${project.color} hover:shadow-xl hover:shadow-slate-900/25 dark:hover:shadow-black/25 text-white border-0 transition-all duration-300 hover:scale-105`}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Code
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="group/btn border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </div>
        </div>

        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} 
             style={{ clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)' }} />
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/30"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(139, 92, 246, 0.15) 0%, 
                transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(236, 72, 153, 0.1) 0%, 
                transparent 50%)
            `
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-20 ${
                i % 5 === 0 ? 'bg-gradient-to-r from-violet-400 to-purple-400' :
                i % 5 === 1 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                i % 5 === 2 ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                i % 5 === 3 ? 'bg-gradient-to-r from-orange-400 to-red-400' :
                'bg-gradient-to-r from-pink-400 to-rose-400'
              }`}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8 + (i % 4),
                repeat: Infinity,
                delay: i * 1.2
              }}
              style={{
                left: `${5 + (i * 8)}%`,
                top: `${10 + (i * 7)}%`,
                width: `${12 + (i * 2)}px`,
                height: `${12 + (i * 2)}px`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Featured Work</span>
            <Sparkles className="w-4 h-4 text-violet-500" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6 rounded-full" />
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent work and personal projects that demonstrate my technical skills, 
            creativity, and passion for building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 lg:space-y-24 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full mb-6">
              <Globe className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Explore More</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Want to see more of my work?
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <a href="https://github.com/ojasbhosale" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                View All Projects
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}