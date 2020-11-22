import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1038px;
  width: 100%;
  margin-top: 3%;
`;

export const ProfilePic = styled.div`
  img {
    border-radius: 10px;
    width: 150px;
    height: 150px;
  }
`;

export const CardStatus = styled.div`
  background: #cccccc;
  border-radius: 10px;
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  p {
    color: black;
  }

  strong {
    font-family: 'Roboto';
    color: black;
  }
`;
