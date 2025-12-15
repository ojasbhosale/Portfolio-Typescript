import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, ArrowDown, Star, Sparkles, Globe, Code, Rocket, ExternalLink, ChevronRight, Play, Zap, Trophy, Users, Heart } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const roles = [
    { text: "Software Developer", icon: Code, color: "from-blue-500 to-cyan-500" },
    { text: "Full-Stack Engineer", icon: Globe, color: "from-violet-500 to-purple-500" },
    { text: "Reactjs Expert", icon: Zap, color: "from-emerald-500 to-teal-500" },
    { text: "Node.js Developer", icon: Rocket, color: "from-orange-500 to-red-500" },
    { text: "UI/UX Enthusiast", icon: Heart, color: "from-pink-500 to-rose-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);

    // Typing animation
    const typingInterval = setInterval(() => {
      const currentWord = roles[currentWordIndex]?.text || '';
      setTypedText(prev => {
        if (prev.length < currentWord.length) {
          return currentWord.slice(0, prev.length + 1);
        } else {
          setTimeout(() => {
            setTypedText('');
            setCurrentWordIndex(prev => (prev + 1) % roles.length);
          }, 2000);
          return prev;
        }
      });
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(roleInterval);
      clearInterval(typingInterval);
    };
  }, [currentWordIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/ojasCV3.pdf";
    link.download = "Ojas_Bhosale_Resume.pdf";
    link.click();
  };

  const CurrentIcon = roles[currentRole]?.icon || Code;

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30 pt-20"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Mesh */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(147, 51, 234, 0.15) 0%, 
                transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(59, 130, 246, 0.15) 0%, 
                transparent 50%),
              linear-gradient(135deg, 
                rgba(147, 51, 234, 0.05) 0%, 
                rgba(59, 130, 246, 0.05) 25%, 
                rgba(16, 185, 129, 0.05) 50%, 
                rgba(236, 72, 153, 0.05) 75%, 
                rgba(251, 146, 60, 0.05) 100%)
            `
          }}
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 animate-float ${
                i % 3 === 0 ? 'bg-gradient-to-r from-violet-400 to-purple-400' :
                i % 3 === 1 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                'bg-gradient-to-r from-emerald-400 to-teal-400'
              }`}
              style={{
                left: `${15 + (i * 7)}%`,
                top: `${10 + (i * 8)}%`,
                width: `${20 + (i * 5)}px`,
                height: `${20 + (i * 5)}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${6 + (i % 3)}s`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Parallax Elements */}
        <div 
          className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(45deg)` }}
        />
        <div 
          className="absolute bottom-32 right-[15%] w-48 h-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.3}px)`, animationDelay: '1s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full mb-6 group hover:scale-105 transition-all duration-300">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Available for opportunities</span>
            <Sparkles className="w-4 h-4 text-emerald-500 group-hover:animate-spin" />
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight">
              <div className="text-slate-900 dark:text-white leading-none">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Ojas
                  </span>
                  {/* Underline Effect */}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-pink-600 transform scale-x-100 rounded-full"></div>
                </span>
              </div>
              <div className="text-slate-700 dark:text-slate-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                Bhosale
              </div>
            </h1>
            
            {/* Animated Role with Icon */}
            <div className="relative h-16 md:h-18 overflow-hidden mb-4">
              <div className="flex items-center justify-center space-x-3">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${roles[currentRole]?.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300`}>
                  <CurrentIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-white">
                    {typedText}
                  </span>
                  <span className="animate-pulse text-violet-600">|</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location with Enhanced Design */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
            </div>
            <span className="text-base md:text-lg font-semibold text-slate-700 dark:text-slate-300">Pune, India</span>
            <div className="px-2 py-1 md:px-3 md:py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
              GMT+5:30
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-4">
              Crafting{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 relative">
                extraordinary digital experiences
                <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
              </span>{' '}
              through innovative full-stack development, seamless API integrations, and scalable cloud solutions.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              {['React.js', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB'].map((tech, index) => (
                <div key={index} className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-full font-medium hover:scale-105 transition-transform duration-200">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={scrollToContact}
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center space-x-2 md:space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-base md:text-lg">Let's Collaborate</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            <button
              onClick={downloadResume}
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-900 dark:text-white font-semibold rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-500 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2 md:space-x-3">
                <Download className="w-4 h-4 md:w-5 md:h-5 text-violet-600 dark:text-violet-400" />
                <span className="text-base md:text-lg">Download Resume</span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-70" />
              </div>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            {[
              { Icon: Github, href: "https://github.com/ojasbhosale", label: "GitHub", color: "hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-slate-900" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/ojas-bhosale-51103a251", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
              { Icon: Mail, href: "mailto:ojasbhosale07@gmail.com", label: "Email", color: "hover:bg-red-500 hover:text-white" }
            ].map(({ Icon, href, label, color }, index) => (
              <div key={index} className="group relative">
                <a
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`group relative p-3 md:p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 text-slate-600 dark:text-slate-400 ${color} border border-slate-200 dark:border-slate-700`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                </a>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-slate-400 dark:text-slate-500" />
          </div>
        </div>
      </div>

      {/* Floating Tech Stack Elements - Hidden on Mobile */}
      <div className="hidden xl:block">
        {[
          { name: 'React', pos: 'top-32 left-16', color: 'from-cyan-500 to-blue-500', delay: '0s' },
          { name: 'Node', pos: 'top-48 right-20', color: 'from-green-500 to-emerald-500', delay: '2s' },
          { name: 'AWS', pos: 'bottom-48 left-20', color: 'from-orange-500 to-red-500', delay: '4s' },
          { name: 'Next', pos: 'bottom-32 right-16', color: 'from-slate-700 to-slate-900', delay: '1s' }
        ].map((tech, index) => (
          <div 
            key={index}
            className={`absolute ${tech.pos} animate-float opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer`}
            style={{ animationDelay: tech.delay }}
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl shadow-xl flex items-center justify-center text-white font-bold text-sm backdrop-blur-sm border border-white/20`}>
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}