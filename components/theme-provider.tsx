'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme | undefined;
  toggleTheme: () => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null;
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored === 'dark' || stored === 'light' ? stored : preferredDark ? 'dark' : 'light';
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      window.localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    mounted
  }), [theme, toggleTheme, mounted]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
}
