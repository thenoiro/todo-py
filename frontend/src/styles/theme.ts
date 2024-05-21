import { createTheme } from '@mui/material';
import { blue, deepOrange } from '@mui/material/colors';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const paletteLight = {
  primary: {
    light: blue[500],
    main: blue[700],
    dark: blue[900],
  },
  secondary: {
    light: deepOrange[500],
    main: deepOrange[700],
    dark: deepOrange[900],
  },
};

const paletteDark = {
  primary: {
    ...paletteLight.primary,
    light: paletteLight.primary.dark,
    dark: paletteLight.primary.light,
  },
  secondary: {
    ...paletteLight.secondary,
    light: paletteLight.secondary.dark,
    dark: paletteLight.secondary.light,
  },
};

const light = createTheme({
  palette: {
    mode: 'light',
    ...paletteLight,
  },
});

const dark = createTheme({
  palette: {
    mode: 'dark',
    ...paletteDark,
  },
});

const themes = {
  light,
  dark,
};

export default themes;
