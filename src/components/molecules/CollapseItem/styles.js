import styled, { css } from 'styled-components';

import {
  Container,
  CardFooterContainer,
  CardContentWrapperContainer,
} from '../../atoms/Card/styles';

export const ContainerCollapse = styled(Container)`
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  background-color: #f8f8f8;
  margin: 10px 0px;

  ${({ isCollapsed }) =>
    isCollapsed
      ? css`
          height: auto;
        `
      : css`
          height: auto;
        `}
`;
export const CollapseHeaderContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #0000001a;
  padding-bottom: 20px;
  margin: 0px 30px;

  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : css`
          justify-content: center;
        `}

  ${({ alignItems }) =>
    alignItems
      ? css`
          align-items: ${alignItems};
        `
      : css`
          align-items: center;
        `}
   ${({ display }) =>
    display
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

              button {
    margin: 0 30px;
  }
`;
export const CollapseFooterContainer = styled(CardFooterContainer)`
  -webkit-transition: all 0.9s ease-in;
  -moz-transition: all 0.9s ease-in;
  -o-transition: all 0.9s ease-in;
  transition: all 0.9s ease-in;
`;
export const CollapseContentContainer = styled(CardContentWrapperContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  overflow: unset;

  min-height: auto;
  min-width: auto;
  max-height: unset;

  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : css`
          justify-content: center;
        `}

  ${({ alignItems }) =>
    alignItems
      ? css`
          align-items: ${alignItems};
        `
      : css`
          align-items: center;
        `}
   ${({ display }) =>
    display
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

    -webkit-transition: all 0.9s ease-in;
  -moz-transition: all 0.9s ease-in;
  -o-transition: all 0.9s ease-in;
  transition: all 0.9s ease-in;
`;
