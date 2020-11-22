import React from 'react';

import layout07_lst from '../../../assets/modelos/LAYREPAS_007_CONTRATANTE.txt';

import theme from '../../../styles/theme';

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalContentWrapper,
    ModalFooter,
} from '../../molecules/Modal';

import ButtonBorder from '../../atoms/ButtonBorder';
import ButtonConfirm from '../../atoms/ButtonConfirm';

import { InputFile, FileContainer, Text } from '../../molecules/InputFile';

import { Container, ContentText, Content } from './styles';

function ModalFileImport({ isOpen, onClick, setListaFiles, importFiles }) {
    return (
        <Modal isOpen={isOpen} onClick={onClick}>
            <ModalHeader>importar</ModalHeader>
            <ModalContentWrapper>
                <ModalContent>
                    <Container>
                        <ContentText>
                            Realize o envio de
                            <strong> listas de movimentações em lote </strong>
                            através do envio de até <strong>
                                10
                            </strong> arquivos <strong>.txt </strong>
                            de até <strong> 5mb</strong> cada.
                        </ContentText>
                        <Content>
                            <InputFile setListaFiles={setListaFiles}>
                                <FileContainer>
                                    <Text text="Arraste seu arquivo aqui ou" />
                                    <Text
                                        text="procure em seu computador"
                                        color={theme.greenDefault}
                                    />
                                </FileContainer>
                            </InputFile>
                        </Content>
                        <ContentText>
                            Para te auxiliar, temos
                            <a
                                href={layout07_lst}
                                download="modelo-padrão-layout07.lst"
                            >
                                {' '}
                                um modelo padrão{' '}
                            </a>
                            demonstrando como as informações devem ser
                            preenchidas.
                        </ContentText>
                    </Container>
                </ModalContent>
            </ModalContentWrapper>
            <ModalFooter justifyContent="flex-end">
                <ButtonBorder
                    onClick={onClick}
                    text="cancelar"
                    justifyCenter
                    alignCenter
                />
                <ButtonConfirm
                    text="importar"
                    onClick={importFiles}
                    justifyCenter
                    alignCenter
                    disabled="true"
                    opacity="0.4"
                />
            </ModalFooter>
        </Modal>
    );
}

export default ModalFileImport;
