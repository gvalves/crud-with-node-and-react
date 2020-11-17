import React from 'react';
import { Route } from 'react-router-dom';

import routes from '../routes';

const Scene: React.FC = () => {
  return (
    <>
      {routes.map((route) => {
        return (
          <Route
            key={route.id}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
      })}
    </>
  );
};

export default Scene;
