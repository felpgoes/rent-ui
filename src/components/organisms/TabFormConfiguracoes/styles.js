import styled, { css, keyframes } from 'styled-components';

import { AiOutlineUnlock } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import theme from '../../../styles/theme';

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Hr = styled.hr`
    border-color: #f2f2f2;
    opacity: 0.1;
    width: 100%;
`;
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
    ${({ type }) =>
        type === 'PendenteLiberacao'
            ? css`
                  color: ${theme.yellowDefault};
              `
            : type === 'Ativo'
            ? css`
                  color: ${theme.greenDefault};
              `
            : css``}
    transform: scaleX(-1);
    cursor: pointer;
`;

export const UnlockWarning = styled(RiErrorWarningLine)`
    color: ${theme.yellowDefault};
    width: 25px;
    height: 25px;
`;

export const CheckWarning = styled(IoIosCheckmarkCircleOutline)`
    color: ${theme.greenDefault};
    width: 25px;
    height: 25px;
`;

export const ReSendContainer = styled.div`
    margin: 30px 0 0 5px;

    ${({ display }) =>
        display
            ? css`
                  display: ${display};
              `
            : `display: flex`};
`;
