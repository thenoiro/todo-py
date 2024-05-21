import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import themes from 'styles/theme';
import useInitialTheme from 'hooks/useInitialTheme.hook';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme] = useInitialTheme();

  if (!theme) {
    return null;
  }
  return (
    <MuiThemeProvider theme={themes[theme]}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
