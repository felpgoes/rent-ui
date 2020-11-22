import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { Creators as AuthActions } from '../store/ducks/auth';
// import { Container } from './styles';
import LoadingIcon from '../components/Icons/LoadingIcon';

import {
  isAccessTokenValid,
  getUserData,
  getTokenData,
} from '../services/auth';

const ProtectedRoute = ({
  component: Component,
  isPrivate,
  roles,
  ...rest
}) => {
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!loggedIn && isPrivate) {
    if (getUserData() && isAccessTokenValid() && getTokenData()) {
      dispatch(AuthActions.signInSuccess(getTokenData(), getUserData()));

      return <LoadingIcon />;
    }

    // if (process.env.NODE_ENV === 'development') {
    //   return <Redirect to="/novo/login" />;
    // }

    // window.location.replace(`${REACT_APP_MOVCAD_LEGACY}/Login.aspx`);
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isPrivate === loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
