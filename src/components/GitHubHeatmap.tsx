"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaGithub } from "react-icons/fa";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const GITHUB_USERNAME = "Ritikkparmar";

function getColor(level: number, darkMode: boolean) {
  // GitHub-like green scale, adjust for dark mode
  const light = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
  const dark = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
  return darkMode ? dark[level] : light[level];
}

export default function GitHubHeatmap() {
  const { darkMode } = useTheme();
  const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchContributions() {
      // Use GitHub's unofficial contributions API (via GitHub profile SVG)
      const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`);
      const data = await res.json();
      // data.contributions is a flat array of days for the last year
      // Group by week (7 days)
      const days: ContributionDay[] = data.contributions;
      let weekArr: ContributionDay[][] = [];
      let week: ContributionDay[] = [];
      let totalContrib = 0;
      days.forEach((day, i) => {
        week.push(day);
        totalContrib += day.count;
        if (week.length === 7) {
          weekArr.push(week);
          week = [];
        }
      });
      setWeeks(weekArr);
      setTotal(totalContrib);
      setLoading(false);
    }
    fetchContributions();
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto pb-0 mb-0">
      <h1
        className="text-5xl lg:text-6xl font-bold text-left mb-2"
        style={{
          background: darkMode
            ? "linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa)"
            : "linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        GitHub Activity<span className="text-purple-600">.</span>
      </h1>
      <p className={`mt-6 text-lg lg:text-2xl px-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
      >
        <span className="font-semibold text-purple-500">Open Source Journey:</span> <br className="hidden md:block" />
        Here's a creative snapshot of my coding streaks, contributions, and open source passion over the past year.
      </p>
      <div
        className={`mt-10 p-6 rounded-2xl shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}
        style={{ boxShadow: darkMode ? '0 4px 32px 0 #2d1a4a33' : '0 4px 32px 0 #a78bfa33' }}
      >
        {loading ? (
          <div className="text-center text-gray-500 dark:text-gray-300 animate-pulse">Loading contributions…</div>
        ) : (
          <div className="flex flex-col items-start">
            <div className="w-full overflow-x-auto hide-scrollbar">
              <div className="flex gap-1 min-w-max mx-auto">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {week.map((day, di) => (
                      <div
                        key={di}
                        title={`${day.count} contributions on ${day.date}`}
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded transition-all duration-300 border border-transparent hover:border-purple-400"
                        style={{ background: getColor(day.level, darkMode), opacity: 0, animation: `fadeIn 0.5s ${0.01 * (wi * 7 + di)}s forwards` }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <span className={`text-lg md:text-xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} animate-pulse`}>
                {total.toLocaleString()} contributions in the last year
              </span>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2 rounded-lg shadow transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-600 hover:to-blue-500' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600'
                }`}
              >
                <FaGithub />
                <span>Check out my GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none !important; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
} 