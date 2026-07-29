"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Layout, Database, Cloud, ShieldCheck, Zap } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/resume";

export default function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return Server;
      case "Layout":
        return Layout;
      case "Database":
        return Database;
      case "Cloud":
        return Cloud;
      case "ShieldCheck":
        return ShieldCheck;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Enterprise <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Mastery of modern frameworks, distributed backend architectures, telemetry, and data integrity tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getIcon(cat.iconName);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                  </div>

                  {/* Skill Progress List */}
                  <div className="space-y-4 pt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="font-mono text-cyan-400 font-bold">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800/60">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full"
                          />
                        </div>

                        {skill.highlight && (
                          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                            <Zap className="w-3 h-3 text-amber-400" />
                            <span>{skill.highlight}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
