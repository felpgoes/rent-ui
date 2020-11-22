import React from 'react';

import { FaRegCheckCircle } from 'react-icons/fa';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../../molecules/Modal';

import ButtonConfirm from '../../atoms/ButtonConfirm';
import theme from '../../../styles/theme';

import { Container, ContentText, TextSucesso, ContentWarning } from './styles';

function ModalSuccess({ isOpen, onClick, text, alert }) {
  let height = '345';
  let isModalWithWarning = false;
  if (alert) {
    isModalWithWarning = true;
    height = '436';
  }
  return (
    <Modal isOpen={isOpen} onClick={onClick} height={height} width="460">
      <ModalHeader justifyContent="flex-end" />
      <ModalContentWrapper>
        <ModalContent
          isModalWithWarning={isModalWithWarning}
          overflow="hidden"
          maxHeight="none"
        >
          <Container>
            <FaRegCheckCircle color={theme.greenDefault} size="100" />
            <TextSucesso text="sucesso!" />
            <ContentText>{text}</ContentText>
            <ContentWarning>{alert}</ContentWarning>
            <ButtonConfirm
              onClick={onClick}
              text="ok"
              marginBottom="30px"
              display="block"
            />
          </Container>
        </ModalContent>
      </ModalContentWrapper>
      <ModalFooter />
    </Modal>
  );
}

export default ModalSuccess;
