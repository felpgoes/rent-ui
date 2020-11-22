import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import theme from '../../../styles/theme';

export const SelectContratanteContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const NavbarContentContainer = styled.div`
  background-color: #0080ff;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const NavbarItemsContainer = styled.ul`
  display: flex;
  max-width: 1038px;
  min-height: 50px;
  margin: 0;
  width: 1038px;

  ${({
    justifyCenter,
    justifySpaceBetween,
    justifyEnd,
    justifyStart,
    justifySpaceAround,
    justifySpaceEvenly,
  }) =>
    justifyCenter
      ? css`
          justify-content: center;
        `
      : justifySpaceBetween
      ? css`
          justify-content: space-between;
        `
      : justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : justifySpaceAround
      ? css`
          justify-content: space-around;
        `
      : justifySpaceEvenly
      ? css`
          justify-content: space-evenly;
        `
      : justifyStart
      ? css`
          justify-content: flex-start;
        `
      : ''};

  ${({ alignStart, alignCenter, alignEnd }) =>
    alignStart
      ? css`
          align-items: flex-start;
        `
      : alignCenter
      ? css`
          align-items: center;
        `
      : alignEnd
      ? css`
          align-items: flex-end;
        `
      : ''};
`;

export const NavbarLogoContainer = styled(Link)`
  list-style: none;
  color: #ffffff;
  font-family: 'unimed_slabbold';
  font-weight: bolder;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: #ffffff;

    text-decoration: none;
  }
`;

export const NavbarItemContainer = styled.li`
  list-style: none;
  letter-spacing: 0px;
  justify-content: flex-end;
  color: #ffffff;
  font-size: 15px;
  font-family: Calibri;
  font-weight: bold;
  padding-left: 20px;

  svg {
    margin-left: 10px;
    cursor: pointer;
  }

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ``};

  ${({ paddingRight }) =>
    paddingRight
      ? css`
          padding-right: ${paddingRight}px;
        `
      : ``};

  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ``};
`;

export const NavbarLegacyLink = styled(NavLink)`
  list-style: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bolder;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ffffff;

    text-decoration: none;
  }
`;
