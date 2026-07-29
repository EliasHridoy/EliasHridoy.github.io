"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, ChevronRight, GraduationCap } from "lucide-react";
import { EXPERIENCES, EDUCATION_DATA } from "@/data/resume";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Career Journey &amp; <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Over 6+ years of driving engineering excellence across fintech, enterprise ERP, cloud devops, and high-concurrency systems.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:scale-125 group-hover:border-indigo-400 transition-all shadow-md shadow-cyan-500/20">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Date Box on Desktop (Left of line) */}
              <div className="hidden md:block absolute -left-48 top-1 w-36 text-right font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <span className="md:hidden text-xs font-mono text-cyan-400 font-semibold block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-slate-300 font-medium mt-0.5">
                      <span className="text-indigo-400 font-semibold">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {exp.featured && (
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 text-xs font-mono font-semibold tracking-wide">
                      FEATURED ROLE
                    </span>
                  )}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-1">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="pt-3 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-400 border border-slate-800 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">Education &amp; Background</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800/80 space-y-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 w-fit">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-emerald-400 font-semibold">{edu.period}</div>
                <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                <p className="text-xs text-slate-400">{edu.institution}</p>
                {edu.details && <p className="text-xs text-slate-500 pt-1 border-t border-slate-800/60">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
