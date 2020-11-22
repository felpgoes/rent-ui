import styled from 'styled-components';

export const FileBox = styled.div`
    min-width: 560px;
    min-height: 85px;
    background: #f2f2f2 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    justify-content: center;
    display: flex;
    align-items: center;
    color: #808080;

    svg {
        margin: 10px;
        color: #505050;
        cursor: pointer;
    }

    svg:first-child {
        margin: 20px;
        height: 25px;
        width: 25px;
        color: #505050;
    }
`;

export const FileBoxHeader = styled.div`
    font: 600 14px 'Calibri';
    letter-spacing: 0.52px;
    display: flex;
    justify-content: space-between;
`;
export const FileBoxFooter = styled.div`
    font: 300 12px 'Calibri';
    letter-spacing: 0.52px;
    display: flex;
    justify-content: left;
`;

export const FileContent = styled.div`
    display: flex;
    flex-direction: column;
`;
