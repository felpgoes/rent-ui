import React from 'react';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { FaSpinner, FaRegCheckCircle } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

import { Modal, ModalContent, ModalFooter } from '../../molecules/Modal';

import theme from '../../../styles/theme';

import { Text } from '../../atoms/Text';

import {
    Container,
    ContentItem,
    ContentText,
    ContainerIcon,
    TextValidacao,
    ModalHeader,
    ModalContentWrapper,
} from './styles';

function ModalValidationLoading({ isOpen, onClick, isLoading, isSuccess }) {
    let showValidation;
    if (isLoading) {
        showValidation = <ValidationLoading />;
    } else if (isSuccess) {
        showValidation = <ValidationSuccess />;
    } else {
        showValidation = <ValidationError />;
    }
    return (
        <Modal
            isOpen={isOpen}
            onClick={onClick}
            height="201px"
            width="300px"
            borderRadius="5px"
            havingBackground={false}
            top={80}
            left={87}
        >
            <ModalHeader>
                validação de listas
                <ContainerIcon>
                    <RiArrowDropDownLine size="30" onClick={onClick} />
                    <MdClose size="20" onClick={onClick} />
                </ContainerIcon>
            </ModalHeader>
            <ModalContentWrapper>
                <ModalContent>{showValidation}</ModalContent>
            </ModalContentWrapper>
            <ModalFooter padding="0" />
        </Modal>
    );
}

function ValidationLoading() {
    return (
        <>
            <TextValidacao text="2 arquivos em validação" />
            <Container>
                <ContentItem>
                    <ContentText>
                        <Text
                            text="movcad.txt"
                            font="bold 14px 'work_sans'"
                            marginBottom="5px"
                            color="grey"
                        />
                        <Text text=" Processando..." font="12px 'work_sans'" />
                    </ContentText>
                    <FaSpinner size="20" />
                </ContentItem>
                <ContentItem>
                    <ContentText>
                        <Text
                            text="movcad.teste.txt"
                            font="bold 14px 'work_sans'"
                            marginBottom="5px"
                            color="grey"
                        />
                        <Text text=" Processando..." font="12px 'work_sans'" />
                    </ContentText>
                    <FaSpinner size="20" />
                </ContentItem>
            </Container>
        </>
    );
}
function ValidationSuccess() {
    return (
        <Container>
            <ContentItem>
                <ContentText>
                    <Text
                        text="movcad.txt"
                        font="bold 14px 'work_sans'"
                        marginBottom="5px"
                        color="grey"
                    />
                    <Text
                        text="Sucesso de validação"
                        font="12px 'work_sans'"
                        color={theme.greenDefault}
                    />
                </ContentText>
                <FaRegCheckCircle color={theme.greenDefault} size="20" />
            </ContentItem>
            <ContentItem>
                <ContentText>
                    <Text
                        text="movcad.teste.txt"
                        font="bold 14px 'work_sans'"
                        marginBottom="5px"
                        color="grey"
                    />
                    <Text
                        text="Sucesso de validação"
                        font="12px 'work_sans'"
                        color={theme.greenDefault}
                    />
                </ContentText>
                <FaRegCheckCircle color={theme.greenDefault} size="20" />
            </ContentItem>
        </Container>
    );
}

function ValidationError() {
    return (
        <Container>
            <ContentItem>
                <ContentText>
                    <Text
                        text="movcad.txt"
                        font="bold 14px 'work_sans'"
                        marginBottom="5px"
                        color="grey"
                    />
                    <Text
                        text="Erro de validação"
                        font="12px 'work_sans'"
                        color={theme.red}
                    />
                </ContentText>
                <GiCancel color={theme.red} size="20" />
            </ContentItem>
            <ContentItem>
                <ContentText>
                    <Text
                        text="movcad.teste.txt"
                        font="bold 14px 'work_sans'"
                        marginBottom="5px"
                        color="grey"
                    />
                    <Text
                        text="Erro de validação"
                        font="12px 'work_sans'"
                        color={theme.red}
                    />
                </ContentText>
                <GiCancel color={theme.red} size="20" />
            </ContentItem>
        </Container>
    );
}

export default ModalValidationLoading;
