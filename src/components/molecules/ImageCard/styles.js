import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    transition: all 0.2s ease;

    ${({ borderRadius }) =>
        borderRadius
            ? css`
                  border-radius: ${borderRadius}px;
              `
            : 'border-radius: 8px'}

    ${({ height }) =>
        height
            ? css`
                  height: ${height}px;
              `
            : 'height: 135px'}

    ${({ width }) =>
        width
            ? css`
                  width: ${width}px;
              `
            : 'width: 250px'}

  ${({ disabled }) =>
        !disabled
            ? css`
                  &:hover {
                      cursor: pointer;
                  }
              `
            : ''}

  ${({ translucent }) =>
        translucent
            ? css`
                  opacity: 0.5;
              `
            : ''}

      ${({ marginBottom }) =>
        marginBottom
            ? css`
                  margin-bottom: ${marginBottom}px;
              `
            : ''}

  img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        margin: auto;
    }

    @media (max-width: 768px) {
        height: 72px;
        width: 156px;
    }
`;
