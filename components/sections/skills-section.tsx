"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion"
import { Code, Database, Cloud, Wrench, Star, Sparkles, TrendingUp, Award, Target, Zap, Globe, Layers, Settings, Rocket } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "C++", level: 80, icon: "⚡" },
      { name: "SQL", level: 75, icon: "🗃️" },
      { name: "HTML/CSS", level: 95, icon: "🎨" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    color: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚀" },
      { name: "Chart.js", level: 75, icon: "📊" },
      { name: "Material-UI", level: 70, icon: "🎯" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Settings,
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Git", level: 85, icon: "📝" },
      { name: "GitHub Actions", level: 80, icon: "🔄" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "Figma", level: 70, icon: "🎨" },
      { name: "MongoDB Atlas", level: 75, icon: "🍃" },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "AWS", level: 75, icon: "☁️" },
      { name: "Netlify", level: 80, icon: "🌐" },
      { name: "CI/CD", level: 75, icon: "🔄" },
      { name: "Docker", level: 65, icon: "🐳" },
      { name: "PostgreSQL", level: 70, icon: "🐘" },
    ],
  },
]

const expertiseAreas = [
  { name: "Full-stack Development", icon: Globe, color: "from-blue-500 to-cyan-500" },
  { name: "API Development", icon: Database, color: "from-violet-500 to-purple-500" },
  { name: "Data Visualization", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
  { name: "Cloud Deployment", icon: Cloud, color: "from-orange-500 to-red-500" },
]

function SkillCard({ category, index }: { category: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        category.skills.forEach((_: any, skillIndex: number) => {
          setTimeout(() => {
            setAnimatedSkills(prev => [...prev, skillIndex]);
          }, skillIndex * 200);
        });
      }, index * 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, category.skills, index]);

  const CategoryIcon = category.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 h-full ${
        isHovered ? 'transform scale-105 shadow-2xl shadow-slate-900/10 dark:shadow-black/20' : 'shadow-xl shadow-slate-900/5 dark:shadow-black/10'
      }`}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Floating Particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${category.color} rounded-full`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1, 0],
                x: Math.random() * 300 - 150,
                y: Math.random() * 400 - 200
              }}
              transition={{ 
                duration: 2, 
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

      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`relative mx-auto w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${
            isHovered ? 'transform rotate-12 scale-110' : ''
          }`}>
            <CategoryIcon className="w-8 h-8 text-white" />
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {category.title}
          </h3>
          <div className={`w-12 h-0.5 bg-gradient-to-r ${category.color} mx-auto rounded-full`} />
        </div>

        {/* Skills */}
        <div className="space-y-5">
          {category.skills.map((skill: any, skillIndex: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={animatedSkills.includes(skillIndex) ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
              className="relative"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                  {skill.level >= 85 && (
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  )}
                </div>
              </div>
              
              {/* Enhanced Progress Bar */}
              <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                  initial={{ width: 0 }}
                  animate={animatedSkills.includes(skillIndex) ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                />
                {/* Shimmer Effect */}
                {animatedSkills.includes(skillIndex) && (
                  <motion.div
                    className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                    initial={{ x: -32 }}
                    animate={{ x: "300%" }}
                    transition={{ duration: 1.5, delay: skillIndex * 0.1 + 1, ease: "easeInOut" }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} 
           style={{ clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)' }} />
    </motion.div>
  );
}

export function SkillsSection() {
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
      id="skills" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(139, 92, 246, 0.15) 0%, 
                transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(59, 130, 246, 0.15) 0%, 
                transparent 50%)
            `
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-20 ${
                i % 4 === 0 ? 'bg-gradient-to-r from-violet-400 to-purple-400' :
                i % 4 === 1 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                i % 4 === 2 ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                'bg-gradient-to-r from-orange-400 to-red-400'
              }`}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                delay: i * 0.8
              }}
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${15 + (i * 8)}%`,
                width: `${15 + (i * 3)}px`,
                height: `${15 + (i * 3)}px`,
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
            backgroundSize: '60px 60px'
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
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Technical Expertise</span>
            <Sparkles className="w-4 h-4 text-violet-500" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Technical{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6 rounded-full" />
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise, showcasing proficiency levels across 
            various programming languages, frameworks, and modern development tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full mb-4">
                <Award className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Core Competencies</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Key Expertise Areas
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {expertiseAreas.map((area, index) => {
                const AreaIcon = area.icon;
                return (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-6 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <AreaIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">
                      {area.name}
                    </h4>
                    
                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
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