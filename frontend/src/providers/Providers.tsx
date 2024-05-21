import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import store from 'store';
import ThemeProvider from './ThemeProvider';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default Providers;
