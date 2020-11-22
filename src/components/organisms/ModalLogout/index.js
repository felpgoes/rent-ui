import React from 'react';

import { FaDoorOpen } from 'react-icons/fa';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalContentWrapper,
    ModalFooter,
} from '../../molecules/Modal';

import theme from '../../../styles/theme';

import { Container, ContentText, TextSucesso, ButtonFooter } from './styles';

function ModalLogout({ isOpen, onClick, logOut }) {
    return (
        <Modal isOpen={isOpen} onClick={onClick} height="345" width="460">
            <ModalHeader justifyContent="flex-end" padding="15px" />
            <ModalContentWrapper>
                <ModalContent>
                    <Container>
                        <FaDoorOpen color={theme.greenDefault} size="100" />
                        <TextSucesso text="log out" />
                        <ContentText>Você deseja sair do sistema?</ContentText>
                    </Container>
                </ModalContent>
            </ModalContentWrapper>
            <ModalFooter>
                <ButtonFooter
                    onClick={onClick}
                    text="cancelar"
                    background="none"
                    color={theme.greenDefault}
                    marginRight="10px"
                />
                <ButtonFooter
                    onClick={logOut}
                    text="sair"
                    background={`${theme.greenDefault} 0% 0% no-repeat padding-box`}
                    color={theme.bgWhite}
                    marginLeft="10px"
                />
            </ModalFooter>
        </Modal>
    );
}

export default ModalLogout;
