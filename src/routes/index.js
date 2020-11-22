import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import ProtectedRoute from './ProtectedRoute';
import SingUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const Routes = () => {
  return (
    <>
      <Switch>
        {routes.map((r) => (
          <ProtectedRoute
            exact
            key={r.id}
            path={`${r.url}`}
            component={r.component}
            isPrivate={r.isPrivate}
          />
        ))}
        <Route exact path="/signup" component={SingUp} />
        <Route exact path="/login" component={SignIn} />
      </Switch>
    </>
  );
};

export default Routes;
