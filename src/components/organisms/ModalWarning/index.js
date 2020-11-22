import React from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';

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

function ModalWarning({ isOpen, onClick, text, alert }) {
  let height = '385';
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
          overflow="hidden"
          maxHeight="none"
          isModalWithWarning={isModalWithWarning}
        >
          <Container>
            <RiErrorWarningLine color={theme.yellowDefault} size="100" />
            <TextSucesso text="atenção!" />
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

export default ModalWarning;
