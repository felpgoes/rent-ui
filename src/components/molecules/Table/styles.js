import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.table`
  margin-bottom: 1rem;
  background-color: #fff;
  border-radius: 0px 5px 5px 5px;
  opacity: 1;
  width: 100%;

  @media (max-width: 767.98px) {
    display: block;
    width: 100%;
  }
`;

export const THead = styled.thead`
  text-align: left;
  font: Bold 16px 'Calibri';
  letter-spacing: 1.12px;
  color: #5a5a5a;
  opacity: 1;
`;
export const TBody = styled.tbody`
  text-align: left;
  font: 300 13px Calibri;
  letter-spacing: 0.56px;
  color: #808080;
  opacity: 1;
  min-height: 312px;

  tr:hover {
    background-color: #f5f5f5;
  }
`;

export const Tr = styled.tr`
  th,
  td {
    border-bottom: 1px solid #eee;
    height: 60px;
    padding: 4px 10px;
    white-space: pre-wrap;
    word-break: break-word;
  }
  ${({ isClickable }) =>
    isClickable
      ? css`
          cursor: pointer;
        `
      : css``};
`;

export const LinkContainer = styled.div`
  ${({ activeAction }) =>
    activeAction
      ? css`
          &:hover {
            color: ${theme.greenDefault};
            text-decoration: underline;
            font-weight: bold;
            cursor: pointer;
            /* font-family: 'unimed_slabbold'; */
            /* font-size: 12px; */
          }
          color: ${theme.greenDefault};
          /* font-family: 'unimed_slabregular';
                  font-size: 12px; */
          &:active {
            color: ${theme.greenPressed};
          }
        `
      : css``};
`;

export const Th = styled.th`
  min-width: 100px;
  max-width: 120px;
  position: sticky;
  top: 0;
  background: white;

  ${({ widthAuto }) =>
    widthAuto
      ? css`
          min-width: 0 !important;
          width: 0 !important;
        `
      : css``};
`;

export const Td = styled.td.attrs((props) => ({
  colspan: props.colspan,
}))`
  min-width: 100px;
  max-width: 100px;

  ${({ widthAuto }) =>
    widthAuto
      ? css`
          min-width: 0 !important;
          width: 0 !important;
        `
      : css``};

  ${({ padding }) =>
    padding
      ? css`
          padding: ${padding}px;
        `
      : ``};
`;
