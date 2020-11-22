import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
    display: flex;
    margin-bottom: 35px;
    text-align: left;

    span,
    span:hover {
        font: Bold 12px/14px Calibri;
        letter-spacing: 0.48px;
        color: #a1a1a1;
        text-decoration: none; /* no underline */
    }

    span:hover {
        color: #5a5a5a;
        cursor: pointer;
    }

    div:first-child {
        span:first-child {
            font-weight: ${theme.fontBold};
        }
    }

    div:last-child {
        span:last-child {
            display: none;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Separator = styled.span`
    margin: 5px;
    font-size: 14px;
    font-weight: ${theme.fontRegular};
`;
