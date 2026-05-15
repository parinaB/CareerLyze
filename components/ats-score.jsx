"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getATSScore } from "@/actions/resume";
import { Loader2, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export default function ATSScore({ content }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCheck = async () => {
    if (!content) return;
    setLoading(true);
    setError(null);
    try {
      const data = await getATSScore(content);
      setResult(data);
    } catch (err) {
      setError("Failed to analyze resume. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const getColor = (score) => {
    if (score >= 75) return "text-emerald-600 dark:text-emerald-400";
    if (score >= 50) return "text-amber-600 dark:text-amber-400";
    return "text-rose-600 dark:text-rose-400";
  };

  const getBarColor = (score) => {
    if (score >= 75) return "bg-emerald-600 dark:bg-emerald-400";
    if (score >= 50) return "bg-amber-600 dark:bg-amber-400";
    return "bg-rose-600 dark:bg-rose-400";
  };

  return (
    <div className="space-y-3">
      <Button
        onClick={handleCheck}
        disabled={loading || !content}
        className="w-full h-10 sm:h-14 text-xs sm:text-base font-semibold bg-primary hover:bg-primary/90 dark:bg-secondary/50 dark:hover:bg-secondary/80 text-primary-foreground dark:border dark:border-border/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing...
          </>
        ) : (
          <>
            <ShieldCheck className="w-4 h-4 mr-2" /> Check ATS Score
          </>
        )}
      </Button>

      {error && (
        <p className="text-xs text-red-400 text-center">{error}</p>
      )}

      {result && (
        <Card className="bg-secondary/20 border-border/50">
          <CardContent className="p-3 sm:p-4 space-y-3">
            <div className="flex items-center justify-between cursor-pointer group" onClick={() => setIsExpanded(!isExpanded)}>
              <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase dark:text-slate-300 group-hover:text-foreground transition-colors">ATS Score</span>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${getColor(result.score)}`}>
                  {result.score}<span className="text-sm text-muted-foreground dark:text-slate-400">/100</span>
                </span>
                <div className="w-6 h-6 ml-1 text-muted-foreground flex items-center justify-center">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {isExpanded && (
              <div className="space-y-3 pt-2">
                <div className="relative h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${getBarColor(result.score)}`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>
                <p className={`text-xs font-semibold ${getColor(result.score)}`}>
                  {result.label}
                </p>
                <div className="space-y-1.5 pt-1">
                  <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase dark:text-slate-300">Suggestions</p>
                  <ul className="space-y-1.5">
                    {result.suggestions.map((tip, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}