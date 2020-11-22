import styled from 'styled-components';

import theme from '../../../styles/theme';

export const BadgesContainer = styled.div`
    display: flex;
    font-size: 12px;
    color: #ffff;
    background-color: ${theme.greenDefault};
    border-radius: 5px;
    text-align: left;
    align-items: center;
    align-content: baseline;
    justify-content: space-between;
    padding: 5px;
    min-height: 30px;
    max-width: 200px;
    svg {
        cursor: pointer;
    }
`;

export const BadgesHeaderContainer = styled.span`
    font-family: 'unimed_slabbold';
    padding-right: 4%;
    text-align: center;
`;

export const BadgesContentContainer = styled.span`
    float: right;
    font-size: 13px;
    max-width: 80px;
    word-break: break-word;

    display: block;
`;
