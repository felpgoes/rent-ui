import styled, { keyframes } from 'styled-components';

import { Text } from '../../atoms/Text';
import {
    ModalHeaderContainer,
    ModalContentWrapperContainer,
} from '../../molecules/Modal/styles';
import theme from '../../../styles/theme';

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    display: block;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 124px;
`;

export const ContentItem = styled.div`
    display: flex;
    align-self: center;
    height: 45px;
    width: 100%;
    padding: 15px;
    justify-content: space-between;
    margin-bottom: 5px;

    svg {
        animation: ${rotate} 2s linear infinite;
    }
`;

export const TextValidacao = styled(Text)`
    font: 13px unimed_slab;
    color: ${theme.greenDefault};
    background: ${theme.green1};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    text-align: left;
`;

export const ModalHeader = styled(ModalHeaderContainer)`
    background: ${theme.greenDefault};
    height: 49px;
    color: ${theme.bgWhite};
    border-radius: 5px 5px 0px 0px;
    align-items: center;
    padding: 0px 20px 0px 20px;
`;

export const ModalContentWrapper = styled(ModalContentWrapperContainer)`
    min-height: 0px;
    min-width: 0px;
    align-items: normal;
    height: 150px;
`;

export const ContainerIcon = styled.div``;

export const ContentText = styled.div`
    display: block;
`;
