import React from 'react';
import { Text } from '../../atoms/Text';
import ButtonConfirm from '../../atoms/ButtonConfirm';
import ErrorImage from '../../../assets/icons/errorBoundary.svg';
import theme from '../../../styles/theme';
import { TextErrorContainer, TextIconContainer, Container } from './styles';

function Error({ error, errorNumber, errorMessage, errorTitle }) {
  function handleClick() {
    window.location.reload(true);
  }

  return (
    <Container>
      <TextIconContainer>
        <TextErrorContainer>
          <Text
            bold
            text="erro"
            font="normal 34px unimed_slabbold"
            style={{
              marginBottom: 8,
              color: theme.colorGray,
            }}
            center
          />
          <Text
            center
            bold
            text={errorNumber}
            font="normal 100px unimed_slabbold"
            style={{
              marginBottom: 8,
              color: theme.colorGray,
            }}
          />
        </TextErrorContainer>

        <img src={ErrorImage} alt="error" />
      </TextIconContainer>

      <Text
        marginTop="20px"
        bold
        text={errorTitle}
        font="Bold 30px calibri"
        style={{
          lineHeight: '49px',
          marginBottom: 5,
          color: theme.titleGray,
        }}
      />
      <Text
        huge
        center
        text={errorMessage}
        font="Normal 300 17px Calibri"
        style={{
          marginBottom: 6,
          padding: 10,

          width: '711px',
          color: theme.colorGray,
        }}
      />
      <ButtonConfirm
        justifyCenter
        width="182px"
        text="recarregar a página"
        fontSize="18px"
        onClick={handleClick}
      />
    </Container>
  );
}

export default Error;
