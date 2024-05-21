import { ReactNode } from 'react';

import ThemeProvider from './ThemeProvider';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
