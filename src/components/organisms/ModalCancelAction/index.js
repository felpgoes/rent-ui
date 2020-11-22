import React from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';
import ButtonBorder from '../../atoms/ButtonBorder';
import ButtonConfirm from '../../atoms/ButtonConfirm';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../../molecules/Modal';

import theme from '../../../styles/theme';

import { Container, ContentText, TextSucesso, ButtonFooter } from './styles';

function ModalCancelAction({ isOpen, onClick, onClickOk, text, textHeader }) {
  return (
    <Modal isOpen={isOpen} onClick={onClick} height="345" width="460">
      <ModalHeader padding="10px" justifyContent="flex-end" />
      <ModalContentWrapper paddingTop="14px">
        <ModalContent>
          <Container>
            <RiErrorWarningLine color={theme.yellow} size="100" />
            <TextSucesso text={textHeader} />
            <ContentText>{text}</ContentText>
          </Container>
        </ModalContent>
      </ModalContentWrapper>
      <ModalFooter padding="0" paddingBottom="37px">
        <ButtonBorder
          onClick={onClick}
          text="cancelar"
          marginRight="14px"
          type="button"
          justifyCenter
          alignCenter
          width="121"
        />
        <ButtonConfirm
          onClick={onClickOk}
          text="sim"
          marginLeft="14px"
          type="button"
          justifyCenter
          alignCenter
          width="121"
        />
      </ModalFooter>
    </Modal>
  );
}

export default ModalCancelAction;
