"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, TrendingUp, Users, Code, Cloud, Award, Briefcase, Star, Sparkles, Zap, Target, Rocket, Building, ChevronRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Development Intern",
    company: "Faralpha Technologies",
    location: "Remote",
    duration: "Sept 2024 – Nov 2024",
    type: "Internship",
    achievements: [
      "Enhanced data extraction efficiency by 40% through optimized web scraping applications",
      "Reduced deployment time by 30% using GitHub Actions for CI/CD automation",
      "Developed REST APIs and integrated AWS for cloud-based deployments",
      "Collaborated with cross-functional teams to deliver scalable solutions",
    ],
    technologies: ["Python", "PostgreSQL", "GitHub Actions", "AWS"],
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    accentColor: "blue",
    highlights: [
      { metric: "40%", label: "Efficiency Gain", icon: TrendingUp },
      { metric: "30%", label: "Time Saved", icon: Rocket },
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Afame Technologies",
    location: "Remote",
    duration: "May 2024 – July 2024",
    type: "Internship",
    achievements: [
      "Delivered full-stack applications using React.js and Node.js, accelerating product delivery by 20%",
      "Developed a real-time dashboard, boosting team productivity by 25%",
      "Collaborated cross-functionally to design scalable, maintainable solutions",
      "Implemented responsive designs and optimized user experiences",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: Code,
    color: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    accentColor: "violet",
    highlights: [
      { metric: "20%", label: "Faster Delivery", icon: Target },
      { metric: "25%", label: "Productivity Boost", icon: TrendingUp },
    ]
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

function ExperienceCard({ experience, index }: { experience: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState<number[]>([]);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        experience.highlights.forEach((_: any, metricIndex: number) => {
          setTimeout(() => {
            setAnimatedMetrics(prev => [...prev, metricIndex]);
          }, metricIndex * 400);
        });
      }, index * 600);
      return () => clearTimeout(timer);
    }
  }, [isInView, experience.highlights, index]);

  const ExperienceIcon = experience.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="relative group"
    >
      {/* Connection Line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-6 top-full w-0.5 h-16 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600 z-0" />
      )}

      {/* Timeline Indicator */}
      <div className="absolute left-4 top-8 z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          className="relative"
        >
          <div className={`w-4 h-4 bg-gradient-to-r ${experience.color} rounded-full shadow-lg`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-full animate-ping opacity-20`} />
          </div>
        </motion.div>
      </div>

      {/* Main Card */}
      <div className="ml-12 relative">
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="group/card relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-500"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Animated Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${experience.bgGradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />
          
          {/* Premium Glow Effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${experience.color} rounded-2xl blur opacity-0 group-hover/card:opacity-20 transition-opacity duration-500`} />

          {/* Floating Orbs */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50]
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 1 
                  }}
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                />
              ))}
            </div>
          )}

          <div className="relative z-10">
            <CardHeader className="pb-4">
              {/* Header Section */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <motion.div 
                    className={`relative p-3 rounded-xl bg-gradient-to-br ${experience.color} shadow-lg`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExperienceIcon className="h-5 w-5 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-slate-900 dark:text-white text-xl font-bold mb-2 leading-tight">
                      {experience.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mb-3">
                      <Building className="h-4 w-4 text-slate-500 flex-shrink-0" />
                      <p className={`font-semibold text-base bg-gradient-to-r ${experience.color} bg-clip-text text-transparent truncate`}>
                        {experience.company}
                      </p>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`bg-gradient-to-r ${experience.bgGradient} border ${experience.borderColor} backdrop-blur-sm font-medium text-xs px-3 py-1 flex-shrink-0`}
                >
                  {experience.type}
                </Badge>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg backdrop-blur-sm">
                  <Calendar className="h-3.5 w-3.5 text-slate-500" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">{experience.duration}</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5 text-slate-500" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">{experience.location}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {experience.highlights.map((highlight: any, metricIndex: number) => {
                  const MetricIcon = highlight.icon;
                  return (
                    <motion.div
                      key={metricIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={animatedMetrics.includes(metricIndex) ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: metricIndex * 0.2 }}
                      className={`relative p-4 rounded-xl bg-gradient-to-br ${experience.bgGradient} border ${experience.borderColor} backdrop-blur-sm hover:shadow-lg transition-all duration-300 group/metric`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <MetricIcon className={`h-4 w-4 text-${experience.accentColor}-500`} />
                        <motion.span
                          className={`text-2xl font-bold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={animatedMetrics.includes(metricIndex) ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.8, delay: metricIndex * 0.2 + 0.3 }}
                        >
                          {highlight.metric}
                        </motion.span>
                      </div>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {highlight.label}
                      </p>
                      
                      {/* Hover Shine Effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover/metric:-translate-x-full" 
                           style={{ transition: 'transform 0.6s ease' }} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center mb-4">
                  <Award className="h-4 w-4 mr-2 text-amber-500" />
                  <h4 className="text-slate-900 dark:text-white font-semibold">Key Achievements</h4>
                </div>
                <div className="space-y-3">
                  {experience.achievements.map((achievement: string, achievementIndex: number) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group/achievement flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors duration-200"
                    >
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-200`} />
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {achievement}
                      </p>
                      <ChevronRight className="h-3 w-3 text-slate-400 opacity-0 group-hover/achievement:opacity-100 transition-opacity duration-200 flex-shrink-0 mt-1" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex items-center mb-4">
                  <Code className="h-4 w-4 mr-2 text-blue-500" />
                  <h4 className="text-slate-900 dark:text-white font-semibold">Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech: string, techIndex: number) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className={`border ${experience.borderColor} bg-gradient-to-r ${experience.bgGradient} backdrop-blur-sm hover:shadow-md transition-all duration-200 font-medium text-xs px-3 py-1`}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>

            {/* Subtle Corner Accent */}
            <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${experience.color} opacity-5 group-hover/card:opacity-10 transition-opacity duration-300`} 
                 style={{ clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)' }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
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

    const throttledMouseMove = throttle(handleMouseMove, 16);
    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Interactive Gradient */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(139, 92, 246, 0.15) 0%, 
                transparent 40%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(59, 130, 246, 0.15) 0%, 
                transparent 40%)
            `
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-10 ${
                i % 4 === 0 ? 'bg-gradient-to-r from-violet-400 to-purple-400' :
                i % 4 === 1 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                i % 4 === 2 ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                'bg-gradient-to-r from-cyan-400 to-blue-400'
              }`}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + (i % 4),
                repeat: Infinity,
                delay: i * 0.8
              }}
              style={{
                left: `${10 + (i * 11)}%`,
                top: `${15 + (i * 8)}%`,
                width: `${8 + (i * 1.5)}px`,
                height: `${8 + (i * 1.5)}px`,
              }}
            />
          ))}
        </div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Briefcase className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Professional Journey</span>
            <Sparkles className="w-4 h-4 text-violet-500" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Work{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6 rounded-full" />
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing my professional growth through impactful internships at leading tech companies
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>

        {/* Enhanced Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-gradient-to-r from-violet-500 to-purple-500" 
                   style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }} />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { value: "6+", label: "Months Experience", color: "from-blue-600 to-cyan-600", icon: Calendar },
                { value: "10+", label: "Projects Delivered", color: "from-violet-600 to-purple-600", icon: Rocket },
                { value: "40%", label: "Avg Efficiency Gain", color: "from-emerald-600 to-teal-600", icon: TrendingUp }
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <StatIcon className={`h-6 w-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Utility function for throttling
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}