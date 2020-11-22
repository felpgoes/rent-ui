import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
    cursor: pointer;
    ${({ display }) =>
        display
            ? css`
                  display: ${display};
              `
            : 'display: flex'}
`;

export const RoundBox = styled.div`
    border-radius: 50%;
    border: 2px solid;
    border-color: ${theme.greenDefault};
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ disabled }) =>
        disabled
            ? css`
                  border-color: ${theme.grey300};
              `
            : ''}

    ${({ background }) =>
        background
            ? css`
                  background-color: ${background};
              `
            : ''}
`;
