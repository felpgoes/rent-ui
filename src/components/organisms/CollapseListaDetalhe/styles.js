import styled, { css, keyframes } from 'styled-components';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BsCheckCircle } from 'react-icons/bs';

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

export const UploadFileLoading = styled(AiOutlineLoading3Quarters)`
    ${({ isLoading }) =>
        isLoading
            ? css`
                  animation: ${rotate} 1s infinite;
                  color: ${theme.greenDefault};
                  margin-left: 15px;
              `
            : css`
                  display: none;
              `};
`;

export const UploadFileWarning = styled(RiErrorWarningLine)`
    color: ${theme.yellowDefault};
    margin-left: 15px;
`;

export const UploadFileSuccess = styled(BsCheckCircle)`
    color: ${theme.greenDefault};
    margin-left: 15px;
`;
