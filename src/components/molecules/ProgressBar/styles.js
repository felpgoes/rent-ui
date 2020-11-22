import styled from 'styled-components';

export const Container = styled.div`
    height: 6px;
    width: 441px;
    background-color: #e0e0de;
    border-radius: 50px;
    margin: 5px;
`;
export const FileContainer = styled.div`
    height: 100%;
    width: ${(props) => props.completed}%;
    background-color: #b1d34b;
    border-radius: 50px;
    text-align: right;
    transition: width 1s ease-in-out;
`;

export const CounterContainer = styled.span`
    padding: 5px;
    color: white;
    font-weight: bold;
`;
