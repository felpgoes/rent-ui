import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ContentText = styled.div`
    font: normal normal normal 15px 'work_sans';
    color: ${theme.movGrey};
    align-self: center;
    margin-bottom: 30px;
    margin-top: 28px;
    text-align: center;
`;

export const Content = styled.div`
    padding: 10px;
    align-self: center;
`;
