import React from 'react';

import {
  Container,
  ProfilePic,
  OwnerName,
  PlaceName,
  PlaceImage,
} from './styles';
import { Card, CardHeader, CardContent, CardFooter } from '../atoms/Card';
import WrapperFlex from '../molecules/WrapperFlex';
import Button from '../Button';

import Skeleton from '../atoms/Skeleton';

function Cards({ place, onClick, loading }) {
  return (
    <Card>
      <CardHeader>
        <WrapperFlex justifyStart alignCenter>
          <ProfilePic>
            {loading ? (
              <Skeleton
                height="50px"
                width="50px"
                marginUpDown="5"
                marginSides="5"
              />
            ) : (
              <img src={place.ownerimage} alt="place" width="220px" />
            )}
          </ProfilePic>
          <WrapperFlex column justifyStart alignStart>
            {loading ? (
              <Skeleton height="20px" width="100px" marginUpDown="5" />
            ) : (
              <PlaceName>{place.name}</PlaceName>
            )}
            {loading ? (
              <Skeleton height="20px" width="100px" marginUpDown="5" />
            ) : (
              <OwnerName>{place.ownername}</OwnerName>
            )}
          </WrapperFlex>
        </WrapperFlex>
      </CardHeader>
      <CardContent>
        <PlaceImage>
          {loading ? (
            <Skeleton height="200px" width="200px" marginUpDown="5" />
          ) : (
            <img src={place.url} alt="place" width="220px" />
          )}
        </PlaceImage>
      </CardContent>
      <CardFooter>
        <Button disabled={loading} onClick={onClick}>
          ver detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Cards;
