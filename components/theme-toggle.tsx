'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/components/theme-provider';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-5h1v3h-1zM12 19h1v3h-1zM4.22 4.93l.7-.7 2.12 2.12-.7.7zM16.95 17.66l.7-.7 2.12 2.12-.7.7zM2 11h3v1H2zM19 11h3v1h-3zM4.22 19.07l2.12-2.12.7.7-2.12 2.12zM16.95 6.34l2.12-2.12.7.7-2.12 2.12z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20.74 14.35A8.5 8.5 0 1110.65 4.26a7 7 0 1010.09 10.09z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">{isDark ? 'Light mode' : 'Dark mode'}</span>
    </button>
  );
}
