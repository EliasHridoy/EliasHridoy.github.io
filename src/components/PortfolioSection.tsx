"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Layers, Activity, Lock, ArrowUpRight, CheckCircle } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PORTFOLIO_PROJECTS, Project } from "@/data/resume";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Fintech & Banking", "DevOps & Tooling", "Real-Time Systems", "Enterprise & Cloud"];

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ARCHITECTED PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Enterprise Solutions &amp; <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-impact applications, core banking migrations, real-time dispatch systems, and telemetry stacks.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Top Category & Status */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-cyan-400 border border-slate-800 text-xs font-mono font-medium">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                    <p className="text-slate-400 text-xs leading-relaxed pt-1">{project.longDescription}</p>
                  </div>

                  {/* Metrics Badge Chips */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono uppercase text-slate-500">Proven Metrics &amp; Benchmarks</div>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2.5 py-1 rounded bg-slate-900/90 text-cyan-300 border border-cyan-900/50 text-xs font-mono flex items-center gap-1"
                        >
                          <Activity className="w-3 h-3 text-cyan-400" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer: Tech Stack & Actions */}
                <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Future Portfolio Callout Banner */}
        <div className="mt-16 glass-card p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-cyan-950/20 to-slate-950 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>ENTERPRISE REPOSITORIES &amp; NDA PROJECTS</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Need Detailed System Specifications or Code Samples?
          </h4>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Certain banking and proprietary enterprise codebase details are protected under NDA. Extended architectural walkthroughs and live interactive demos are available upon request.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all"
            >
              Request Technical Discussion
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
