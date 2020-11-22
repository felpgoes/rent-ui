import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';
import theme from '../../../styles/theme';

const activeClassName = 'nav-item-active';

export const NavbarContentContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 2px #0000001a;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const NavbarItemsContainer = styled.div`
  display: flex;
  max-width: 1038px;
  margin: 0;
  width: 1038px;

  a {
    &:hover {
      text-decoration: none;
    }
  }

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

export const NavbarItemContainer = styled(NavLink).attrs({ activeClassName })`
  list-style: none;
  font-size: 14px;
  font-family: 'unimed_slabregular', sans-serif;
  font-weight: 600;
  color: #5a5a5a;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;

  &:hover {
    .d {
      fill: ${theme.greenDefault};
    }
    fill: ${theme.greenDefault};
    border-bottom: 2px solid ${theme.greenDefault};
    color: ${theme.greenDefault};
  }

  svg {
    margin-right: 10px;

    cursor: pointer;
  }
`;

export const NavbarLegacyLink = styled.a`
  list-style: none;
  font-size: 14px;
  font-family: 'unimed_slabregular', sans-serif;
  font-weight: 600;

  color: #5a5a5a;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;

  &:hover {
    .d {
      fill: ${theme.greenDefault};
    }
    border-bottom: 2px solid ${theme.greenDefault};
    color: ${theme.greenDefault};
  }

  &.${activeClassName} {
    .d {
      fill: ${theme.greenDefault};
    }
    border-bottom: 2px solid ${theme.greenDefault};
    color: ${theme.greenDefault};
  }

  svg {
    margin-right: 10px;

    cursor: pointer;
  }
`;

export const DropdownContainer = styled.div`
  min-height: 1.875rem;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 10;
  margin-top: 176px;
  margin-left: 137px;

  ${({ showDropdown }) =>
    showDropdown
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

export const DropdownItens = styled(NavLink)`
  background-color: #fff;
  color: #808080;
  width: 202px;
  height: 58px;
  letter-spacing: 0.56px;
  text-decoration: none;
  display: block;
  padding: 20px 16px;

  &:hover {
    background-color: #f2faf7;
    color: #1daa7d;
  }
`;

export const NavbarItemDropdownContainer = styled.a`
  list-style: none;
  font-size: 14px;
  font-family: 'unimed_slabregular', sans-serif;
  font-weight: 600;
  color: #5a5a5a !important;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;

  &:hover {
    .d {
      fill: ${theme.greenDefault};
    }
    fill: ${theme.greenDefault};
    border-bottom: 2px solid ${theme.greenDefault};
    color: ${theme.greenDefault} !important;
  }

  svg {
    margin-right: 10px;

    cursor: pointer;
  }
`;
