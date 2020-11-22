import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { Form } from '@unform/web';
import {
  AiFillHeart,
  AiOutlineCalendar,
  AiOutlineDollarCircle,
} from 'react-icons/ai';

import { Creators as UserActions } from '../../store/ducks/users';
import { Container, ProfilePic, CardStatus } from './styles';
import TitlePage from '../../components/atoms/TitlePage';

import Breadcrumbs from '../../components/molecules/Breadcrumbs';
import WrapperFlex from '../../components/molecules/WrapperFlex';
import LabelContainer from '../../components/molecules/LabelContainer';
import FadeIn from '../../components/atoms/FadeIn';
import { Text } from '../../components/atoms/Text';
import Button from '../../components/Button';
import Skeleton from '../../components/atoms/Skeleton';
import Input from '../../components/Input';

function DetalheUsuario({ match }) {
  const { idUser } = match.params;
  const dispatch = useDispatch();

  const { userById, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(UserActions.getUserByIdRequest(idUser));
  }, [idUser, dispatch]);

  const userParams = useMemo(
    () => ({
      name: userById?.data?.name,
      email: userById?.data?.email,
      username: userById?.data?.username,
      password: '',
      estado: userById?.data?.address?.state,
      pais: userById?.data?.address?.country,
    }),
    [userById]
  );

  const handleSubmit = () => {
    console.log('alog');
  };

  return (
    <Container>
      <FadeIn>
        <WrapperFlex justifyStart alignStart column>
          <WrapperFlex percentage={100} justifySpaceBetween alignStart>
            <TitlePage text="Perfil" />
          </WrapperFlex>
          <Breadcrumbs />
        </WrapperFlex>
        <WrapperFlex justifyStart alignStart>
          {(!isEmpty(userById?.data) || loading) && (
            <WrapperFlex justifyCenter alignCenter column>
              <ProfilePic>
                {loading ? (
                  <Skeleton height="150px" width="150px" marginUpDown="5" />
                ) : (
                  <img src={userById?.data?.image} alt="profile_pic" />
                )}
              </ProfilePic>
              <Button disabled>nova foto de perfil</Button>
            </WrapperFlex>
          )}
          <WrapperFlex column justifySpaceBetween flexStart marginLeft="80px">
            {!isEmpty(userParams) && (
              <>
                <Text
                  font="bold 16px/14px Calibri"
                  color="#0080ff"
                  text="Usuário"
                  paddingBottom="20"
                />
                <Form onSubmit={handleSubmit} initialData={userParams}>
                  <WrapperFlex column justifySpaceBetween alignStart>
                    <LabelContainer text="Nome">
                      {loading ? (
                        <Skeleton height="40px" width="500px" />
                      ) : (
                        <Input name="name" disabled width="500" />
                      )}
                    </LabelContainer>
                    <LabelContainer text="Email">
                      {loading ? (
                        <Skeleton height="40px" width="500px" />
                      ) : (
                        <Input name="email" disabled width="500" />
                      )}
                    </LabelContainer>
                    <LabelContainer text="Username">
                      {loading ? (
                        <Skeleton height="40px" width="500px" />
                      ) : (
                        <Input name="username" disabled width="500" />
                      )}
                    </LabelContainer>
                    <Text
                      font="bold 16px/14px Calibri"
                      color="#0080ff"
                      text="Credenciais"
                      paddingBottom="20"
                      paddingTop="20px"
                    />
                    <LabelContainer text="Password">
                      <Input
                        type="password"
                        name="password"
                        disabled
                        width="500"
                      />
                    </LabelContainer>
                  </WrapperFlex>
                </Form>
              </>
            )}
          </WrapperFlex>
          <WrapperFlex column justifyStart alignStart marginLeft="20px">
            <Text
              font="bold 16px/14px Calibri"
              color="#0080ff"
              text="Espaços"
              paddingBottom="20"
              paddingTop="20px"
            />
            <CardStatus>
              <WrapperFlex justifyStart alignStart marginLeft="20px">
                {loading ? (
                  <Skeleton height="40px" width="250px" />
                ) : (
                  <>
                    <AiFillHeart color="#0080ff" size={20} />
                    <WrapperFlex
                      column
                      justifyStart
                      alignStart
                      marginLeft="20px"
                    >
                      <strong>13</strong>
                      <p> espaços favoritados</p>
                    </WrapperFlex>
                  </>
                )}
              </WrapperFlex>
            </CardStatus>
            <CardStatus>
              <WrapperFlex justifyStart alignStart marginLeft="20px">
                {loading ? (
                  <Skeleton height="40px" width="250px" />
                ) : (
                  <>
                    <AiOutlineCalendar color="#0080ff" size={20} />
                    <WrapperFlex
                      column
                      justifyStart
                      alignStart
                      marginLeft="20px"
                    >
                      <strong>2</strong>
                      <p> espaços alugados</p>
                    </WrapperFlex>
                  </>
                )}
              </WrapperFlex>
            </CardStatus>
            <CardStatus>
              <WrapperFlex justifyStart alignStart marginLeft="20px">
                {loading ? (
                  <Skeleton height="40px" width="250px" />
                ) : (
                  <>
                    <AiOutlineDollarCircle color="#0080ff" size={20} />
                    <WrapperFlex
                      column
                      justifyStart
                      alignStart
                      marginLeft="20px"
                    >
                      <strong>R$ 1456,00</strong>
                      <p>média de alugueis pagos</p>
                    </WrapperFlex>
                  </>
                )}
              </WrapperFlex>
            </CardStatus>
          </WrapperFlex>
        </WrapperFlex>
      </FadeIn>
    </Container>
  );
}

export default DetalheUsuario;
