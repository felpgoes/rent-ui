import styled, { css } from 'styled-components';

import {
    Container,
    CardFooterContainer,
    CardContentWrapperContainer,
} from '../../atoms/Card/styles';

export const ContainerCollapse = styled(Container)`
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;

    ${({ isCollapsed }) =>
        isCollapsed
            ? css`
                  height: 480px;
              `
            : css`
                  height: 80px;
              `}
`;
export const CollapseHeaderContainer = styled.div`
     ${({ justifyContent }) =>
        justifyContent
            ? css`
                  justify-content: ${justifyContent};
              `
            : css`
                  justify-content: center;
              `}

    ${({ alignItems }) =>
        alignItems
            ? css`
                  align-items: ${alignItems};
              `
            : css`
                  align-items: center;
              `}
   ${({ display }) =>
        display
            ? css`
                  display: flex;
              `
            : css`
                  display: none;
              `}

`;
export const CollapseFooterContainer = styled(CardFooterContainer)`
    -webkit-transition: all 0.9s ease-in;
    -moz-transition: all 0.9s ease-in;
    -o-transition: all 0.9s ease-in;
    transition: all 0.9s ease-in;
`;
export const CollapseContentContainer = styled(CardContentWrapperContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    overflow: unset;

    ${({ justifyContent }) =>
        justifyContent
            ? css`
                  justify-content: ${justifyContent};
              `
            : css`
                  justify-content: center;
              `}

    ${({ alignItems }) =>
        alignItems
            ? css`
                  align-items: ${alignItems};
              `
            : css`
                  align-items: center;
              `}
   ${({ display }) =>
        display
            ? css`
                  display: flex;
              `
            : css`
                  display: none;
              `}

    -webkit-transition: all 0.9s ease-in;
    -moz-transition: all 0.9s ease-in;
    -o-transition: all 0.9s ease-in;
    transition: all 0.9s ease-in;
`;
