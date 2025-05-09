import { useEffect, useState } from 'react';

export  function useTheme(): [string, () => void] {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') || 'light';

    if (initialTheme === 'dark') {
      root.classList.add('dark');
      setTheme('dark');
    } else {
      root.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const isDark = root.classList.contains('dark');

    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return [theme, toggleTheme]; 
}
