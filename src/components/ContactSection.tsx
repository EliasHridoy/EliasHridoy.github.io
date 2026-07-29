"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Copy, FileText, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { PERSONAL_DATA } from "@/data/resume";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#00f2fe", "#4facfe", "#10b981"]
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>INITIATE CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Open for high-impact senior engineering roles, cloud architecture consultation, and tech innovation discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Contact</h3>
              
              {/* Copyable Email Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="text-xs text-slate-400 font-mono">PRIMARY EMAIL</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-cyan-400 font-mono truncate">{PERSONAL_DATA.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 pt-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Email address copied to clipboard!
                  </div>
                )}
              </div>

              {/* Location & LinkedIn */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">LOCATION</div>
                    <div className="font-medium text-white">{PERSONAL_DATA.location}</div>
                  </div>
                </div>

                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-slate-500 font-mono">LINKEDIN PROFILE</div>
                      <div className="text-sm font-semibold">in/meeliashridoy</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-slate-500 font-mono">GITHUB PROFILE</div>
                      <div className="text-sm font-semibold">github.com/meeliashridoy</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* PDF Download Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href="/Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 text-sm font-semibold transition-all"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  View Original LinkedIn Profile PDF
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Send Message Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              
              {formSubmitted ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-sm text-slate-300">
                    Thank you for reaching out. I will get back to you shortly at <strong className="text-cyan-400">{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-slate-300 text-xs font-mono hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">YOUR EMAIL</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">PROJECT / INQUIRY DETAILS</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss enterprise systems, microservices architecture, or consulting opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
