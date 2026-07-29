"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal, FileDown, Code2, Briefcase, User, FolderGit2, Cpu, ExternalLink } from "lucide-react";
import { PERSONAL_DATA } from "@/data/resume";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Journey", href: "#experience", icon: Briefcase },
    { name: "Tech Stack", href: "#skills", icon: Cpu },
    { name: "Portfolio", href: "#portfolio", icon: FolderGit2 },
    { name: "Contact", href: "#contact", icon: Terminal },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 py-3.5 shadow-2xl shadow-cyan-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {PERSONAL_DATA.displayTitle}
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                SR. ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-900 border border-slate-700/70 hover:border-cyan-500/50 hover:text-white px-4 py-2 rounded-lg transition-all shadow-sm"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Resume PDF</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 px-4 py-2 rounded-lg transition-all shadow-md shadow-cyan-500/20 font-bold"
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-cyan-400"
              >
                <Icon className="w-5 h-5 text-cyan-400" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="/Profile.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-800 py-2.5 rounded-lg"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
