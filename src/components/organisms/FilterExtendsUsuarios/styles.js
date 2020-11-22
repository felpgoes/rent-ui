import styled, { css } from 'styled-components';

export const ComboDatePicker = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    p {
        margin: 15px;
    }
`;

export const Container = styled.div`
    width: 100%;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;

    ${({ isOpen }) =>
        isOpen
            ? css`
                  height: auto;
                  opacity: 1;
              `
            : css`
                  height: 0px;
                  opacity: 0;
                  display: none;
              `}
`;
