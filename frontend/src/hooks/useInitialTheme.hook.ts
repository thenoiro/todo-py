import { useEffect, useState } from 'react';
import { PaletteMode } from '@mui/material';

const useInitialTheme = () => {
  const [theme, setTheme] = useState<PaletteMode|null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = media.matches;
    setTheme(isDark ? 'dark' : 'light');

    media.addEventListener('change', (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    });
  }, []);

  return [theme];
};

export default useInitialTheme;
