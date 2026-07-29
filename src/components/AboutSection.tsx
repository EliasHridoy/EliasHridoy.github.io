"use client";

import { motion } from "framer-motion";
import { User, Shield, Target, Cpu, Terminal, Award, FileCode2, CheckCircle2 } from "lucide-react";
import { PERSONAL_DATA } from "@/data/resume";

export default function AboutSection() {
  const coreValues = [
    {
      title: "Clean & Maintainable Code",
      desc: "Deep focus on SOLID principles, modular patterns, and maintainable software architecture.",
      icon: FileCode2,
    },
    {
      title: "Enterprise Observability",
      desc: "24/7 telemetry using OpenTelemetry, Prometheus, & Grafana to minimize MTTR.",
      icon: Cpu,
    },
    {
      title: "Fintech Compliance & Security",
      desc: "ISO20022 SWIFT message compliance, 2FA workflows, and zero-trust authentication.",
      icon: Shield,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>EXECUTIVE SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering Enterprise Software with <span className="text-gradient">Precision</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging technical depth with business impact to construct robust, high-performance digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story & Background */}
          <motion.div
            className="lg:col-span-7 glass-card p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Career Philosophy &amp; Experience</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a Senior Software Engineer specializing in <strong className="text-white">.NET Core</strong> and <strong className="text-white">Angular</strong>, with over 6 years of experience engineering core banking modules, ERP tax engines, travel tech APIs, and high-concurrency real-time notification systems.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Throughout my career at companies like <span className="text-cyan-400">SELISE Group</span>, <span className="text-cyan-400">Patricius IT</span>, and <span className="text-cyan-400">LEADS Corporation</span>, I have focused on solving high-complexity problems—ranging from migrating legacy SWIFT MT messages to modern ISO20022 MX standards to reducing CI/CD deployment overhead by 40%.
              </p>
            </div>

            {/* Key Skill Tags */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs font-mono uppercase text-slate-500">Core Expertise Domains</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Fintech & Core Banking",
                  "SWIFT ISO20022",
                  "Azure DevOps Pipelines",
                  "SignalR Real-time",
                  "OpenTelemetry Monitoring",
                  "Database Performance Tuning",
                  "Microservices Architecture"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Architectural Pillars */}
          <motion.div
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Certifications Box */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-900/90 to-indigo-950/30 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-amber-400 font-mono uppercase font-bold tracking-wider">Verified Credential</div>
                <div className="text-sm font-bold text-white">SQL (Advanced) Certificate</div>
                <div className="text-xs text-slate-400">Expert-level query tuning, index design &amp; stored procedures</div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
