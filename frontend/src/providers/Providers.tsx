import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from './ThemeProvider';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <BrowserRouter>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
