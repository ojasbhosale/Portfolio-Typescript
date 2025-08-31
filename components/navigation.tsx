import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight, Sparkles } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-b border-slate-200/20 dark:border-slate-800/20 shadow-xl shadow-slate-900/5 dark:shadow-slate-950/20" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Premium Design */}
            <div 
              className="relative group cursor-pointer z-50"
              onClick={() => scrollToSection('#home')}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center space-x-3 px-4 py-2 bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/20 group-hover:border-violet-300/30 dark:group-hover:border-violet-500/30 transition-all duration-300">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-tr from-violet-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/25">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                      ojasbhosale
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-2 bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 dark:border-slate-700/20">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                        isActive 
                          ? "text-white bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 shadow-lg shadow-violet-500/25" 
                          : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-slate-800/20"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {!isActive && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative group p-3 rounded-xl bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                <div className="relative">
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                  ) : (
                    <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
                  )}
                </div>
              </button>

              {/* CTA Button - Desktop */}
              <a
                href="https://buymeacoffee.com/ojasbhosale"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 transform hover:scale-105 group"
              >
                <span>Buy Me a Coffee</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>   

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative group p-3 rounded-xl bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                <div className="relative">
                  <div className="w-5 h-5 flex flex-col justify-center items-center">
                    <span className={`block w-4 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                    <span className={`block w-4 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-4 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        }`}>
          <div className="bg-white/95 dark:bg-slate-950/95 min-h-screen backdrop-blur-2xl border-t border-slate-200/20 dark:border-slate-800/20 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-[0.98] ${
                      isActive 
                        ? "text-white bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 shadow-lg shadow-violet-500/25" 
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {isActive && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </button>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <a
                  href="https://buymeacoffee.com/ojasbhosale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-2xl shadow-lg shadow-yellow-500/25 transition-all duration-300 transform hover:scale-[0.98]"
                >
                  <span>Buy Me a Coffee</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Buy Me a Coffee Icon */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <div className="relative group">
          {/* Glowing animated background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg blur-xl opacity-70 group-hover:opacity-100 transition-all duration-400 animate-pulse"></div>

          {/* Button with Coffee Image */}
          <a
            href="https://buymeacoffee.com/ojasbhosale"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-lg shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
          >
            <img
              src="/coffee.png"
              alt="Buy Me a Coffee"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Subtle shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-lg"></div>
          </a>
        </div>
      </div>
    </>
  );
}