import { ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';

import routes from 'routes';

type RouteProviderProps = {
  children: ReactNode;
};

const RouteProvider = (props: RouteProviderProps) => {
  const { children } = props;

  return (
    <>
      <RouterProvider router={routes} />
      {children}
    </>
  );
};

export default RouteProvider;
