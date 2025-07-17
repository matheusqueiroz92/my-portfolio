"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      aria-label="Alternar tema"
    >
      <span className="sr-only">Alternar tema</span>

      {/* Track background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 transition-all duration-300" />

      {/* Icons on track */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <Sun className="w-3.5 h-3.5 text-yellow-500 transition-all duration-300" />
        <Moon className="w-3.5 h-3.5 text-blue-400 transition-all duration-300" />
      </div>

      {/* Sliding handle */}
      <div
        className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ease-out ${
          theme === "light" ? "left-0.5" : "left-7"
        }`}
      >
        {/* Handle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-slate-100 shadow-inner" />

        {/* Handle icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {theme === "light" ? (
            <Sun className="w-3 h-3 text-yellow-500" />
          ) : (
            <Moon className="w-3 h-3 text-blue-500" />
          )}
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </button>
  );
}
