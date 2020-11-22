import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 2px;
  max-width: 1038px;
  border-radius: 10px;
  background-color: #f2f2f2;
  width: 100%;

  ${({ minHeight }) =>
    minHeight
      ? css`
          min-height: ${minHeight}px;
        `
      : `min-height: 300px;`};
`;

export const CardFilterContentContainer = styled.div`
  min-width: 300px;
  margin: 20px;

  ${({ minHeight }) =>
    minHeight
      ? css`
          min-height: ${minHeight};
        `
      : ``};
`;
export const CardFilterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 20px 20px 0 25px;
  letter-spacing: 0.32px;
  font-family: 'unimed_slabregular';
  font-weight: bold;
  color: #5a5a5a;
`;
export const CardFilterFooterContainer = styled.div`
  display: flex;
  padding: 20px;
  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : `justify-content: center`};

  ${({ paddingLeft }) =>
    paddingLeft
      ? css`
          padding-left: ${paddingLeft};
        `
      : ``};
  ${({ paddingTop }) =>
    paddingTop
      ? css`
          padding-top: ${paddingTop};
        `
      : ``};

  * {
    margin: 5px;
  }
`;
