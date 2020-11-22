import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #808080;

    div {
        justify-content: flex-end;
    }

    ${({ border }) =>
        border
            ? css`
                  border: ${border};
              `
            : `border: 1px solid #c1bbbb`};

    ${({ background }) =>
        background
            ? css`
                  background: ${background};
              `
            : `background: ${theme.inputBackgroundGray} 0% 0% no-repeat padding-box`};

    ${({ borderRadius }) =>
        borderRadius
            ? css`
                  border-radius: ${borderRadius};
              `
            : `border-radius: 5px`};

    ${({ opacity }) =>
        opacity
            ? css`
                  opacity: ${opacity};
              `
            : `opacity: 1`};

    ${({ color }) =>
        color
            ? css`
                  color: ${color};
              `
            : `color: ${theme.inputColorGray}`};

    ${({ font }) =>
        font
            ? css`
                  font: ${font};
              `
            : `font: 15px Calibri Regular`};

    ${({ textAlign }) =>
        textAlign
            ? css`
                  text-align: ${textAlign};
              `
            : `text-align: left`};

    ${({ width }) =>
        width
            ? css`
                  width: ${width}px;
              `
            : null};

    ${({ height }) =>
        height
            ? css`
                  height: ${height}px;
              `
            : null};

    @media (max-width: 768px) {
        flex: 0 1
            ${({ percentageMobile }) =>
                percentageMobile ? `${percentageMobile}%` : '100%'};
    }
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const IconContainer = styled.div`
    width: 31px;
    border-left: 1px solid #c1bbbb;
    border-top: 1px solid #c1bbbb;
    height: 29px;
    align-items: center;
    text-align: center;
    padding-top: 3px;
    background-color: #fff;
    border-radius: 0px 5px 5px 0px;
    border-bottom: 1px solid #c1bbbb;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
