"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu, ArrowRight, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PERSONAL_DATA } from "@/data/resume";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div
            className="lg:col-span-7 space-y-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Enterprise Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>ENTERPRISE ARCHITECT & SR. ENGINEER</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Building <span className="text-gradient">Scalable</span> &amp; High-Availability Systems.
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl">
                Hi, I&apos;m <strong className="text-slate-100 font-semibold">{PERSONAL_DATA.name}</strong>. I architect microservices, optimize mission-critical banking integrations (SWIFT ISO20022), and deliver high-throughput real-time platforms with <span className="text-cyan-400 font-mono">.NET Core</span> &amp; <span className="text-indigo-400 font-mono">Angular</span>.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Architected Systems</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-6">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Verify &amp; Connect</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Edgy Interactive Command Terminal Preview */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden border border-slate-800/90 shadow-2xl shadow-cyan-950/40">
              {/* Window Header */}
              <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>elias@enterprise-node:~$</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">v6.4.2</div>
              </div>

              {/* Code / Command Prompt Output */}
              <div className="p-5 font-mono text-xs space-y-4 bg-slate-950/80 leading-relaxed text-slate-300">
                <div className="space-y-1">
                  <p className="text-slate-500"># System Diagnostics &amp; Telemetry Status</p>
                  <p className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>STATUS: ALL ENTERPRISE PIPELINES OPERATIONAL</span>
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-900">
                  <div className="flex justify-between text-slate-400">
                    <span>Stack Core:</span>
                    <span className="text-cyan-400 font-semibold">.NET Core 9 / C#</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Frontend Architecture:</span>
                    <span className="text-indigo-400 font-semibold">Angular / Micro-frontends</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>CI/CD Automation:</span>
                    <span className="text-purple-400 font-semibold">Azure DevOps (-40% Time)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Observability:</span>
                    <span className="text-amber-400 font-semibold">OpenTelemetry + Grafana</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Compliance Standard:</span>
                    <span className="text-emerald-400 font-semibold">SWIFT ISO20022 (MX)</span>
                  </div>
                </div>

                {/* Metrics Highlight Card */}
                <div className="mt-4 p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Performance Metrics</span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center pt-1">
                    <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
                      <div className="text-lg font-bold text-cyan-400">40%</div>
                      <div className="text-[10px] text-slate-400">Query &amp; CI/CD Speedup</div>
                    </div>
                    <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
                      <div className="text-lg font-bold text-indigo-400">100%</div>
                      <div className="text-[10px] text-slate-400">Banking Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Floating Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 text-center space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
