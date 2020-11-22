import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

import { MdInput } from 'react-icons/md';
import { Creators as AuthActions } from '../../../store/ducks/auth';
import {
  NavbarContentContainer,
  NavbarLegacyLink,
  NavbarItemsContainer,
  NavbarItemContainer,
} from './styles';
import { excludeData } from '../../../services/auth';
import history from '../../../services/history';

import { Text } from '../../atoms/Text';

import theme from '../../../styles/theme';

const { REACT_APP_MOVCAD_LEGACY } = process.env;

function NavbarPrimary() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  function handleSignOut() {
    dispatch(AuthActions.signOut());
    excludeData();
  }

  return (
    <>
      <NavbarContentContainer>
        <NavbarLegacyLink to="/home">Rent aí</NavbarLegacyLink>
        <NavbarItemsContainer justifyEnd alignCenter>
          <NavbarItemContainer marginRight="92px" marginLeft="43px">
            {user.name}
            <MdInput onClick={handleSignOut} size="20" />
          </NavbarItemContainer>
        </NavbarItemsContainer>
      </NavbarContentContainer>
    </>
  );
}

export default NavbarPrimary;
