import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
  width: 832px;
  min-height: 140px;
  height: auto;
  background: ${theme.grey100} 0% 0% no-repeat padding-box;
  border: 1px solid ${theme.grey300};
  border-radius: 8px;
  opacity: 1;
  padding-bottom: 5px;

  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''}

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop};
        `
      : ''}

${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ''}
            ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ''}
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''}

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ''}
    &:hover {
    background: ${theme.greenDefault} 0% 0% no-repeat padding-box;
    svg {
      color: ${theme.bgWhite} !important;

      path {
        fill: ${theme.bgWhite} !important;
      }
    }
  }
`;

export const IconContainer = styled.div`
  ${({ margin }) =>
    margin
      ? css`
          margin: ${margin};
        `
      : ''}
`;

export const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
  transition: transform 1s;
`;

export const HeaderIconsContainer = styled.div`
  display: flex;
`;

export const CardContratantesContentContainer = styled.div`
  margin-left: 16px;
  transition: transform 1s;
`;

export const CardContratantesHeaderContainer = styled.div`
  transition: transform 1s;
  display: block;
  justify-content: space-between;
  align-items: left;
  padding: 10px 0px 10px 0px;
  letter-spacing: 0.32px;
  font: 15px unimed_slabsemibold;
  color: ${theme.grey410};
  border-bottom: solid;
  border-width: thin;
  border-color: ${theme.grey210};
  margin: 0px 16px 0px 16px;
`;
