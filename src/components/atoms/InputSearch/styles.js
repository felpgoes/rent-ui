import styled from 'styled-components';

import theme from '../../../styles/theme';

import Input from '../Input';

export const Container = styled.input`
    width: 100%;
    height: 40px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;

    text-align: left;
    font: 13px Calibri Regular;
    letter-spacing: 0.52px;
    color: #a1a1a1;

    padding-left: 50px;

    border: #a1a1a1 solid 0px;
    outline: none;

    &:focus {
        border: ${theme.greenDefault} solid 2px;
    }

    ::placeholder {
        font: 13px Calibri Regular;
        letter-spacing: 0.52px;
        color: #a1a1a1;
    }
`;

export const InputSearchContainer = styled.div`
    max-width: calc(100% - 100px);
    width: calc(100% - 100px);
    position: relative;
    display: inline-block;

    text-align: center;

    svg {
        position: absolute;
        margin: 10px;
        margin-left: 20px;
    }
`;
