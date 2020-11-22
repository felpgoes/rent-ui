import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: left;
  height: 80px;

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${marginBottom};
        `
      : ''}

  ${({ padding }) =>
    padding
      ? css`
          padding: ${padding};
        `
      : css`
          padding: 10.12px 16.5% 0 60px; ;
        `}
`;

export const TitlePage = styled.h1`
  color: #5a5a5a;
  font-family: 'unimed_slabbold';
  justify-content: start;
  margin-bottom: -5px;
  padding: 0;
  font-size: 54px;
`;

export const SubtitlePage = styled.span`
  font-size: 16px !important;
  color: #a1a1a1;
  line-height: 1px;
  font-family: 'unimed_slabregular' !important;
`;
