'use client';

import { useTheme } from '@/components/theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-full bg-surface" aria-hidden="true" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
