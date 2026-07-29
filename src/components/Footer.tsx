import { PERSONAL_DATA } from "@/data/resume";
import { Terminal, Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-200 font-bold">{PERSONAL_DATA.displayTitle}</span>
            <span className="text-slate-500 ml-2">© {new Date().getFullYear()} All Rights Reserved.</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Journey</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-1.5 text-slate-500">
          <span>Engineered with Next.js &amp; Tailwind</span>
        </div>

      </div>
    </footer>
  );
}
