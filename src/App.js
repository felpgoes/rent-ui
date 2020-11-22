import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';

import Toast from './components/molecules/Toast';
import CustomScrollBars from './components/molecules/CustomScrollBars';
import NavbarPrimary from './components/organisms/NavbarPrimary';

const App = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <>
      <CustomScrollBars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        thumbMinSize={30}
        universal
        autoHeight
        autoHeightMin={0}
        autoHeightMax={650}
      >
        {loggedIn && <NavbarPrimary />}
        <GlobalStyle />
        <Routes />
        <Toast autoClose={5000} />
      </CustomScrollBars>
    </>
  );
};

export default App;
