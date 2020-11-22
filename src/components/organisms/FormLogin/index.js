import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import produce from 'immer';
import { useField } from '@unform/core';

import WrapperFlex from '../../molecules/WrapperFlex';
import LabelContainer from '../../molecules/LabelContainer';
import InputPassword from '../../molecules/InputPassword';

import InputFormLogin from '../../atoms/InputFormLogin';

import { isEmail } from '../../../utils/validation';

import { AutenticacaoActionsDescription, Container } from './styles';

function FormLogin({ loginParams, setLoginParams, formRef, marginTop }) {
  const { postLogin } = useSelector((state) => state.auth);
  const errorUsuario = useField('usuario').error;
  const errorSenha = useField('senha').error;
  const [isInvalid, setIsInvalid] = useState(false);
  const [showOnBlur, setShowOnBlur] = useState(false);
  function handleInput(e, status) {
    const newLoginParams = produce(loginParams, (draft) => {
      if (draft[status] !== e.target.value) draft[status] = e.target.value;
    });

    setLoginParams(newLoginParams);
  }

  function validateUsuario(e) {
    if (formRef) {
      setShowOnBlur(true);
      if (!e.target.value) {
        formRef.setFieldError('usuario', 'O e-mail é obrigatório');
      } else if (!isEmail(e.target.value))
        formRef.setFieldError('usuario', 'E-mail inválido');
      else {
        formRef.setFieldError('usuario', null);
      }
    }
  }

  useEffect(() => {
    if (postLogin.error && postLogin.error.status === 403) {
      formRef.setFieldError('senha', 'Problemas na autenticação.');
      formRef.setFieldError('usuario', ' ');
    } else if (postLogin.error) {
      formRef.setFieldError(
        'senha',
        'Usuario ou Senha incorreta. Tente novamente.'
      );
      formRef.setFieldError('usuario', ' ');
    }
  }, [postLogin.error]);

  useEffect(() => {
    if (loginParams.usuario) setShowOnBlur(true);
  }, [loginParams.usuario]);

  return (
    <>
      <WrapperFlex column justifyStart alignStart width="924.5px">
        <Container errorUsuario={errorUsuario} errorSenha={errorSenha}>
          <LabelContainer
            text="Usuário"
            marginBottom={errorUsuario ? '22' : '24'}
            marginLeft="60px"
            isInvalid={isInvalid}
            marginTop={marginTop}
          >
            <InputFormLogin
              handleChange={(e) => handleInput(e, 'usuario')}
              marginTop="9px"
              width="400"
              height="40"
              placeholder="Insira seu e-mail"
              name="usuario"
              value={loginParams.usuario}
              errorUsuario={errorUsuario}
              handleInputOnBlur={validateUsuario}
              showOnBlur={showOnBlur}
            />
          </LabelContainer>
          <InputPassword
            handleChange={(e) => handleInput(e, 'senha')}
            marginTop="9"
            width="400"
            height="40"
            placeholder="Insira sua senha"
            name="senha"
            labelName="Senha"
            marginLeft="60px"
            marginBottom={errorSenha ? '22' : '30'}
            value={loginParams.senha}
            isLogin
            errorSenha={errorSenha}
          />
        </Container>
      </WrapperFlex>
      {/* <WrapperFlex row justifyEnd alignEnd>
                <AutenticacaoActionsDescription>
                    esqueci minha senha
                </AutenticacaoActionsDescription>
            </WrapperFlex> */}
    </>
  );
}

export default FormLogin;
