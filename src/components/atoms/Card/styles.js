import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
  border-radius: 2px;
  margin: 1rem;
  max-width: 1038px;
  border-radius: 10px;
  background-color: #f8f8f8;
  width: 300px;
  color: black;
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  letter-spacing: 0.32px;
  font-family: 'Roboto';
  color: ${theme.grayDefault};

  svg {
    cursor: pointer;
  }

  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : css`
          justify-content: start;
        `}

  ${({ alignItems }) =>
    alignItems
      ? css`
          align-items: ${alignItems};
        `
      : css`
          align-items: baseline;
        `}
`;
export const CardContentWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-family: 'Calibri';
`;

export const CardFooterContainer = styled.div`
  display: flex;
  padding: 20px;

  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : `justify-content: center`};

  * {
    margin: 5px;
  }
`;
