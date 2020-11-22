import styled, { css } from 'styled-components';

import Input from '../../atoms/Input';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    height: 100px;

    svg {
        cursor: pointer;
    }
`;
export const PagePrevious = styled.div``;
export const PageNext = styled.div``;
export const PageAtual = styled(Input).attrs((props) => ({
    width: props.width,
    height: props.height,
    handleChange: props.handleChange,
    handleInputKeyDown: props.handleInputKeyDown,
}))`
    width: 45px;
    justify-content: center;
    height: 40px;
    align-items: center;

    ${({ textAlign }) =>
        textAlign
            ? css`
                  text-align: ${textAlign};
              `
            : ''}
`;
export const PageSize = styled.div``;
export const PaginationTotal = styled.div`
    text-align: left;
    font: normal 14px 'Calibri';
    letter-spacing: 0.52px;
    opacity: 1;
    letter-spacing: 0.52px;
    color: #a1a1a1;
`;
export const PaginationAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        margin: 0 10px;
    }

    span {
        color: #a1a1a1;
    }
`;
