import styled from 'styled-components';

import { Text } from '../../atoms/Text';
import Button from '../../atoms/Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ContentText = styled.div`
    font: 300 14px 'work_sans';
    color: #5a5a5a;
    margin-top: 28px;
    margin-bottom: 37px;
    align-self: center;

    strong {
        font: bold 15px 'work_sans';
    }

    a,
    a:hover {
        font: bold 14px 'work_sans';
        color: #8bac2a;
        text-decoration: none;
    }
`;

export const TextSucesso = styled(Text)`
    text-align: left;
    font: 34px unimed_slabbold;
    letter-spacing: 0px;
    color: #5a5a5a;
    opacity: 1;
`;

export const ButtonFooter = styled(Button)`
    width: 100px;
    height: 40px;
    display: block;
`;
