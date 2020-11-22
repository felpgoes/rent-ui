import React, { useState, useEffect } from 'react';

import { Text } from '../../atoms/Text';
import InfoBox from '../../molecules/InfoBox';

import WrapperFlex from '../../molecules/WrapperFlex';
import InputForm from '../../molecules/InputForgottenPassword';
import FormEmailSent from '../FormEmailSent';

import theme from '../../../styles/theme';
import { isEmail } from '../../../utils/validation';

import { Container } from './styles';

function FormForgottenPassword({
  isEmailSent,
  setIsEmailValid,
  isTokenError,
  queryEmail,
}) {
  const [inputValue, setInputValue] = useState('');

  function isValidEmail(email) {
    return isEmail(email);
  }

  function handleInputValue(e) {
    setInputValue(e.target.value);
    setIsEmailValid(isValidEmail(e.target.value));
  }
  useEffect(() => {
    if (inputValue) {
      setIsEmailValid(isValidEmail(inputValue));
    }
  }, [inputValue]);

  useEffect(() => {
    setInputValue(queryEmail);
  }, []);

  return (
    <>
      {isEmailSent ? (
        <FormEmailSent email={inputValue} />
      ) : (
        <WrapperFlex column justifyStart alignStart width="919.5px">
          <Text
            font="28px unimed_slabbold"
            color={theme.titleGray}
            text="esqueceu sua senha?"
            paddingLeft="60px"
            marginTop="35px"
          />

          <Text
            font="normal normal normal 16px/20px Calibri"
            color={theme.titleGray}
            text="Por favor informe o seu endereço de e-mail abaixo. Você receberá um link para redefinir sua senha."
            paddingLeft="60px"
            paddingTop="8px"
            paddingBottom="0"
            marginTop="0"
            width="415px"
          />
          <InfoBox
            display={isTokenError ? null : 'none'}
            error
            marginTop="16px"
          >
            O link para redefinição de senha é <b>inválido</b>. Solicite um novo
            para prosseguir com a solicitação.
          </InfoBox>
          <Container>
            <InputForm
              handleChange={handleInputValue}
              marginTop="16px"
              width="400"
              height="40"
              placeholder="Insira seu e-mail"
              name="email"
              labelName="E-mail"
              marginLeft="60px"
              value={inputValue}
            />
          </Container>
        </WrapperFlex>
      )}
    </>
  );
}

export default FormForgottenPassword;
