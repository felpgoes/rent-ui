import styled, { css } from 'styled-components';

export const OptionContainer = styled.ul`
    margin-top: 10px;
    margin-right: 30px;
    transform: translate(13px);
    width: calc(100% - 13px);

    /* ${(props) =>
        props.isFirst &&
        css`
            transform: translateX(-90px) !important;
        `} */
`;
export const CheckboxWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    /* transform: translate(60px); */

    div {
        margin-right: 10px;
    }
`;
export const Container = styled.div`
    width: 100%;
    border: 1px solid #d7d7d7;
    background-color: #f8f8f8;
    border-radius: 10px;
`;
