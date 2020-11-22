import styled from 'styled-components';
import { lighten } from 'polished';

import theme from '../../../styles/theme';

export const ImageWrapper = styled.div``;

export const ContentTextWrapper = styled.div``;

export const ContentText = styled.div`
    font: normal normal 600 17px 'unimed_slabsemibold';
    color: ${theme.grey};
    text-align: center;
    letter-spacing: 0px;
`;

export const Container = styled.div`
    display: block;
    background-color: ${theme.grey210};
    height: 160px;
    width: 160px;
    text-align: -webkit-center;
    padding: 25px;
    margin: 12px;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;

    &:hover {
        background-color: ${lighten(0.68, theme.greenDefault)};
        div {
            cursor: pointer;
            color: ${theme.greenDefault};
        }

        svg {
            fill: ${theme.greenDefault};
        }
    }
`;
