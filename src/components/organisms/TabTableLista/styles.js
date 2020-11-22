import styled, { keyframes } from 'styled-components';

import { AiOutlineUnlock } from 'react-icons/ai';
import theme from '../../../styles/theme';

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div``;
export const ContainerEmptyContent = styled.div`
    text-align: left;
    font: 300 16px 'Calibri';
    letter-spacing: 1.12px;
    color: #5a5a5a;
    opacity: 1;

    svg {
        animation: ${rotate} 2s linear infinite;
    }
`;

export const UnlockIConContainer = styled(AiOutlineUnlock).attrs((props) => ({
    stroke: props.stroke,
}))`
    transform: scaleX(-1);
    cursor: pointer;
`;

export const HoverActions = styled.div`
    padding: 10px 10px;
    &:hover {
        background-color: ${theme.greenDefault};
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        word-break: normal;

        svg {
            color: #fff !important;

            path {
                fill: #fff !important;
            }
        }
    }
`;
