"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Download, 
  Share2, 
  ArrowLeft,
  Sparkles,
  Zap,
  CheckCircle2,
  Bell
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResumeBuilder({ initialContent }) {
  const [tone, setTone] = useState("Executive");

  return (
    <div className="flex flex-col h-full space-y-4 pb-10">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-4 mt-2">
        <div className="flex items-center gap-3 text-primary-foreground">
          <Link href="/dashboard" className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-serif">Resume Preview & Export</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary-foreground">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary-foreground">
            <Zap className="w-5 h-5" />
          </Button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-400 border-2 border-primary/20 overflow-hidden">
             {/* Avatar Placeholder */}
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* Main Document Preview - Center */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[800px] bg-white rounded-md shadow-2xl p-10 text-slate-800 min-h-[1056px] relative">
            
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-6 mb-6">
              <div>
                <h1 className="text-4xl font-serif text-slate-900 tracking-tight font-bold mb-1">ALEXANDER VANCE</h1>
                <p className="text-slate-500 text-sm font-medium tracking-wide">SENIOR PRODUCT STRATEGIST & AI INTEGRATION LEAD</p>
              </div>
              <div className="text-right text-xs text-slate-500 space-y-1">
                <p>alexander.vance@email.com</p>
                <p>+1 (555) 012-3456</p>
                <p>San Francisco, CA</p>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-sm font-bold tracking-widest text-slate-900 uppercase">Professional Summary</h2>
                <Badge variant="secondary" className="bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border-cyan-200 text-[10px] py-0 h-5">
                  <Sparkles className="w-3 h-3 mr-1" /> ai-optimized for faang
                </Badge>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Strategic leader with 10+ years of experience scaling AI-driven consumer products.
                Proven track record in orchestrating cross-functional teams to deliver high-impact
                features that increased user retention by 42% at Global Tech Corp. Expert in LLM
                orchestration and ethical AI deployment.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 className="text-sm font-bold tracking-widest text-slate-900 uppercase mb-4">Professional Experience</h2>
              
              <div className="mb-5">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-slate-900">Principal Product Manager</h3>
                    <p className="text-sm text-slate-500 italic">Nexus Dynamics • 2020 — Present</p>
                  </div>
                  <Badge variant="secondary" className="bg-cyan-50 text-cyan-700 border-cyan-200 text-[10px] py-0 h-5">
                    <TrendingUp className="w-3 h-3 mr-1" /> high impact score
                  </Badge>
                </div>
                <ul className="list-disc list-outside ml-4 mt-2 space-y-1.5 text-sm text-slate-700">
                  <li>Led the digital transformation of 4 flagship products, resulting in a $12M ARR increase within 18 months.</li>
                  <li>Spearheaded the integration of generative AI workflows into customer support, reducing response times by 65%.</li>
                  <li>Managed a distributed team of 25+ engineers, designers, and data scientists across 3 continents.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-slate-900">Senior Strategy Consultant</h3>
                    <p className="text-sm text-slate-500 italic">Arcane Analytics • 2016 — 2020</p>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-2 space-y-1.5 text-sm text-slate-700">
                  <li>Designed market entry strategies for 12 Fortune 500 clients in the emerging technology sector.</li>
                  <li>Published 3 whitepapers on the economic impact of machine learning in supply chain logistics.</li>
                </ul>
              </div>
            </div>

            {/* Bottom Section: Expertise & Education */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-slate-900 uppercase mb-3">Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">PRODUCT VISION</span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">LLM ARCHITECTURE</span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">AGILE/SCRUM</span>
                </div>
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-slate-900 uppercase mb-3">Education</h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">MBA, Stanford University</h3>
                    <p className="text-xs text-slate-500">B.S. Computer Science, MIT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Watermark/Verified Seal */}
            <div className="absolute bottom-10 right-10 opacity-10">
              <CheckCircle2 className="w-24 h-24 text-slate-400" />
            </div>

          </div>
        </div>

        {/* Right Sidebar - Refinement Panel */}
        <div className="w-full xl:w-[350px] space-y-6">
          <div className="sticky top-24">
            <h2 className="text-2xl font-serif text-primary-foreground mb-6">Refinement</h2>
            
            <div className="space-y-6">
              {/* Template Style */}
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Template Style</label>
                <Select defaultValue="silent">
                  <SelectTrigger className="w-full bg-secondary/30 border-border/50 text-primary-foreground h-12">
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="silent">Silent Power</SelectItem>
                    <SelectItem value="modern">Modern Edge</SelectItem>
                    <SelectItem value="classic">Classic Exec</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* AI Tone Adjustment */}
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">AI Tone Adjustment</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant={tone === "Executive" ? "default" : "outline"}
                    className={`w-full ${tone === "Executive" ? 'bg-primary text-primary-foreground' : 'bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground'}`}
                    onClick={() => setTone("Executive")}
                  >
                    {tone === "Executive" && <Sparkles className="w-3 h-3 mr-2" />} Executive
                  </Button>
                  <Button 
                    variant={tone === "Creative" ? "default" : "outline"}
                    className={`w-full ${tone === "Creative" ? 'bg-primary text-primary-foreground' : 'bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground'}`}
                    onClick={() => setTone("Creative")}
                  >
                    Creative
                  </Button>
                  <Button 
                    variant={tone === "Technical" ? "default" : "outline"}
                    className={`w-full ${tone === "Technical" ? 'bg-primary text-primary-foreground' : 'bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground'}`}
                    onClick={() => setTone("Technical")}
                  >
                    Technical
                  </Button>
                  <Button 
                    variant={tone === "Concise" ? "default" : "outline"}
                    className={`w-full ${tone === "Concise" ? 'bg-primary text-primary-foreground' : 'bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground'}`}
                    onClick={() => setTone("Concise")}
                  >
                    Concise
                  </Button>
                </div>
              </div>

              {/* AI Recommendation */}
              <Card className="bg-primary/10 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                  <Sparkles className="w-16 h-16 text-primary" />
                </div>
                <CardContent className="p-4 relative z-10">
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm">
                    <Sparkles className="w-4 h-4" /> AI RECOMMENDATION
                  </div>
                  <p className="text-sm text-primary-foreground leading-relaxed">
                    Strengthening your &quot;Nexus Dynamics&quot; impact statements could increase your callback rate by <span className="text-primary font-bold">18%</span> for Director-level roles.
                  </p>
                </CardContent>
              </Card>

            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <Button className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Download className="w-5 h-5 mr-2" /> Download PDF
              </Button>
              <Button variant="outline" className="w-full h-14 text-base font-semibold bg-transparent border-border/50 hover:bg-secondary/50 text-primary-foreground">
                <Share2 className="w-5 h-5 mr-2" /> Share Link
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Temporary icon to avoid import errors since it wasn't in the list
function TrendingUp(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
