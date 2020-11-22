import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContentText = styled.div`
    font: 300 14px 'Calibri';
    color: #5a5a5a;
    padding: 27px 0;
    align-self: center;

    strong {
        font: bold 15px 'Calibri';
    }

    a,
    a:hover {
        font: bold 14px 'Calibri';
        color: #8bac2a;
        text-decoration: none;
    }
`;

export const ContentFile = styled.div`
    margin: 10px;
`;
