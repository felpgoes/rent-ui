import styled, { css } from 'styled-components';

import Button from '../../atoms/Button';
import themes from '../../../styles/theme';

export const ButtonContainer = styled(Button).attrs((props) => ({
    type: props.type,
}))`
    background-color: ${themes.grey100};
    border-radius: 5px 5px 0px 0px;
    border: 1px solid ${themes.grey100};
    opacity: 1;
    width: 130px;
    height: 70px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'unimed_slabregular';
    text-align: center;
    color: #a1a1a1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 20px;

    &:hover {
        border-radius: 5px 5px 0px 0px;
        border: 1px solid #ffff;
        color: ${(props) => props.color};
        background-color: ${themes.bgWhite};
    }

    ${({ display }) =>
        display
            ? css`
                  display: ${display};
              `
            : css`
                   ;
              `}

    ${({ active }) =>
        active &&
        css`
            background: #ffff 0% 0% no-repeat padding-box;
            border-radius: 5px 5px 0px 0px;
            border: 1px solid #ffff;
            color: ${(props) => props.color};
            background-color: ${themes.bgWhite};
        `}

    ${({ defaultActive, active }) =>
        defaultActive && !active
            ? css`
                  background: #ffff 0% 0% no-repeat padding-box;
                  border-radius: 5px 5px 0px 0px;
                  border: 1px solid #ffff;
                  color: ${(props) => props.color};
                  background-color: ${themes.bgWhite};
              `
            : null}


    ${({ widthAuto }) =>
        widthAuto
            ? css`
                  width: auto;
              `
            : css`
                  width: 130px; ;
              `}
`;

export const ActionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`;

export const ContentWrapper = styled.div`
    background-color: ${themes.bgWhite};
    padding: 30px;

    ${({ display }) =>
        display
            ? css``
            : css`
                  display: none;
              `}
    ${({ maxHeight }) =>
        maxHeight
            ? css`
                  max-height: ${maxHeight};
              `
            : css`
                  max-height: 540px;
              `}

    ${({ minHeight }) =>
        minHeight
            ? css`
                  min-height: ${minHeight};
              `
            : css`
                  min-height: 540px;
              `}
    ${({ height }) =>
        height
            ? css`
                  height: ${height};
              `
            : css`
                  height: 540px;
              `}
`;

export const ContentContainer = styled.div`
    display: inline-block;
    width: 65rem;
`;
