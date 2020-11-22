import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { ImPencil } from 'react-icons/im';
import produce from 'immer';

import { useField } from '@unform/core';
import theme from '../../../styles/theme';

import { Text } from '../../atoms/Text';
import InputPassword from '../../molecules/InputPassword';
import InputForm from '../../atoms/InputForm';
import WrapperFlex from '../../molecules/WrapperFlex';

import { Container, ChangePasswordContainer } from './styles';

function SenhaBox({
  params,
  setParams,
  errorSenha,
  errorNovaSenha,
  errorConfirmacaoSenha,
  paddingRight,
  eyeWidth,
}) {
  const [newPassword, setNewPassword] = useState(false);
  const handleChangePassword = () => {
    setNewPassword(!newPassword);
  };
  function handleInput(e) {
    const { name, value } = e.target;

    const newParams = produce(params, (draft) => {
      draft[name] = value;
    });

    setParams(newParams);
  }

  return (
    <Container>
      <WrapperFlex column>
        <InputPassword
          handleChange={(e) => handleInput(e)}
          marginTop="9"
          width="400"
          height="40"
          placeholder="Insira sua senha"
          name="senha"
          labelName="Senha"
          value={params.senha}
          isLogin
          errorSenha={errorSenha}
          paddingRight={paddingRight}
          eyeWidth={eyeWidth}
        />

        <ChangePasswordContainer
          onClick={handleChangePassword}
          display={!newPassword ? 'flex' : 'none'}
        >
          <ImPencil color={theme.green1} size="16" />
          <Text
            font="14px regular work_sans"
            color={theme.green1}
            marginLeft="12px"
            text="alterar senha"
          />
        </ChangePasswordContainer>
        {newPassword ? (
          <>
            <InputPassword
              labelName="Nova senha"
              handleChange={(e) => handleInput(e)}
              placeholder="Insira a nova senha"
              name="novaSenha"
              value={params.novaSenha}
              isLogin
              width="400"
              height="40"
              errorSenha={errorNovaSenha}
              paddingRight={paddingRight}
              eyeWidth={eyeWidth}
            />
            <InputPassword
              labelName="Confirmação nova senha"
              handleChange={(e) => handleInput(e)}
              placeholder="Insira a confirmação da nova senha"
              name="confirmacaoSenha"
              value={params.confirmacaoSenha}
              isLogin
              width="400"
              height="40"
              errorSenha={errorConfirmacaoSenha}
              paddingRight={paddingRight}
              eyeWidth={eyeWidth}
            />
          </>
        ) : null}
      </WrapperFlex>
    </Container>
  );
}

export default SenhaBox;
