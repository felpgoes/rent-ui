import React from 'react';

import { Text } from '../../atoms/Text';

import WrapperFlex from '../../molecules/WrapperFlex';
import InfoBox from '../../molecules/InfoBox';

import theme from '../../../styles/theme';

import { Container } from './styles';

function FormEmailSent({ email }) {
  const emailSentMessage = `Verifique a caixa de entrada do e-mail ${email} e acesse o link para criar uma nova senha.`;

  return (
    <WrapperFlex column justifyStart alignStart width="919.5px">
      <Text
        font="28px unimed_slabbold"
        color={theme.titleGray}
        text="nós te enviamos um e-mail"
        paddingLeft="60px"
        marginTop="35px"
      />
      <Text
        font="15px Calibri"
        color={theme.titleGray}
        text={emailSentMessage}
        marginLeft="60px"
        paddingTop="8px"
        paddingBottom="0"
        marginTop="0"
        marginBottom="16px"
        width="420px"
      />
      <InfoBox>
        Caso não encontre o seu e-mail de recuperação, verifique sua
        <b> lixeira</b> e <b>caixa de spam</b>.
      </InfoBox>
      <Container />
    </WrapperFlex>
  );
}

export default FormEmailSent;
