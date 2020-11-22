import React from 'react';

import { VscError } from 'react-icons/vsc';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../../molecules/Modal';

import ButtonConfirm from '../../atoms/ButtonConfirm';
import theme from '../../../styles/theme';

import { Container, ContentText, Message } from './styles';

function ModalError({ isOpen, onClick, text }) {
  return (
    <Modal isOpen={isOpen} onClick={onClick} height="345" width="460">
      <ModalHeader justifyContent="flex-end" />
      <ModalContentWrapper>
        <ModalContent overflow="hidden" maxHeight="none">
          <Container>
            <VscError color="#ED1651" size="100" />
            <Message text="erro!" />
            <ContentText>{text} </ContentText>
            <ButtonConfirm
              onClick={onClick}
              text="ok"
              marginBottom="30px"
              display="block"
              background="#ED1651"
              border="#ED1651"
              type="button"
            />
          </Container>
        </ModalContent>
      </ModalContentWrapper>
      <ModalFooter />
    </Modal>
  );
}

export default ModalError;
