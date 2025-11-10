"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, PlayCircle, ShieldCheck, CheckCircle2, LineChart, Database, Sparkles, Lock, ChevronRight, TrendingUp, Users, FileText, Zap, Filter, Layers, Brain, Send } from "lucide-react";

/**
 * SplixData — AI knowledge engine for biopharma
 * Enterprise AI (light) homepage mock in a single React component.
 * TailwindCSS required. Uses framer-motion and lucide-react.
 *
 * Brand Palette (P1 Deep Tech Enterprise)
 *  - Primary: #0B1220 (Deep Navy)
 *  - Accent:  #2F6BFF (Electric Blue)
 *  - Secondary: #5A677B (Slate Gray)
 *  - Background: #F8FAFC (Soft White)
 */

const nav = [
  { label: "Platform", href: "https://splix-platform-274742124855.us-central1.run.app" },
  { label: "Careers", href: "#careers" },
  { label: "Demo", href: "/schedule" },
];

const features = [
  {
    icon: <Database className="w-5 h-5" />,
    title: "Unified Evidence Engine",
    desc: "Literature, patents, targets, pipelines, filings and financing signals in one graph.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Domain AI + RAG",
    desc: "Scientific-grade retrieval augmented generation grounded by curated ontologies.",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Actionable Signals",
    desc: "Competitive moves, trial changes, safety letters, and BD-relevant events in real time.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Enterprise-Ready",
    desc: "SOC2-ready posture, VPC/private deploy, PII-safe pipelines, full audit trail.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0B1220] grid place-items-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-[17px] tracking-tight">SplixData</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-700">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-neutral-900">
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="/schedule" className="hidden sm:inline-flex items-center gap-2 text-sm text-[#2F6BFF] font-medium">Schedule demo <Calendar className="w-4 h-4" /></a>
            <a href="https://splix-platform-274742124855.us-central1.run.app" className="inline-flex items-center gap-2 rounded-lg bg-[#2F6BFF] text-white text-sm px-3.5 py-2 shadow hover:brightness-110">
              Try the Platform <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] leading-tight">
                Trusted AI for<br />biopharma decisions
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            >
              We build AI empowered platform that curate data and convert it into insight—powering faster and better decisions for the biotech and biopharma industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a href="/schedule" className="inline-flex items-center gap-2 rounded-full bg-[#2F6BFF] text-white px-6 py-3 font-medium hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-[#2F6BFF]/20">
                Schedule a Demo <Calendar className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-300 text-neutral-700 px-6 py-3 font-medium hover:border-neutral-400 hover:bg-white transition-colors">
                Watch Overview <PlayCircle className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 border-t border-neutral-200">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">One platform. End-to-end intelligence.</h2>
            <p className="mt-3 text-neutral-700">Connect → Curate → Embed → Reason → Deliver. Built on Postgres + pgvector, private RAG, and a domain ontology for biopharma.</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-800">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#2F6BFF]">{f.icon}</div>
                  <div>
                    <div className="font-medium">{f.title}</div>
                    <div className="text-neutral-600">{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Platform Architecture</div>

            <div className="space-y-2">
              {[
                {
                  icon: <Zap className="w-4 h-4" />,
                  title: "Connect",
                  color: "from-blue-500 to-indigo-500",
                  items: ["PubMed", "USPTO", "ClinicalTrials", "SEC/EDGAR"]
                },
                {
                  icon: <Filter className="w-4 h-4" />,
                  title: "Curate",
                  color: "from-indigo-500 to-purple-500",
                  items: ["Normalization", "De-dup", "Ontologies"]
                },
                {
                  icon: <Layers className="w-4 h-4" />,
                  title: "Embed",
                  color: "from-purple-500 to-pink-500",
                  items: ["pgvector", "Cross encoders"]
                },
                {
                  icon: <Brain className="w-4 h-4" />,
                  title: "Reason",
                  color: "from-pink-500 to-rose-500",
                  items: ["RAG Guardrails", "Tool use", "Audit chain"]
                },
                {
                  icon: <Send className="w-4 h-4" />,
                  title: "Deliver",
                  color: "from-rose-500 to-orange-500",
                  items: ["Dashboard", "API", "Exports"]
                }
              ].map((stage, index) => (
                <div key={index} className="relative">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center text-white`}>
                        {stage.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-[#0B1220] mb-1">{stage.title}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {stage.items.map((item, i) => (
                            <span key={i} className="text-xs text-neutral-600">
                              {item}{i < stage.items.length - 1 ? " •" : ""}
                            </span>
                          ))}
                        </div>
                      </div>
                      {index < 4 && (
                        <ArrowRight className="w-4 h-4 text-neutral-300 rotate-90 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 border-t border-neutral-200">
        {/* Use Case 1: Marketing Trend Analysis */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2F6BFF]/10 text-[#2F6BFF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                USE CASE 01
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">
                Marketing trend analysis
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                We track events across 3,000+ biotech and pharma companies.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Emerging technologies and new clinical trials",
                  "Financings, partnerships, and M&A",
                  "Drug cells and company filings",
                  "Competitor landscape",
                  "Creating marketing reports"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/schedule" className="inline-flex items-center gap-2 rounded-full bg-[#2F6BFF] text-white px-6 py-3 font-medium hover:bg-[#1d4ed8] transition-colors">
                See it in action <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative h-[500px]">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F6BFF]/5 to-neutral-50 rounded-2xl" />

              {/* Data Table - Back */}
              <div className="absolute top-8 left-0 w-[85%] transform -rotate-2 transition-transform hover:rotate-0">
                <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-[#0B1220] to-[#1a2332] px-4 py-3 border-b border-neutral-700">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold text-sm">Clinical Trial Updates</h3>
                      <div className="text-xs text-neutral-400">Last 7 days</div>
                    </div>
                  </div>
                  <div className="p-4">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 gap-3 mb-2 pb-2 border-b border-neutral-200">
                      <div className="text-xs font-semibold text-neutral-500">Company</div>
                      <div className="text-xs font-semibold text-neutral-500">Phase</div>
                      <div className="text-xs font-semibold text-neutral-500">Indication</div>
                      <div className="text-xs font-semibold text-neutral-500">Status</div>
                    </div>
                    {/* Table Rows */}
                    {[
                      { company: "Vertex Pharma", phase: "Phase 3", indication: "Cystic Fibrosis", status: "Active", color: "bg-emerald-100 text-emerald-700" },
                      { company: "Moderna Inc", phase: "Phase 2", indication: "Cancer Vaccine", status: "Recruiting", color: "bg-blue-100 text-blue-700" },
                      { company: "BioNTech SE", phase: "Phase 1", indication: "Melanoma", status: "Enrolling", color: "bg-purple-100 text-purple-700" },
                      { company: "Regeneron", phase: "Phase 3", indication: "Oncology", status: "Active", color: "bg-emerald-100 text-emerald-700" }
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-4 gap-3 py-2 border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <div className="text-xs font-medium text-neutral-900">{row.company}</div>
                        <div className="text-xs text-neutral-600">{row.phase}</div>
                        <div className="text-xs text-neutral-600">{row.indication}</div>
                        <div className={`text-xs px-2 py-0.5 rounded-full ${row.color} inline-flex items-center justify-center w-fit`}>
                          {row.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Insight Summary Card - Front */}
              <div className="absolute bottom-4 right-0 w-[80%] transform rotate-1 transition-transform hover:rotate-0">
                <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#2F6BFF] to-[#5B8BFF] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-white" />
                      <h3 className="text-white font-semibold text-sm">AI-Generated Insights</h3>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    {/* Insight 1 */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 mb-1">Partnership Activity Surge</h4>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          M&A activity increased 24% this quarter, with oncology partnerships leading the trend.
                        </p>
                      </div>
                    </div>
                    {/* Insight 2 */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Database className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 mb-1">Key Competitor Moves</h4>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          3 major players filed new patents in immunotherapy space within the past 30 days.
                        </p>
                      </div>
                    </div>
                    {/* Insight 3 */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 mb-1">Emerging Opportunities</h4>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          Cell therapy sector shows 15+ new clinical trials initiated this month.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case 2: Find Potential Partnership */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
                <Image
                  src="/images/partnership-kol-dashboard_1200w_200kb.jpg"
                  alt="Partnership KOL Dashboard"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#2F6BFF]/10 text-[#2F6BFF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4" />
                USE CASE 02
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">
                Find potential partnership
              </h3>
              <p className="text-lg text-neutral-600 mb-8">
                Identify KOLs, map influence networks, and highlight company pipelines with the best partnership fit for your therapeutic area.
              </p>
              <a href="/schedule" className="inline-flex items-center gap-2 rounded-full border-2 border-[#2F6BFF] text-[#2F6BFF] px-6 py-3 font-medium hover:bg-[#2F6BFF] hover:text-white transition-colors">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Use Case 3: Whole Project Evaluation */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2F6BFF]/10 text-[#2F6BFF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FileText className="w-4 h-4" />
                USE CASE 03
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">
                Whole project evaluation for investors
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                We provide biotech investors with an end-to-end view of any project.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "End-to-end project diligence for biotech investors",
                  "Disease prevalence, current trials, and competitor landscape",
                  "Market sizing and revenue projections",
                  "Target druggability assessment",
                  "Safety and efficacy readouts and risk analysis",
                  "Probabilities of success based on comparable programs",
                  "Delivered as a concise, investment-grade report"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/schedule" className="inline-flex items-center gap-2 rounded-full bg-[#2F6BFF] text-white px-6 py-3 font-medium hover:bg-[#1d4ed8] transition-colors">
                Request a sample report <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
                <Image
                  src="/images/cart_report_screenshot_600w_target200k.jpg"
                  alt="Investment Report Dashboard"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 border-t border-neutral-200">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">Join SplixData</h2>
            <p className="mt-3 text-neutral-700">We’re hiring founding engineers and data scientists to build the scientific reasoning engine for biopharma.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-800">
              {[
                "Founding Full‑Stack Engineer (React/Next, Node, AWS)",
                "AI/ML Engineer (RAG, pgvector, Guardrails)",
                "BioNLP Scientist (LLM, ontologies, curation)",
              ].map((r, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> {r}</li>
              ))}
            </ul>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-[#2F6BFF]">See open roles <ChevronRight className="w-4 h-4" /></a>
          </div>
          <div className="rounded-xl bg-white border border-neutral-200 p-6">
            <div className="text-sm text-neutral-600 mb-2">Why work with us</div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {["Mission-first impact","Senior remote team","Equity + benefits","Scientist/engineer culture"].map((b, i)=>(
                <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 border-t border-neutral-200">
        <div className="rounded-2xl bg-white border border-neutral-200 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1220]">Schedule a strategy demo</h3>
              <p className="mt-2 text-neutral-700">See how SplixData accelerates drug & target insights with trusted AI. We’ll tailor to Pharma R&D, BD, or investor workflows.</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                <li className="flex items-center gap-2"><Lock className="w-4 h-4 text-neutral-500" />Private & secure trial environment</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-neutral-500" />White‑glove onboarding</li>
              </ul>
              <a href="/schedule" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#2F6BFF] text-white text-sm px-4 py-2.5 shadow hover:brightness-110">Open calendar <Calendar className="w-4 h-4" /></a>
            </div>
            <div className="bg-neutral-50 border border-dashed border-neutral-300 rounded-xl h-64 grid place-items-center text-neutral-500 text-sm">
              Your calendaring embed goes here (Calendly/Re:Schedule)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0B1220] grid place-items-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-[16px] tracking-tight">SplixData</div>
            </div>
          </div>
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} SplixData. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
