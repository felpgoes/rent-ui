import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: ${theme.transparent};
    transition: all 0.3s ease;
    cursor: pointer;

    ${({ menu }) =>
        menu
            ? css`
                  transform: rotate(360deg);
              `
            : ``}
    ${({ Size }) =>
        Size
            ? css`
                  height: ${Size}px;
                  width: ${Size}px;
              `
            : `  height: 36px;
                 width: 36px;
            `}

  ${({ isCollapsed, menu }) =>
        isCollapsed && !menu
            ? css`
                  transform: rotate(180deg);
              `
            : isCollapsed && menu
            ? css`
                  transform: rotate(180deg);
              `
            : ''}


  img {
        height: 10px;
        width: 12px;
    }
`;
