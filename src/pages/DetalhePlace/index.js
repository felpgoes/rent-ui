import React, { useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { Form } from '@unform/web';
import { Creators as PlaceActions } from '../../store/ducks/places';
import {
  Container,
  PlacePreview,
  ProfilePic,
  OwnerName,
  PlaceName,
} from './styles';
import TitlePage from '../../components/atoms/TitlePage';
import history from '../../services/history';

import Breadcrumbs from '../../components/molecules/Breadcrumbs';
import WrapperFlex from '../../components/molecules/WrapperFlex';
import LabelContainer from '../../components/molecules/LabelContainer';
import FadeIn from '../../components/atoms/FadeIn';
import { Text } from '../../components/atoms/Text';
import Input from '../../components/Input';
import Skeleton from '../../components/atoms/Skeleton';

function DetalhePlace({ match }) {
  const { idPlace } = match.params;
  const dispatch = useDispatch();

  const { placeById, loading } = useSelector((state) => state.places);

  useEffect(() => {
    dispatch(PlaceActions.getPlacesByIdRequest(idPlace));
  }, [idPlace, dispatch]);

  const placeParams = useMemo(
    () => ({
      name: placeById?.data?.name,
      endereco: placeById?.data?.address?.street.concat(
        `, ${placeById?.data?.address?.number}`
      ),
      bairro: placeById?.data?.address?.neighborhood,
      cidade: placeById?.data?.address?.city,
      estado: placeById?.data?.address?.state,
    }),
    [placeById]
  );

  const handleSubmit = () => {
    console.log('alog');
  };

  const redirectToUsuario = useCallback((id) => {
    history.push(`/user/${id}`);
  }, []);

  return (
    <Container>
      <FadeIn>
        <WrapperFlex justifyStart alignStart column>
          <WrapperFlex percentage={100} justifySpaceBetween alignStart>
            <TitlePage text="Detalhe espaço" />
          </WrapperFlex>
          <Breadcrumbs />
        </WrapperFlex>
        {(!isEmpty(placeById?.data) || loading) && (
          <WrapperFlex
            justifyStart
            alignCenter
            onClick={() => redirectToUsuario(placeById?.data?.owner)}
          >
            <ProfilePic>
              {loading ? (
                <Skeleton
                  height="50px"
                  width="50px"
                  marginUpDown="5"
                  marginSides="5"
                />
              ) : (
                <img
                  src={placeById?.data?.ownerImage}
                  alt="place"
                  width="220px"
                />
              )}
            </ProfilePic>
            <WrapperFlex column justifyStart alignStart>
              {loading ? (
                <Skeleton height="20px" width="100px" marginUpDown="5" />
              ) : (
                <PlaceName>{placeById?.data?.name}</PlaceName>
              )}
              {loading ? (
                <Skeleton height="20px" width="100px" marginUpDown="5" />
              ) : (
                <OwnerName>{placeById?.data?.ownerName}</OwnerName>
              )}
            </WrapperFlex>
          </WrapperFlex>
        )}
        <WrapperFlex justifyStart flexStart column />
        <WrapperFlex>
          <WrapperFlex percentage={100} justifyStart flexStart>
            {(!isEmpty(placeParams) || loading) && (
              <>
                <Form onSubmit={handleSubmit} initialData={placeParams}>
                  <WrapperFlex column justifySpaceBetween alignStart>
                    <LabelContainer text="Nome">
                      {loading ? (
                        <Skeleton height="40px" width="180px" />
                      ) : (
                        <Input name="name" disabled />
                      )}
                    </LabelContainer>
                    <LabelContainer text="Endereço">
                      {loading ? (
                        <Skeleton height="40px" width="180px" />
                      ) : (
                        <Input name="endereco" disabled />
                      )}
                    </LabelContainer>
                    <LabelContainer text="Bairro">
                      {loading ? (
                        <Skeleton height="40px" width="180px" />
                      ) : (
                        <Input name="bairro" disabled />
                      )}
                    </LabelContainer>
                    <LabelContainer text="Cidade">
                      {loading ? (
                        <Skeleton height="40px" width="180px" />
                      ) : (
                        <Input name="cidade" disabled />
                      )}
                    </LabelContainer>
                    <LabelContainer text="Estado">
                      {loading ? (
                        <Skeleton height="40px" width="180px" />
                      ) : (
                        <Input name="estado" disabled />
                      )}
                    </LabelContainer>
                  </WrapperFlex>
                </Form>
                {(!isEmpty(placeById?.data?.photos) || loading) && (
                  <PlacePreview>
                    <Text text="Fotos" type="headlineOne" />
                    {loading ? (
                      <Skeleton height="300px" width="500px" />
                    ) : (
                      <img src={placeById.data.photos[0].url} alt="place" />
                    )}
                  </PlacePreview>
                )}
              </>
            )}
          </WrapperFlex>
        </WrapperFlex>
      </FadeIn>
    </Container>
  );
}

export default DetalhePlace;
