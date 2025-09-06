import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Award, 
  Code, 
  Zap, 
  Github, 
  Calendar,
  Flame,
  Star,
  GitBranch,
  Users,
  Sparkles,
  Trophy,
  Target,
  Rocket,
  Heart,
  BookOpen,
  Coffee,
  MapPin,
  CheckCircle,
  TrendingUp,
  Globe,
  Database,
  Layers,
  Cpu,
  Cloud,
  Monitor
} from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expertise in React.js, Node.js, and modern web technologies",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhanced data extraction efficiency by 40% and reduced deployment time by 30%",
    color: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    icon: Award,
    title: "Problem Solver",
    description: "Built scalable solutions that boost team productivity by 25%",
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: GraduationCap,
    title: "Continuous Learner",
    description: "B.Tech from IIIT Manipur with strong technical foundation",
    color: "from-violet-500 to-purple-500",
    gradient: "from-violet-500/10 to-purple-500/10"
  },
];

const techStack = [
  { name: 'React.js', icon: Globe, proficiency: 90, color: 'from-cyan-500 to-blue-500' },
  { name: 'Node.js', icon: Database, proficiency: 85, color: 'from-green-500 to-emerald-500' },
  { name: 'TypeScript', icon: Code, proficiency: 80, color: 'from-blue-600 to-indigo-600' },
  { name: 'Python', icon: Cpu, proficiency: 75, color: 'from-yellow-500 to-orange-500' },
  { name: 'MongoDB', icon: Layers, proficiency: 85, color: 'from-green-600 to-teal-600' },
  { name: 'AWS', icon: Cloud, proficiency: 70, color: 'from-orange-500 to-red-500' },
  { name: 'Next.js', icon: Monitor, proficiency: 85, color: 'from-slate-700 to-slate-900' },
  { name: 'Express.js', icon: Rocket, proficiency: 80, color: 'from-purple-500 to-pink-500' }
];

export default function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  type GithubData = {
    totalStars: number;
    totalForks: number;
    codingStreak: number;
    totalRepos: number;
    languages: string[];
    [key: string]: any; // For any additional properties from userData
  };
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Fetch GitHub data
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.github.com/users/ojasbhosale');
        const userData = await response.json();
        
        // Fetch additional repos data for more insights
        const reposResponse = await fetch('https://api.github.com/users/ojasbhosale/repos?sort=updated&per_page=100');
        const reposData = await reposResponse.json();
        
        // Calculate total stars, forks, and languages
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);
        const languages = [...new Set(reposData.map((repo: any) => repo.language).filter(Boolean))];
        
        // Calculate coding streak (simplified - days since last commit)
        const lastCommitDate = new Date(userData.updated_at);
        const today = new Date();
        const daysSinceLastCommit = Math.floor((today.getTime() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24));
        const codingStreak = Math.max(0, 365 - daysSinceLastCommit); // Simplified calculation
        
        setGithubData({
          ...userData,
          totalStars,
          totalForks,
          languages: languages.slice(0, 5),
          codingStreak,
          totalRepos: userData.public_repos
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback data
        setGithubData({
          totalStars: 12,
          totalForks: 5,
          codingStreak: 180,
          totalRepos: 25,
          languages: ['JavaScript', 'Python', 'TypeScript', 'Java', 'CSS']
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();

    // Highlight rotation
    const highlightInterval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 4000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(highlightInterval);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Mesh */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(147, 51, 234, 0.1) 0%, 
                transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(59, 130, 246, 0.1) 0%, 
                transparent 50%),
              linear-gradient(135deg, 
                rgba(147, 51, 234, 0.03) 0%, 
                rgba(59, 130, 246, 0.03) 25%, 
                rgba(16, 185, 129, 0.03) 50%, 
                rgba(236, 72, 153, 0.03) 75%, 
                rgba(251, 146, 60, 0.03) 100%)
            `
          }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute opacity-20 ${
                i % 4 === 0 ? 'w-32 h-32 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-3xl' :
                i % 4 === 1 ? 'w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl' :
                i % 4 === 2 ? 'w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-xl' :
                'w-16 h-16 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-lg'
              }`}
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${15 + (i * 10)}%`,
                transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) rotate(${i * 45}deg)`,
                animation: `float ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-full mb-6">
            <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">About Me</span>
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="text-slate-900 dark:text-white">Crafting Digital </span>
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Story & Description */}
          <div className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
          }`}>
            
            {/* Main Story */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-violet-500 to-purple-500 rounded-full"></div>
                <div className="pl-8">
                  <p className="text-xl md:text-2xl font-light text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    I'm a passionate{' '}
                    <span className="font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      Software Developer
                    </span>{' '}
                    with hands-on experience in full-stack development, API integration, and cloud deployment.
                  </p>

                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    As a recent graduate from IIIT Manipur, I bring fresh perspectives and cutting-edge knowledge to every project. 
                    My journey has been marked by significant achievements, including enhancing data extraction efficiency by{' '}
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">40%</span> and reducing deployment time by{' '}
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">30%</span>.
                  </p>

                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    I specialize in building scalable, maintainable solutions using modern technologies. 
                    My goal is to create applications that not only meet technical requirements but also provide exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <GraduationCap className="w-8 h-8 mx-auto mb-2 text-violet-600 dark:text-violet-400" />
                  <div className="text-sm font-medium text-violet-700 dark:text-violet-300">B.Tech </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">IIIT Manipur</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                  <div className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Strong Foundation</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Academic</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Pune, India</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Location</div>
                </div>
              </div>
            </div>

            {/* GitHub Stats */}
            {!isLoading && githubData && (
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl flex items-center justify-center">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">GitHub Activity</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Coding consistency & contributions</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">{githubData.codingStreak}</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Day Streak</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">{githubData.totalStars}</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Total Stars</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <GitBranch className="w-4 h-4 text-green-500" />
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">{githubData.totalRepos}</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Repositories</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Code className="w-4 h-4 text-purple-500" />
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">{githubData.languages?.length || 5}</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Languages</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Highlights & Skills */}
          <div className={`space-y-8 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
          }`}>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    currentHighlight === index ? 'ring-2 ring-violet-500/50 shadow-xl shadow-violet-500/20' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                       style={{ backgroundImage: `linear-gradient(135deg, ${highlight.color.split(' ')[1]}, ${highlight.color.split(' ')[3]})` }} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{highlight.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-3xl p-6 text-white text-center">
              <Heart className="w-8 h-8 mx-auto mb-3 animate-pulse" />
              <h3 className="text-lg font-semibold mb-2">Let's Build Something Amazing</h3>
              <p className="text-sm opacity-90 mb-4">Ready to bring your ideas to life with cutting-edge technology</p>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Elements - Hidden on Mobile */}
      <div className="hidden xl:block">
        {[
          { name: 'TS', pos: 'top-20 left-10', color: 'from-blue-600 to-indigo-600', delay: '0s' },
          { name: 'Py', pos: 'top-40 right-12', color: 'from-yellow-500 to-orange-500', delay: '2s' },
          { name: 'DB', pos: 'bottom-40 left-12', color: 'from-green-600 to-emerald-600', delay: '4s' },
          { name: 'API', pos: 'bottom-20 right-10', color: 'from-purple-600 to-pink-600', delay: '1s' }
        ].map((tech, index) => (
          <div 
            key={index}
            className={`absolute ${tech.pos} opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer`}
            style={{
              animation: `float ${4 + index}s ease-in-out infinite`,
              animationDelay: tech.delay
            }}
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl shadow-xl flex items-center justify-center text-white font-bold text-sm backdrop-blur-sm border border-white/20`}>
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}