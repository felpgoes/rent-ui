import React from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../../molecules/Modal';

import theme from '../../../styles/theme';

import { Container, ContentText, TextSucesso, ButtonFooter } from './styles';

function ModalLiberarAcesso({
  isOpen,
  onClick,
  liberarAcesso,
  naoLiberarAcesso,
  isEditar,
}) {
  return (
    <Modal isOpen={isOpen} onClick={onClick} height="345" width="460">
      <ModalHeader justifyContent="flex-end" padding="15px" />
      <ModalContentWrapper>
        <ModalContent>
          <Container>
            <RiErrorWarningLine color={theme.yellowDefault} size="100" />
            <TextSucesso text="atenção!" />
            <ContentText>
              Deseja <b>liberar o acesso</b> desse usuário?
            </ContentText>
          </Container>
        </ModalContent>
      </ModalContentWrapper>
      <ModalFooter padding="15px">
        <ButtonFooter
          onClick={naoLiberarAcesso}
          text="agora não"
          background="none"
          color={theme.greenDefault}
          marginRight="10px"
          type={isEditar ? 'button' : 'submit'}
          name="modalLiberarAcesso"
        />
        <ButtonFooter
          onClick={liberarAcesso}
          text="sim"
          background={`${theme.greenDefault} 0% 0% no-repeat padding-box`}
          color={theme.bgWhite}
          marginLeft="10px"
          type={isEditar ? 'button' : 'submit'}
          name="modalLiberarAcesso"
        />
      </ModalFooter>
    </Modal>
  );
}

export default ModalLiberarAcesso;
