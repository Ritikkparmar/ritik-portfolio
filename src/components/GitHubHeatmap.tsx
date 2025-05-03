"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaGithub } from "react-icons/fa";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ContributionsData {
  weeks?: Week[];
  totalContributions?: number;
}

const GITHUB_USERNAME = "Ritikkparmar";

export default function GitHubHeatmap() {
  const { darkMode } = useTheme();
  const [contributions, setContributions] = useState<ContributionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/Ritikkparmar');
        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }
        const data = await response.json();
        // Validate data structure before setting state
        if (!data || !Array.isArray(data.weeks)) {
          throw new Error('Invalid data format from GitHub API');
        }
        setContributions(data);
        setLoading(false);
      } catch (err) {
        console.error('GitHub API Error:', err);
        setError('Failed to load GitHub contributions');
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const getContributionColor = (count: number): string => {
    if (count === 0) return darkMode ? 'bg-gray-800' : 'bg-gray-100';
    if (count <= 3) return 'bg-green-200 dark:bg-green-900';
    if (count <= 6) return 'bg-green-300 dark:bg-green-700';
    if (count <= 9) return 'bg-green-400 dark:bg-green-600';
    return 'bg-green-500 dark:bg-green-500';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !contributions || !contributions.weeks || !Array.isArray(contributions.weeks)) {
    return (
      <div className="text-red-500 text-center p-8">
        <p>Could not load GitHub contributions. Please try again later.</p>
        <p className="mt-2 text-sm text-gray-500">{error}</p>
      </div>
    );
  }

  // Create a safe array for rendering
  const weekArr = [];
  
  try {
    if (contributions.weeks && Array.isArray(contributions.weeks)) {
      for (const week of contributions.weeks) {
        if (week && Array.isArray(week.contributionDays)) {
          weekArr.push(week.contributionDays);
        }
      }
    }
  } catch (err) {
    console.error('Error processing contributions data:', err);
  }

  // If weekArr is empty after processing, show an error
  if (weekArr.length === 0) {
    return (
      <div className="text-red-500 text-center p-8">
        <p>No contribution data available.</p>
      </div>
    );
  }

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
        Here&apos;s a creative snapshot of my coding streaks, contributions, and open source passion over the past year.
      </p>
      <div
        className={`mt-10 p-6 rounded-2xl shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}
        style={{ boxShadow: darkMode ? '0 4px 32px 0 #2d1a4a33' : '0 4px 32px 0 #a78bfa33' }}
      >
        <div className="flex flex-col items-start">
          <div className="w-full overflow-x-auto hide-scrollbar">
            <div className="grid grid-cols-53 gap-1">
              {weekArr.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(day.contributionCount)}`}
                      title={`${day.date}: ${day.contributionCount} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <span className={`text-lg md:text-xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} animate-pulse`}>
              {contributions.totalContributions?.toLocaleString() || 0} contributions in the last year
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