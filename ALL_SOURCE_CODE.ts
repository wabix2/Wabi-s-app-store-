// =================================================================
// WABI APP STORE — ALL SOURCE CODE
// =================================================================
// GitHub upload instructions:
// Create each file below at the exact path shown before each section.
// All paths are relative to your repo root.
// =================================================================


// ─────────────────────────────────────────────────────────────────
// PATH: src/types/index.ts
// ─────────────────────────────────────────────────────────────────
/*
export type AppCategory = "AI" | "Education" | "Research" | "Tools";
export interface AppVersion { version: string; date: string; notes: string; apk?: string; }
export interface App {
  id: string; name: string; tagline: string; description: string;
  longDescription: string; version: string; category: AppCategory;
  icon: string; color: string; apk: string; github: string;
  screenshots: { src: string; alt: string }[];
  features: string[]; techStack: string[]; downloads: number;
  featured: boolean; releaseDate: string;
  versionHistory: AppVersion[]; tags: string[];
}
export interface Category { slug: string; label: AppCategory; description: string; icon: string; color: string; }
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/lib/utils.ts
// ─────────────────────────────────────────────────────────────────
/*
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/lib/apps.ts
// ─────────────────────────────────────────────────────────────────
/*
import appsData from "@/data/apps.json";
import { App, AppCategory } from "@/types";
const apps = appsData as App[];
export const getAllApps = (): App[] => apps;
export const getFeaturedApp = (): App | undefined => apps.find(a => a.featured);
export const getAppById = (id: string): App | undefined => apps.find(a => a.id === id);
export const getAppsByCategory = (cat: AppCategory): App[] => apps.filter(a => a.category === cat);
export const getLatestApps = (n = 6): App[] => [...apps].sort((a,b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()).slice(0, n);
export const searchApps = (q: string): App[] => { const s = q.toLowerCase(); return apps.filter(a => a.name.toLowerCase().includes(s) || a.description.toLowerCase().includes(s) || a.tags.some(t => t.includes(s))); };
export const formatDownloads = (n: number): string => n >= 1000 ? `${(n/1000).toFixed(1)}k` : n.toString();
export const getCategoryColor = (cat: AppCategory): string => ({ AI:"#7c5cfc", Education:"#10b981", Research:"#f59e0b", Tools:"#00d4ff" }[cat] ?? "#7c5cfc");
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/data/categories.ts
// ─────────────────────────────────────────────────────────────────
/*
import { Category } from "@/types";
export const categories: Category[] = [
  { slug: "ai",        label: "AI",        description: "Apps powered by artificial intelligence.", icon: "Brain",         color: "#7c5cfc" },
  { slug: "education", label: "Education", description: "Learn faster, retain more, grow.",         icon: "GraduationCap", color: "#10b981" },
  { slug: "research",  label: "Research",  description: "Tools for academics and curious minds.",   icon: "FlaskConical",  color: "#f59e0b" },
  { slug: "tools",     label: "Tools",     description: "Productivity utilities and essentials.",   icon: "Wrench",        color: "#00d4ff" },
];
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/data/apps.json
// ─────────────────────────────────────────────────────────────────
/*
[
  {
    "id": "lumiq", "name": "Lumiq", "tagline": "Your AI-powered study companion",
    "description": "AI study assistant that transforms how you learn.",
    "longDescription": "Lumiq is a next-generation AI study assistant built for students who want to learn smarter, not harder. It combines large language models with spaced repetition, active recall, and Socratic questioning to help you master any subject.",
    "version": "1.2.0", "category": "AI", "icon": "/icons/lumiq.svg", "color": "#7c5cfc",
    "apk": "/apks/lumiq-v1.2.0.apk", "github": "https://github.com/yourusername/lumiq",
    "screenshots": [], "features": ["AI-powered Q&A","Auto-generated flashcards","Spaced repetition","Study analytics","Offline mode"],
    "techStack": ["Kotlin","Jetpack Compose","OpenAI API","Room DB"],
    "downloads": 1240, "featured": true, "releaseDate": "2024-09-01",
    "versionHistory": [
      { "version": "1.2.0", "date": "2025-05-15", "notes": "Spaced repetition engine, analytics dashboard.", "apk": "/apks/lumiq-v1.2.0.apk" },
      { "version": "1.0.0", "date": "2024-09-01", "notes": "Initial release.", "apk": "/apks/lumiq-v1.0.0.apk" }
    ],
    "tags": ["study","ai","flashcards","education"]
  },
  {
    "id": "wabi-notes", "name": "Wabi Notes", "tagline": "Minimalist markdown notes",
    "description": "Distraction-free notes with markdown and on-device encryption.",
    "longDescription": "Wabi Notes embraces wabi-sabi — finding beauty in simplicity. Write in markdown, organize with folders, keep thoughts private with on-device encryption. No cloud, no subscriptions.",
    "version": "0.9.1", "category": "Tools", "icon": "/icons/wabi-notes.svg", "color": "#00d4ff",
    "apk": "/apks/wabi-notes-v0.9.1.apk", "github": "https://github.com/yourusername/wabi-notes",
    "screenshots": [], "features": ["Markdown editor","AES-256 encryption","Folder organization","PDF export","Zero internet permissions"],
    "techStack": ["Kotlin","Jetpack Compose","Room DB","DataStore"],
    "downloads": 430, "featured": false, "releaseDate": "2025-01-14",
    "versionHistory": [
      { "version": "0.9.1", "date": "2025-04-20", "notes": "PDF export, widget improvements.", "apk": "/apks/wabi-notes-v0.9.1.apk" },
      { "version": "0.9.0", "date": "2025-01-14", "notes": "Beta release.", "apk": "/apks/wabi-notes-v0.9.0.apk" }
    ],
    "tags": ["notes","markdown","privacy","productivity"]
  },
  {
    "id": "researchiq", "name": "ResearchIQ", "tagline": "Summarize papers, cite faster",
    "description": "Research assistant that reads PDFs and extracts key insights.",
    "longDescription": "ResearchIQ is built for students and academics who spend too much time parsing dense research papers. Upload any PDF and get the abstract, methodology, findings in plain language. Ask follow-up questions, generate citations.",
    "version": "1.0.3", "category": "Research", "icon": "/icons/researchiq.svg", "color": "#f59e0b",
    "apk": "/apks/researchiq-v1.0.3.apk", "github": "https://github.com/yourusername/researchiq",
    "screenshots": [], "features": ["PDF summarization","Key findings extraction","Citation generator (APA/MLA)","Research library","Highlight & annotate"],
    "techStack": ["Kotlin","Compose","PdfBox","OpenAI API"],
    "downloads": 290, "featured": false, "releaseDate": "2025-03-01",
    "versionHistory": [
      { "version": "1.0.3", "date": "2025-06-01", "notes": "Chicago citation style added.", "apk": "/apks/researchiq-v1.0.3.apk" },
      { "version": "1.0.0", "date": "2025-03-01", "notes": "Initial release.", "apk": "/apks/researchiq-v1.0.0.apk" }
    ],
    "tags": ["research","pdf","ai","citations"]
  },
  {
    "id": "vocabuilder", "name": "VocaBuilder", "tagline": "Build vocabulary with spaced repetition",
    "description": "Language learning app that teaches words in context.",
    "longDescription": "VocaBuilder takes a science-backed approach to vocabulary. Instead of rote memorization, it teaches words through sentences and etymology. Spaced repetition surfaces words precisely when you're about to forget them.",
    "version": "2.1.0", "category": "Education", "icon": "/icons/vocabuilder.svg", "color": "#10b981",
    "apk": "/apks/vocabuilder-v2.1.0.apk", "github": "https://github.com/yourusername/vocabuilder",
    "screenshots": [], "features": ["10,000+ word library","Context sentences","Spaced repetition (SM-2)","Etymology explanations","Progress heatmap","Offline support"],
    "techStack": ["Kotlin","Jetpack Compose","Room DB","WorkManager"],
    "downloads": 870, "featured": false, "releaseDate": "2024-06-15",
    "versionHistory": [
      { "version": "2.1.0", "date": "2025-05-01", "notes": "New word discovery mode.", "apk": "/apks/vocabuilder-v2.1.0.apk" },
      { "version": "1.0.0", "date": "2024-06-15", "notes": "Initial release.", "apk": "/apks/vocabuilder-v1.0.0.apk" }
    ],
    "tags": ["vocabulary","language","education","spaced-repetition"]
  }
]
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/app/globals.css
// ─────────────────────────────────────────────────────────────────
/*
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;
body { background: #0a0a0f; color: #f0eeff; font-family: Inter, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #0a0a0f; } ::-webkit-scrollbar-thumb { background: #2a2a3a; border-radius: 3px; }
::selection { background: rgba(124,92,252,0.3); color: #f0eeff; }
.bg-grid { background-image: linear-gradient(rgba(124,92,252,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.04) 1px, transparent 1px); background-size: 40px 40px; }
@layer components {
  .btn-primary { @apply inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-medium rounded-lg text-sm transition-all hover:bg-accent-soft hover:shadow-accent-sm active:scale-95; }
  .btn-ghost { @apply inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-border text-text-secondary font-medium rounded-lg text-sm transition-all hover:border-accent hover:text-text-primary; }
  .card { @apply bg-elevated border border-border rounded-xl shadow-card transition-all duration-300; }
  .card-hover { @apply hover:shadow-card-hover hover:border-accent/30 hover:-translate-y-1; }
  .section-label { @apply text-xs font-semibold uppercase tracking-widest text-accent; }
  .gradient-text { @apply bg-gradient-to-r from-[#9d7ffe] to-[#00d4ff] bg-clip-text text-transparent; }
  .tag { @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border; }
}
@keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
.animate-fade-up { animation: fadeUp 0.5s ease forwards; }
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/app/layout.tsx
// ─────────────────────────────────────────────────────────────────
/*
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: { default: "Wabi App Store", template: "%s | Wabi App Store" },
  description: "Personal software distribution platform. Download APKs, explore open-source apps.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-void text-text-primary antialiased min-h-screen flex flex-col">
        <Navbar /><main className="flex-1">{children}</main><Footer />
      </body>
    </html>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/app/not-found.tsx
// ─────────────────────────────────────────────────────────────────
/*
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="font-mono text-8xl font-bold text-accent/20">404</div>
      <h1 className="font-display font-bold text-2xl text-text-primary">Page not found</h1>
      <p className="text-text-secondary max-w-sm">This app hasn't been published yet.</p>
      <div className="flex gap-3">
        <Link href="/" className="btn-primary">Go home</Link>
        <Link href="/apps" className="btn-ghost">Browse apps</Link>
      </div>
    </div>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/app/page.tsx
// ─────────────────────────────────────────────────────────────────
/*
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { getFeaturedApp, getLatestApps, getAllApps } from "@/lib/apps";
import { FeaturedAppHero } from "@/components/FeaturedAppHero";
import { AppCard } from "@/components/AppCard";
import { CategoryGrid } from "@/components/CategoryGrid";
import { SearchBar } from "@/components/SearchBar";

export default function HomePage() {
  const featured = getFeaturedApp();
  const latest = getLatestApps(4);
  const total = getAllApps().length;
  return (
    <div className="relative">
      <div className="absolute inset-0 h-[600px] pointer-events-none" style={{background:"radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,92,252,0.3) 0%, transparent 60%)"}} />
      <div className="absolute inset-0 h-[600px] bg-grid pointer-events-none opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 space-y-20">
        <section className="text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 border border-accent/25 rounded-full text-accent text-sm font-medium">
            <Package className="w-3.5 h-3.5" />{total} apps published
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-text-primary tracking-tight max-w-2xl mx-auto leading-tight">
            Apps built to <span className="gradient-text">make you better</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">A personal distribution platform for open-source Android apps. Free, transparent, no Play Store required.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <SearchBar className="w-full sm:w-72" />
            <Link href="/apps" className="btn-ghost w-full sm:w-auto justify-center">Browse All Apps <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>
        {featured && <section className="space-y-4"><p className="section-label">Featured</p><FeaturedAppHero app={featured} /></section>}
        <section className="space-y-4"><p className="section-label">Categories</p><CategoryGrid /></section>
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="section-label">Latest Apps</p>
            <Link href="/apps" className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-1">View all <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{latest.map(app => <AppCard key={app.id} app={app} />)}</div>
        </section>
        <section className="relative overflow-hidden rounded-2xl border border-accent/20 bg-elevated text-center p-12 space-y-5">
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <h2 className="font-display font-bold text-3xl text-text-primary">All apps are free & open-source</h2>
            <p className="text-text-secondary max-w-md mx-auto">Every app ships with a public GitHub repo. Audit the code, fork it, improve it.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/apps" className="btn-primary"><Package className="w-4 h-4" />Explore Apps</Link>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn-ghost">View on GitHub</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/app/apps/page.tsx
// ─────────────────────────────────────────────────────────────────
/*
import { getAllApps, searchApps, getAppsByCategory } from "@/lib/apps";
import { AppCard } from "@/components/AppCard";
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";
import { Package } from "lucide-react";
import { AppCategory } from "@/types";
const CATS: AppCategory[] = ["AI","Education","Research","Tools"];
export default function AppsPage({ searchParams }: { searchParams: { q?: string; category?: string } }) {
  const { q, category } = searchParams;
  let apps = getAllApps();
  if (q) apps = searchApps(q);
  else if (category) { const cat = CATS.find(c => c.toLowerCase() === category.toLowerCase()); if (cat) apps = getAppsByCategory(cat); }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
      <div className="space-y-4">
        <p className="section-label">Apps</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div><h1 className="font-display font-bold text-3xl text-text-primary">{q ? `Results for "${q}"` : category ? `${category} Apps` : "All Apps"}</h1><p className="text-text-secondary mt-1 text-sm">{apps.length} app{apps.length!==1?"s":""} found</p></div>
          <SearchBar className="w-full sm:w-72" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/apps" className={`tag text-xs transition-all ${!q&&!category?"bg-accent/20 border-accent/40 text-accent":"border-border text-text-secondary hover:border-accent/30"}`}>All</Link>
          {CATS.map(cat => <Link key={cat} href={`/apps?category=${cat.toLowerCase()}`} className={`tag text-xs transition-all ${category?.toLowerCase()===cat.toLowerCase()?"bg-accent/20 border-accent/40 text-accent":"border-border text-text-secondary hover:border-accent/30"}`}>{cat}</Link>)}
        </div>
      </div>
      {apps.length > 0
        ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">{apps.map(app => <AppCard key={app.id} app={app} />)}</div>
        : <div className="text-center py-20 space-y-4"><Package className="w-12 h-12 mx-auto text-text-muted" /><p className="text-text-secondary">No apps found. <Link href="/apps" className="text-accent hover:underline">Browse all</Link></p></div>
      }
    </div>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/app/apps/[id]/page.tsx
// ─────────────────────────────────────────────────────────────────
/*
import { notFound } from "next/navigation";
import Link from "next/link";
import { Github, ArrowLeft, Calendar, Tag, Code2, History, CheckCircle2, Package } from "lucide-react";
import { getAppById, getAllApps, formatDownloads } from "@/lib/apps";
import { AppIcon } from "@/components/AppIcon";
import { CategoryBadge } from "@/components/CategoryBadge";
import { DownloadButton } from "@/components/DownloadButton";

export async function generateStaticParams() { return getAllApps().map(a => ({ id: a.id })); }

export default function AppDetailPage({ params }: { params: { id: string } }) {
  const app = getAppById(params.id);
  if (!app) notFound();
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Link href="/apps" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"><ArrowLeft className="w-4 h-4" />Back to Apps</Link>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-elevated p-8 md:p-10">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{background:`radial-gradient(ellipse 60% 60% at 80% 50%, ${app.color} 0%, transparent 70%)`}} />
        <div className="relative z-10 flex flex-col md:flex-row items-start gap-7">
          <AppIcon name={app.name} color={app.color} size="xl" />
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-start gap-3"><CategoryBadge category={app.category} /><span className="tag text-xs border-border text-text-muted">v{app.version}</span>{app.featured&&<span className="tag text-xs" style={{color:app.color,borderColor:`${app.color}40`,background:`${app.color}15`}}>Featured</span>}</div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary">{app.name}</h1>
            <p className="text-text-secondary text-lg">{app.tagline}</p>
            <div className="flex flex-wrap gap-5 text-sm text-text-muted">
              <span className="flex items-center gap-1.5"><Package className="w-4 h-4" />{formatDownloads(app.downloads)} downloads</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(app.releaseDate).toLocaleDateString("en-US",{year:"numeric",month:"short"})}</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <DownloadButton apkUrl={app.apk} appId={app.id} version={app.version} size="lg" />
              <a href={app.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github className="w-4 h-4" />View Source</a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-10">
          <section className="space-y-3"><h2 className="font-display font-semibold text-lg text-text-primary">About {app.name}</h2><p className="text-text-secondary leading-relaxed">{app.longDescription}</p></section>
          <section className="space-y-4">
            <h2 className="font-display font-semibold text-lg text-text-primary flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" />Features</h2>
            <div className="grid sm:grid-cols-2 gap-2.5">{app.features.map(f => <div key={f} className="flex items-start gap-2.5 p-3 rounded-lg bg-elevated border border-border"><div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{background:app.color}} /><span className="text-sm text-text-secondary">{f}</span></div>)}</div>
          </section>
          <section className="space-y-4">
            <h2 className="font-display font-semibold text-lg text-text-primary flex items-center gap-2"><History className="w-5 h-5 text-accent" />Version History</h2>
            <div className="space-y-3">{app.versionHistory.map((v,i) => <div key={v.version} className="p-4 rounded-xl bg-elevated border border-border space-y-2"><div className="flex items-center justify-between"><div className="flex items-center gap-2.5"><span className="font-mono font-semibold text-sm" style={{color:i===0?app.color:undefined}}>v{v.version}</span>{i===0&&<span className="text-xs px-2 py-0.5 rounded-full" style={{background:`${app.color}20`,color:app.color}}>Latest</span>}</div><span className="text-xs text-text-muted">{new Date(v.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}</span></div><p className="text-sm text-text-secondary">{v.notes}</p>{v.apk&&<a href={v.apk} download className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent">Download this version →</a>}</div>)}</div>
          </section>
        </div>
        <div className="space-y-6">
          <div className="card p-5 space-y-3"><h3 className="font-semibold text-sm text-text-primary flex items-center gap-2"><Code2 className="w-4 h-4 text-accent" />Tech Stack</h3><div className="flex flex-wrap gap-2">{app.techStack.map(t => <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-void border border-border text-text-secondary font-mono">{t}</span>)}</div></div>
          <div className="card p-5 space-y-3"><h3 className="font-semibold text-sm text-text-primary flex items-center gap-2"><Tag className="w-4 h-4 text-accent" />Tags</h3><div className="flex flex-wrap gap-2">{app.tags.map(t => <Link key={t} href={`/apps?q=${t}`} className="text-xs px-2.5 py-1 rounded-full bg-void border border-border text-text-muted hover:border-accent/40 hover:text-accent transition-all">#{t}</Link>)}</div></div>
          <div className="rounded-xl p-5 space-y-3 border" style={{background:`${app.color}10`,borderColor:`${app.color}30`}}>
            <p className="text-sm font-semibold text-text-primary">Ready to install?</p>
            <p className="text-xs text-text-muted">Direct APK. No Play Store, no tracking.</p>
            <DownloadButton apkUrl={app.apk} appId={app.id} version={app.version} className="w-full justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/app/category/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────────
/*
import { notFound } from "next/navigation";
import { getAppsByCategory } from "@/lib/apps";
import { categories } from "@/data/categories";
import { AppCard } from "@/components/AppCard";
import { Brain, GraduationCap, FlaskConical, Wrench } from "lucide-react";
import { AppCategory } from "@/types";
const iconMap: Record<string, React.ComponentType<{className?:string}>> = { Brain, GraduationCap, FlaskConical, Wrench };
export async function generateStaticParams() { return categories.map(c => ({ slug: c.slug })); }
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = categories.find(c => c.slug === params.slug);
  if (!cat) notFound();
  const apps = getAppsByCategory(cat.label as AppCategory);
  const Icon = iconMap[cat.icon] ?? Brain;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{background:`${cat.color}20`,color:cat.color}}><Icon className="w-7 h-7" /></div>
        <div><p className="section-label">{cat.label}</p><h1 className="font-display font-bold text-3xl text-text-primary">{cat.label} Apps</h1><p className="text-text-secondary text-sm mt-1">{cat.description}</p></div>
      </div>
      {apps.length > 0
        ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">{apps.map(app => <AppCard key={app.id} app={app} />)}</div>
        : <div className="text-center py-20"><Icon className="w-12 h-12 mx-auto text-text-muted mb-3" /><p className="text-text-secondary">No apps yet. Check back soon!</p></div>
      }
    </div>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/Navbar.tsx
// ─────────────────────────────────────────────────────────────────
/*
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchBar } from "./SearchBar";
const navLinks = [
  { href:"/apps", label:"All Apps" },
  { href:"/category/ai", label:"AI" },
  { href:"/category/education", label:"Education" },
  { href:"/category/research", label:"Research" },
  { href:"/category/tools", label:"Tools" },
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-void/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shadow-accent-sm"><Zap className="w-4 h-4 text-white" fill="white" /></div>
            <span className="font-display font-semibold text-text-primary text-lg">Wabi<span className="text-accent"> Store</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(l => <Link key={l.href} href={l.href} className={cn("px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all",pathname===l.href?"bg-accent/15 text-accent":"text-text-secondary hover:text-text-primary hover:bg-elevated")}>{l.label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block"><SearchBar compact /></div>
            <button className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-elevated" onClick={() => setOpen(!open)}>{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
          </div>
        </div>
        {open && <div className="md:hidden border-t border-border py-4 space-y-1"><div className="pb-3"><SearchBar /></div>{navLinks.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={cn("block px-3 py-2.5 rounded-lg text-sm font-medium",pathname===l.href?"bg-accent/15 text-accent":"text-text-secondary hover:text-text-primary hover:bg-elevated")}>{l.label}</Link>)}</div>}
      </div>
    </header>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/Footer.tsx
// ─────────────────────────────────────────────────────────────────
/*
import Link from "next/link";
import { Zap, Github } from "lucide-react";
export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5"><div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-white" fill="white" /></div><span className="font-display font-semibold text-text-primary">Wabi <span className="text-accent">Store</span></span></Link>
            <p className="text-sm text-text-muted">A personal distribution platform for open-source Android apps. Free, transparent, indie.</p>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex p-2 rounded-lg bg-elevated border border-border text-text-secondary hover:text-text-primary transition-all"><Github className="w-4 h-4" /></a>
          </div>
          <div><h3 className="text-sm font-semibold text-text-primary mb-4">Apps</h3><ul className="space-y-2.5">{[{href:"/apps",label:"All Apps"},{href:"/category/ai",label:"AI Apps"},{href:"/category/education",label:"Education"},{href:"/category/tools",label:"Tools"}].map(l=><li key={l.href}><Link href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">{l.label}</Link></li>)}</ul></div>
          <div><h3 className="text-sm font-semibold text-text-primary mb-4">Featured</h3><ul className="space-y-2.5">{[{href:"/apps/lumiq",label:"Lumiq"},{href:"/apps/wabi-notes",label:"Wabi Notes"},{href:"/apps/researchiq",label:"ResearchIQ"},{href:"/apps/vocabuilder",label:"VocaBuilder"}].map(l=><li key={l.href}><Link href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">{l.label}</Link></li>)}</ul></div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} Wabi App Store. Built with Next.js & love.</p>
          <p className="text-xs text-text-muted">All apps are open-source and free.</p>
        </div>
      </div>
    </footer>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/AppIcon.tsx
// ─────────────────────────────────────────────────────────────────
/*
import { cn } from "@/lib/utils";
interface AppIconProps { name: string; color: string; size?: "sm"|"md"|"lg"|"xl"; className?: string; }
const sizes = { sm:"w-10 h-10 text-base", md:"w-14 h-14 text-xl", lg:"w-18 h-18 text-2xl", xl:"w-24 h-24 text-3xl" };
export function AppIcon({ name, color, size="md", className }: AppIconProps) {
  const initials = name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return <div className={cn("rounded-2xl flex items-center justify-center font-display font-bold text-white shadow-lg shrink-0", sizes[size], className)} style={{background:`linear-gradient(135deg, ${color}dd 0%, ${color}88 100%)`,boxShadow:`0 4px 20px ${color}40`}}>{initials}</div>;
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/CategoryBadge.tsx
// ─────────────────────────────────────────────────────────────────
/*
import { AppCategory } from "@/types";
import { getCategoryColor } from "@/lib/apps";
import { cn } from "@/lib/utils";
export function CategoryBadge({ category, className }: { category: AppCategory; className?: string }) {
  const color = getCategoryColor(category);
  return <span className={cn("tag text-xs", className)} style={{color,borderColor:`${color}40`,backgroundColor:`${color}15`}}>{category}</span>;
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/AppCard.tsx
// ─────────────────────────────────────────────────────────────────
/*
import Link from "next/link";
import { Download, ArrowRight, Github } from "lucide-react";
import { App } from "@/types";
import { AppIcon } from "./AppIcon";
import { CategoryBadge } from "./CategoryBadge";
import { formatDownloads } from "@/lib/apps";
export function AppCard({ app }: { app: App }) {
  return (
    <div className="card card-hover group flex flex-col p-5 gap-4">
      <div className="flex items-start gap-4">
        <AppIcon name={app.name} color={app.color} size="md" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2"><h3 className="font-display font-semibold text-text-primary text-base leading-tight truncate">{app.name}</h3><CategoryBadge category={app.category} /></div>
          <p className="text-xs text-text-muted mt-0.5">v{app.version}</p>
        </div>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 flex-1">{app.tagline}</p>
      <div className="flex items-center gap-3 text-xs text-text-muted">
        <span className="flex items-center gap-1"><Download className="w-3 h-3" />{formatDownloads(app.downloads)}</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />Active</span>
      </div>
      <div className="flex items-center gap-2 pt-1 border-t border-border">
        <a href={app.apk} download className="btn-primary text-xs px-3 py-1.5 flex-1 justify-center" onClick={e=>e.stopPropagation()}><Download className="w-3 h-3" />Download</a>
        <Link href={`/apps/${app.id}`} className="btn-ghost text-xs px-3 py-1.5"><ArrowRight className="w-3 h-3" />Details</Link>
        <a href={app.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs px-2.5 py-1.5" onClick={e=>e.stopPropagation()}><Github className="w-3.5 h-3.5" /></a>
      </div>
    </div>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/FeaturedAppHero.tsx
// ─────────────────────────────────────────────────────────────────
/*
import Link from "next/link";
import { Download, Github, Star, ArrowRight } from "lucide-react";
import { App } from "@/types";
import { AppIcon } from "./AppIcon";
import { CategoryBadge } from "./CategoryBadge";
import { formatDownloads } from "@/lib/apps";
export function FeaturedAppHero({ app }: { app: App }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-elevated">
      <div className="absolute inset-0 opacity-10" style={{background:`radial-gradient(ellipse 70% 60% at 70% 50%, ${app.color} 0%, transparent 70%)`}} />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-3"><span className="tag text-xs" style={{color:app.color,borderColor:`${app.color}40`,background:`${app.color}15`}}><Star className="w-3 h-3 mr-1" fill="currentColor" />Featured App</span><CategoryBadge category={app.category} /></div>
          <div className="flex items-center gap-4"><AppIcon name={app.name} color={app.color} size="lg" /><div><h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">{app.name}</h2><p className="text-text-secondary mt-1">{app.tagline}</p></div></div>
          <p className="text-text-secondary text-sm leading-relaxed max-w-lg">{app.description}</p>
          <div className="flex flex-wrap gap-2">{app.features.slice(0,3).map(f=><span key={f} className="text-xs px-2.5 py-1 bg-void/50 border border-border rounded-full text-text-muted">{f}</span>)}</div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={app.apk} download className="btn-primary"><Download className="w-4 h-4" />Download v{app.version}</a>
            <Link href={`/apps/${app.id}`} className="btn-ghost">View Details <ArrowRight className="w-4 h-4" /></Link>
            <a href={app.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github className="w-4 h-4" />Source</a>
          </div>
        </div>
        <div className="flex md:flex-col gap-4 md:gap-6 shrink-0">
          {[{label:"Downloads",value:formatDownloads(app.downloads)},{label:"Version",value:`v${app.version}`},{label:"Category",value:app.category}].map(({label,value})=><div key={label} className="text-center min-w-[80px]"><p className="font-display font-bold text-2xl" style={{color:app.color}}>{value}</p><p className="text-xs text-text-muted mt-0.5">{label}</p></div>)}
        </div>
      </div>
    </div>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/CategoryGrid.tsx
// ─────────────────────────────────────────────────────────────────
/*
import Link from "next/link";
import { Brain, GraduationCap, FlaskConical, Wrench, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { getAllApps } from "@/lib/apps";
import { AppCategory } from "@/types";
const iconMap: Record<string, React.ComponentType<{className?:string}>> = { Brain, GraduationCap, FlaskConical, Wrench };
export function CategoryGrid() {
  const apps = getAllApps();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(cat => {
        const Icon = iconMap[cat.icon] ?? Brain;
        const count = apps.filter(a => a.category === (cat.label as AppCategory)).length;
        return (
          <Link key={cat.slug} href={`/category/${cat.slug}`} className="card card-hover group p-5 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:`${cat.color}20`,color:cat.color}}><Icon className="w-5 h-5" /></div>
            <div><h3 className="font-semibold text-text-primary text-sm group-hover:text-accent transition-colors">{cat.label}</h3><p className="text-xs text-text-muted mt-0.5">{count} app{count!==1?"s":""}</p></div>
            <p className="text-xs text-text-muted flex-1">{cat.description}</p>
            <div className="flex items-center gap-1 text-xs" style={{color:cat.color}}><span>Browse</span><ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" /></div>
          </Link>
        );
      })}
    </div>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/SearchBar.tsx
// ─────────────────────────────────────────────────────────────────
/*
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
export function SearchBar({ compact, className }: { compact?: boolean; className?: string }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent) => { e.preventDefault(); if (query.trim()) router.push(`/apps?q=${encodeURIComponent(query.trim())}`); };
  return (
    <form onSubmit={handleSearch} className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
      <input type="text" value={query} onChange={e=>setQuery(e.target.value)} placeholder={compact?"Search…":"Search apps…"} className={cn("pl-9 pr-4 py-2 bg-elevated border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all",compact?"w-44 focus:w-56":"w-full")} />
    </form>
  );
}
*/


// ─────────────────────────────────────────────────────────────────
// PATH: src/components/DownloadButton.tsx
// ─────────────────────────────────────────────────────────────────
/*
"use client";
import { useState, useEffect } from "react";
import { Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";
interface Props { apkUrl: string; appId: string; version: string; className?: string; size?: "sm"|"md"|"lg"; }
const sizes = { sm:"text-xs px-3 py-1.5", md:"text-sm px-5 py-2.5", lg:"text-base px-6 py-3" };
export function DownloadButton({ apkUrl, appId, version, className, size="md" }: Props) {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => { const s = localStorage.getItem(`dl_${appId}`); if (s) setCount(parseInt(s,10)); }, [appId]);
  const handleClick = () => { const n = count+1; setCount(n); localStorage.setItem(`dl_${appId}`,n.toString()); setDone(true); setTimeout(()=>setDone(false),3000); };
  return (
    <a href={apkUrl} download onClick={handleClick} className={cn("inline-flex items-center gap-2 font-medium rounded-lg transition-all active:scale-95", done?"bg-green-500/20 border border-green-500/30 text-green-400":"bg-accent hover:bg-accent-soft text-white shadow-accent-sm hover:shadow-accent-md", sizes[size], className)}>
      {done ? <><Check className="w-4 h-4" />Downloading…</> : <><Download className="w-4 h-4" />Download APK v{version}</>}
    </a>
  );
}
*/
