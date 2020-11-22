import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1038px;
  width: 100%;
  margin-top: 3%;
`;

export const PlacePreview = styled.div`
  margin-left: 30px;

  img {
    margin-top: 10px;
    width: 50%;
    height: 50%;
    border-radius: 10px;
  }
`;

export const ProfilePic = styled.div`
  cursor: pointer;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;

export const OwnerName = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;

export const PlaceName = styled.div`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  color: black;
  cursor: pointer;
`;
