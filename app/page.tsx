"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, PlayCircle, ShieldCheck, CheckCircle2, LineChart, Database, Sparkles, Lock, ChevronRight } from "lucide-react";

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
  { label: "Platform", href: "#platform" },
  { label: "Careers", href: "#careers" },
  { label: "Resources", href: "#resources" },
  { label: "Demo", href: "#demo" },
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

function GraphMock() {
  return (
    <div className="relative w-full h-72 md:h-80 rounded-xl bg-white border border-neutral-200 overflow-hidden">
      {/* gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(47,107,255,0.15),_transparent_60%)]" />
      {/* nodes */}
      {[
        { x: 18, y: 22, l: "TP53", c: "bg-blue-500" },
        { x: 62, y: 30, l: "EGFR", c: "bg-indigo-500" },
        { x: 38, y: 70, l: "PD-1", c: "bg-sky-500" },
        { x: 78, y: 62, l: "Pembrolizumab", c: "bg-emerald-500" },
        { x: 30, y: 40, l: "H. pylori", c: "bg-fuchsia-500" },
        { x: 12, y: 66, l: "CRC", c: "bg-rose-500" },
        { x: 50, y: 50, l: "Trial NCT1234", c: "bg-amber-500" },
      ].map((n, i) => (
        <motion.div
          key={i}
          className={`absolute px-2.5 py-1.5 rounded-full text-xs text-white ${n.c} shadow`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.05 * i }}
        >
          {n.l}
        </motion.div>
      ))}
      {/* edges (simple svg lines) */}
      <svg className="absolute inset-0" width="100%" height="100%" preserveAspectRatio="none">
        <line x1="18%" y1="22%" x2="50%" y2="50%" stroke="#9BB3FF" strokeWidth="1.5" />
        <line x1="62%" y1="30%" x2="50%" y2="50%" stroke="#9BB3FF" strokeWidth="1.5" />
        <line x1="38%" y1="70%" x2="50%" y2="50%" stroke="#9BB3FF" strokeWidth="1.5" />
        <line x1="78%" y1="62%" x2="50%" y2="50%" stroke="#9BB3FF" strokeWidth="1.5" />
        <line x1="30%" y1="40%" x2="18%" y2="22%" stroke="#9BB3FF" strokeWidth="1.5" />
        <line x1="12%" y1="66%" x2="50%" y2="50%" stroke="#9BB3FF" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

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
            <a href="#demo" className="hidden sm:inline-flex items-center gap-2 text-sm text-[#2F6BFF] font-medium">Schedule demo <Calendar className="w-4 h-4" /></a>
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#2F6BFF] text-white text-sm px-3.5 py-2 shadow hover:brightness-110">
              Try the Platform <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B1220]">
                Trusted AI for biopharma decisions.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-xl">
                SplixData integrates scientific literature, patents, drug & target databases, pipelines, investment records, and regulatory filings into one trusted knowledge base for fast, defensible insights.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-[#2F6BFF] text-white text-sm px-4 py-2.5 shadow hover:brightness-110">
                  Schedule a Demo <Calendar className="w-4 h-4" />
                </a>
                <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 text-neutral-800 text-sm px-4 py-2.5 bg-white hover:bg-neutral-50">
                  Watch Overview <PlayCircle className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-neutral-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                SOC2-ready · Private deploy · Full audit trail
              </div>
            </div>

            {/* Product Mock */}
            <div>
              <GraphMock />
            </div>
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
            <div className="text-sm text-neutral-600 mb-3">Architecture</div>
            <div className="grid grid-cols-5 gap-2 text-xs">
              <div className="col-span-1 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <div className="font-medium mb-2">Connect</div>
                <ul className="space-y-1 text-neutral-600 list-disc pl-4">
                  <li>PubMed</li>
                  <li>USPTO</li>
                  <li>ClinicalTrials</li>
                  <li>SEC/EDGAR</li>
                </ul>
              </div>
              <div className="col-span-1 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <div className="font-medium mb-2">Curate</div>
                <ul className="space-y-1 text-neutral-600 list-disc pl-4">
                  <li>Normalization</li>
                  <li>De‑dup</li>
                  <li>Ontologies</li>
                </ul>
              </div>
              <div className="col-span-1 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <div className="font-medium mb-2">Embed</div>
                <ul className="space-y-1 text-neutral-600 list-disc pl-4">
                  <li>pgvector</li>
                  <li>Cross encoders</li>
                </ul>
              </div>
              <div className="col-span-1 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <div className="font-medium mb-2">Reason</div>
                <ul className="space-y-1 text-neutral-600 list-disc pl-4">
                  <li>RAG Guardrails</li>
                  <li>Tool use</li>
                  <li>Audit chain</li>
                </ul>
              </div>
              <div className="col-span-1 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <div className="font-medium mb-2">Deliver</div>
                <ul className="space-y-1 text-neutral-600 list-disc pl-4">
                  <li>Dashboard</li>
                  <li>API</li>
                  <li>Exports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 border-t border-neutral-200">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="bg-white border border-neutral-200 rounded-xl p-5 hover:shadow-sm transition">
              <div className="text-xs uppercase tracking-wide text-neutral-500">Resource</div>
              <h3 className="mt-1 font-semibold">Biopharma AI Playbook #{i}</h3>
              <p className="mt-2 text-sm text-neutral-700">How to operationalize trusted RAG for scientific and business decisions.</p>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm text-[#2F6BFF]">Read more <ChevronRight className="w-4 h-4" /></a>
            </article>
          ))}
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
              <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#2F6BFF] text-white text-sm px-4 py-2.5 shadow hover:brightness-110">Open calendar <Calendar className="w-4 h-4" /></a>
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
