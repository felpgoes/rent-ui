import React, { useCallback } from 'react';

import { BsGear } from 'react-icons/bs';
import { RiBriefcaseLine } from 'react-icons/ri';
import { ReactComponent as CaseIcon } from '../../../assets/icons/business_center.svg';
import { ReactComponent as GearIcon } from '../../../assets/icons/settings.svg';

import CardTipoPerfil from '../../molecules/CardTipoPerfil';
import {
    Modal,
    ModalHeader,
    ModalContentWrapper,
    ModalFooter,
} from '../../molecules/Modal';

import PerfilEnum from '../../../enums/PerfilEnum';

import { Container, ContentText } from './styles';
import theme from '../../../styles/theme';
import history from '../../../services/history';

function ModalNovoUsuario({ isOpen, onClick }) {
    const paginaNovoUsarioAdministrador = useCallback((perfilNovoUsuario) => {
        history.push(`/novo/gestao/novo-usuario/${PerfilEnum.returnName[1]}`);
    }, []);

    const paginaNovoUsarioContratante = useCallback((perfilNovoUsuario) => {
        history.push(`/novo/gestao/novo-usuario/${PerfilEnum.returnName[2]}`);
    }, []);

    return (
        <Modal isOpen={isOpen} onClick={onClick} height="333" width="600">
            <ModalHeader> novo usuário </ModalHeader>
            <ModalContentWrapper>
                <ContentText>Que tipo de perfil deseja cadastrar?</ContentText>
                <Container>
                    <CardTipoPerfil
                        onClick={paginaNovoUsarioAdministrador}
                        text="perfil administrador"
                    >
                        <GearIcon
                            fill={theme.grayDefault}
                            width="59"
                            height="60"
                        />
                    </CardTipoPerfil>
                    <CardTipoPerfil
                        onClick={paginaNovoUsarioContratante}
                        text="perfil contratante"
                    >
                        <CaseIcon fill={theme.grayDefault} />
                    </CardTipoPerfil>
                </Container>
            </ModalContentWrapper>
            <ModalFooter />
        </Modal>
    );
}

export default ModalNovoUsuario;
