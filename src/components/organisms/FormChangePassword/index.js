import React, { useState, useEffect } from 'react';
import produce from 'immer';
import { useField } from '@unform/core';

import { Text } from '../../atoms/Text';

import WrapperFlex from '../../molecules/WrapperFlex';
import InputPassword from '../../molecules/InputPassword';

import theme from '../../../styles/theme';

import { isChangePassword } from '../../../utils/validation';

import { Container } from './styles';

function FormChangePassword({
  changePasswordParams,
  setChangePasswordParams,
  formRef,
  isForgottenPassword,
}) {
  const errorSenhaAntiga = useField('antigaSenha').error;
  const errorSenha = useField('novaSenha').error;
  const errorConfirmarSenha = useField('confirmarSenha').error;
  const [showOnBlurAntigaSenha, setShowOnBlurAntigaSenha] = useState(false);
  const [showOnBlurNovaSenha, setShowOnBlurNovaSenha] = useState(false);
  const [showOnBlurConfirmarSenha, setShowOnBlurConfirmarSenha] = useState(
    false
  );
  function handleInput(e, status) {
    const newChangePasswordParams = produce(changePasswordParams, (draft) => {
      if (draft[status] !== e.target.value) draft[status] = e.target.value;
    });

    setChangePasswordParams(newChangePasswordParams);
  }

  function validateAntigaSenha(e) {
    if (formRef) {
      if (!e.target.value) {
        formRef.setFieldError('antigaSenha', 'A senha é obrigatória');
      } else if (
        formRef.getFieldValue('novaSenha') &&
        e.target.value === formRef.getFieldValue('novaSenha')
      ) {
        formRef.setFieldError(
          'novaSenha',
          'A nova senha deve ser diferente da atual'
        );
      } else {
        setShowOnBlurAntigaSenha(true);
        formRef.setFieldError('antigaSenha', null);
      }
    }
  }

  function validateNovaSenha(e) {
    if (formRef) {
      if (!e.target.value) {
        formRef.setFieldError('novaSenha', 'A senha é obrigatória');
      } else if (!isChangePassword(e.target.value)) {
        formRef.setFieldError(
          'novaSenha',
          'A senha deve ter ao menos 6 caracteres e ser uma combinação de letras maiúsculas e minúsculas, números e simbolos'
        );
      } else if (
        formRef.getFieldValue('novaSenha') &&
        formRef.getFieldValue('confirmarSenha') &&
        e.target.value !== formRef.getFieldValue('confirmarSenha') &&
        e.target.value !== formRef.getFieldValue('antigaSenha')
      ) {
        setShowOnBlurNovaSenha(true);
        formRef.setFieldError('novaSenha', null);
        formRef.setFieldError('confirmarSenha', 'As senhas devem ser iguais');
      } else if (
        formRef.getFieldValue('novaSenha') &&
        formRef.getFieldValue('confirmarSenha') &&
        e.target.value === formRef.getFieldValue('confirmarSenha') &&
        e.target.value !== formRef.getFieldValue('antigaSenha')
      ) {
        setShowOnBlurNovaSenha(true);
        formRef.setFieldError('confirmarSenha', null);
        formRef.setFieldError('novaSenha', null);
      } else if (
        formRef.getFieldValue('antigaSenha') &&
        e.target.value === formRef.getFieldValue('antigaSenha')
      ) {
        formRef.setFieldError(
          'novaSenha',
          'A nova senha deve ser diferente da atual'
        );
        formRef.setFieldError('confirmarSenha', null);
      } else {
        setShowOnBlurNovaSenha(true);
        formRef.setFieldError('novaSenha', null);
      }
    }
  }

  function validateConfirmarSenha(e) {
    if (formRef) {
      if (!e.target.value) {
        formRef.setFieldError('confirmarSenha', 'A senha é obrigatória');
      } else if (!isChangePassword(e.target.value))
        formRef.setFieldError(
          'confirmarSenha',
          'A senha deve ter ao menos 6 caracteres e ser uma combinação de letras maiúsculas e minúsculas, números e simbolos'
        );
      else if (e.target.value !== formRef.getFieldValue('novaSenha'))
        formRef.setFieldError('confirmarSenha', 'As senhas devem ser iguais');
      else {
        setShowOnBlurConfirmarSenha(true);
        formRef.setFieldError('confirmarSenha', null);
      }
    }
  }

  return (
    <WrapperFlex column justifyStart alignStart width="919.5px">
      <Text
        font="28px unimed_slabbold"
        color={theme.titleGray}
        text="altere sua senha"
        paddingLeft="60px"
        marginTop="20px"
      />
      <Text
        font="normal normal normal 16px/20px Calibri"
        color={theme.titleGray}
        text="Para sua segurança, sua nova senha deve conter ao menos 6 caracteres com uma combinação de letras maiúsculas e minúsculas, números e símbolos."
        paddingLeft="60px"
        paddingRight="24.5%"
        paddingTop="8px"
        paddingBottom="0"
        marginTop="0"
      />
      <Container
        erroSenhaAntiga={errorSenhaAntiga}
        errorSenha={errorSenha}
        errorConfirmarSenha={errorConfirmarSenha}
        showOnBlurNovaSenha={showOnBlurNovaSenha}
        showOnBlurConfirmarSenha={showOnBlurConfirmarSenha}
        showOnBlurAntigaSenha={showOnBlurAntigaSenha}
      >
        <InputPassword
          handleChange={(e) => handleInput(e, 'antigaSenha')}
          marginTop="8px"
          width="400"
          height="40"
          placeholder="Insira sua senha atual"
          name="antigaSenha"
          labelName="Senha"
          marginLeft="60px"
          marginBottom="0"
          value={changePasswordParams.antigaSenha}
          isLogin
          errorSenha={errorSenhaAntiga}
          handleInputOnBlur={validateAntigaSenha}
          display={isForgottenPassword ? 'none' : false}
        />
        <InputPassword
          handleChange={(e) => handleInput(e, 'novaSenha')}
          marginTop="8px"
          width="400"
          height="40"
          placeholder="Insira sua senha"
          name="novaSenha"
          labelName="Nova senha"
          marginLeft="60px"
          marginBottom="0"
          value={changePasswordParams.novaSenha}
          isLogin
          errorSenha={errorSenha}
          handleInputOnBlur={validateNovaSenha}
        />
        <InputPassword
          handleChange={(e) => handleInput(e, 'confirmarSenha')}
          marginTop="8px"
          width="400"
          height="40"
          placeholder="Insira sua senha"
          name="confirmarSenha"
          labelName="Confirmar senha"
          marginLeft="60px"
          marginBottom="0"
          value={changePasswordParams.confirmarSenha}
          isLogin
          errorSenha={errorConfirmarSenha}
          handleInputOnBlur={validateConfirmarSenha}
        />
      </Container>
    </WrapperFlex>
  );
}

export default FormChangePassword;
