import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import format from 'date-fns/format';
import produce from 'immer';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { ImPencil } from 'react-icons/im';
import { FcCancel } from 'react-icons/fc';
import { BiCheckCircle } from 'react-icons/bi';

import theme from '../../../styles/theme';

import history from '../../../services/history';

import {
  TipoStatusEnum,
  TipoPerfilUsuarioEnum,
  PermissaoContratanteEnum,
  TipoTelefoneEnum,
} from '../../../enums';

import {
  Hr,
  UnlockIConContainer,
  UnlockWarning,
  CheckWarning,
  ContainerEmptyContent,
  ReSendContainer,
} from './styles';

import { Creators as UsuarioActions } from '../../../store/ducks/usuario';

import ButtonBorder from '../../atoms/ButtonBorder';
import Checkbox from '../../atoms/Checkbox';
import ButtonConfirm from '../../atoms/ButtonConfirm';
import { Text } from '../../atoms/Text';
import Input from '../../atoms/Input';
import InputForm from '../../atoms/InputForm';
import InputFormLogin from '../../atoms/InputFormLogin';
import FadeIn from '../../atoms/FadeIn';

import LabelContainer from '../../molecules/LabelContainer';
import Alerts from '../../molecules/Alerts';
import {
  TabContainer,
  TabActionWrapper,
  TabButton,
  TabContentWrapper,
} from '../../molecules/Tab';
import CustomScrollbars from '../../molecules/CustomScrollBars';
import WrapperFlex from '../../molecules/WrapperFlex';
import Can from '../../molecules/CheckPermissions';
import LoadingSpinning from '../../molecules/LoadingSpinning';

import DropDownPerfil from '../DropDownPerfil';
import DropDownPermissao from '../DropDownPermissao';
import TelefoneBox from '../TelefoneBox';
import SenhaBox from '../SenhaBox';

import { isContratante, isAdmin } from '../../../utils/userRole';

function TabFormConfiguracoes({
  usuarioParams,
  setUsuarioParams,
  contatoParams,
  setContatoParams,
  dadosAcessoParams,
  setDadosAcessoParams,
  usuarioDadosGerais,
  usuarioDadosAcesso,
  handleAcaoUsuarioById,
  handleActiveTab,
  disableNameInput,
  useField,
}) {
  const dispatch = useDispatch();
  const errorSenha = useField('senha').error;
  const errorNovaSenha = useField('novaSenha').error;
  const errorConfirmacaoSenha = useField('confirmacaoSenha').error;

  function handleRenderTable(tabName = null) {
    if (usuarioDadosGerais.loading) {
      return <LoadingSpinning />;
    }
    if (usuarioDadosGerais.response) {
      return (
        <DadosGerais
          usuarioParams={usuarioParams}
          setUsuarioParams={setUsuarioParams}
          contatoParams={contatoParams}
          setContatoParams={setContatoParams}
          usuarioDadosGerais={usuarioDadosGerais.response}
          disableNameInput={disableNameInput}
          useField={useField}
        />
      );
    }
    return <EmptyContent />;
  }

  return (
    <>
      <TabContainer>
        <TabActionWrapper>
          <TabButton
            key="dadosGerais"
            active
            color="#00995D"
            name="dadosGerais"
            text="dados gerais"
            widthAuto
            onClick={() => handleActiveTab('dadosGerais')}
          />
          <TabButton
            key="dadosAcesso"
            color="#00995D"
            name="dadosAcesso"
            text="dados de acesso"
            widthAuto
            onClick={() => handleActiveTab('dadosAcesso')}
          />
        </TabActionWrapper>
        <TabContentWrapper
          maxHeight="none"
          height="auto"
          active
          contentFor="dadosGerais"
        >
          {handleRenderTable()}
        </TabContentWrapper>
        <TabContentWrapper
          maxHeight="none"
          height="auto"
          contentFor="dadosAcesso"
        >
          <DadosAcesso
            usuarioParams={usuarioParams}
            dadosAcessoParams={dadosAcessoParams}
            setDadosAcessoParams={setDadosAcessoParams}
            usuarioDadosAcesso={usuarioDadosAcesso}
            handleAcaoUsuarioById={handleAcaoUsuarioById}
            errorSenha={errorSenha}
            errorNovaSenha={errorNovaSenha}
            errorConfirmacaoSenha={errorConfirmacaoSenha}
          />
        </TabContentWrapper>
      </TabContainer>
    </>
  );
}

const DadosGerais = ({
  usuarioParams,
  setUsuarioParams,
  usuarioDadosGerais,
  contatoParams,
  setContatoParams,
  disableNameInput,
  useField,
}) => {
  function handleSelectedPerfil(e) {
    const newEditarUsuarioParams = produce(usuarioParams, (draft) => {
      if (draft.permissao !== e.target.dataset.text)
        draft.permissao = e.target.dataset.text;

      return draft;
    });

    setUsuarioParams(newEditarUsuarioParams);
  }
  function handleChange(e, status) {
    const newEditarUsuarioParams = produce(usuarioParams, (draft) => {
      if (draft[status] !== e.target.value) draft[status] = e.target.value;

      return draft;
    });

    setUsuarioParams(newEditarUsuarioParams);
  }

  return (
    <WrapperFlex column justifyCenter alignCenter>
      <FadeIn>
        <WrapperFlex column justifyCenter alignStart>
          <Text
            font="bold 16px/14px Calibri"
            color={theme.greenDefault}
            text="Usuário"
            paddingBottom="20"
          />
          <LabelContainer text="Nome" marginBottom="30">
            <InputFormLogin
              handleChange={(e) => handleChange(e, 'nome')}
              marginTop="9"
              width="623"
              height="40"
              placeholder="Informe o nome completo do usuário"
              name="nome"
              value={usuarioParams.nome}
              disabled={disableNameInput}
            />
          </LabelContainer>
          {isAdmin(usuarioDadosGerais.tipoPerfil) ? (
            <DropDownPerfil
              disable
              perfis={TipoPerfilUsuarioEnum.returnNameFormatted}
              headerText={
                TipoPerfilUsuarioEnum.returnNameFormattedForName[
                  usuarioDadosGerais.tipoPerfil
                ]
              }
              name="perfil"
              // backgroundColor={theme.grey100}
              marginBottom="30"
            />
          ) : null}
          <Hr />
          <Text
            font="bold 16px/14px Calibri"
            color={theme.greenDefault}
            text="Contato"
            paddingBottom="20"
            marginTop={30}
          />
          <TelefoneBox
            pageParams={contatoParams}
            setPageParams={setContatoParams}
            useField={useField}
          />
        </WrapperFlex>
      </FadeIn>
    </WrapperFlex>
  );
};

const EmptyContent = () => (
  <WrapperFlex height="100%" justifyCenter alignCenter>
    <ContainerEmptyContent>Nenhum registro localizado</ContainerEmptyContent>
  </WrapperFlex>
);

const DadosAcesso = ({
  usuarioParams,
  dadosAcessoParams,
  setDadosAcessoParams,
  usuarioDadosAcesso,
  handleAcaoUsuarioById,
  errorSenha,
  errorNovaSenha,
  errorConfirmacaoSenha,
}) => {
  function handleInput(e, status) {
    const newDadosAcessoParams = produce(dadosAcessoParams, (draft) => {
      if (draft[status] !== e.target.value) draft[status] = e.target.value;
    });

    setDadosAcessoParams(newDadosAcessoParams);
  }

  function handleClick(e) {
    console.log(e);
  }

  return (
    <WrapperFlex column justifyCenter alignCenter>
      <FadeIn>
        <WrapperFlex column justifyCenter alignStart>
          <Text
            font="bold 16px/14px Calibri"
            color={theme.greenDefault}
            text="Acesso"
            paddingBottom="20"
          />
          <LabelContainer text="Nome do usuário" marginBottom="30">
            <InputForm
              handleChange={(e) => handleInput(e, 'nome')}
              disabled
              marginTop="9"
              width="633"
              height="40"
              placeholder="Informe o nome completo do usuário"
              name="nome"
              value={usuarioParams.nome}
            />
          </LabelContainer>
          <Can
            checkRole={{
              Adm: TipoPerfilUsuarioEnum.returnNameForName.Adm,
            }}
          >
            {(can) => (
              <LabelContainer text="E-mail do usuário" marginBottom="30">
                <InputFormLogin
                  handleChange={(e) => handleInput(e, 'email')}
                  disabled
                  marginTop="9"
                  width="458"
                  height="40"
                  placeholder="Informe o e-mail do usuário"
                  name="email"
                  value={dadosAcessoParams.email}
                />
              </LabelContainer>
            )}
          </Can>
        </WrapperFlex>
        <SenhaBox
          params={dadosAcessoParams}
          setParams={setDadosAcessoParams}
          errorSenha={errorSenha}
          errorNovaSenha={errorNovaSenha}
          errorConfirmacaoSenha={errorConfirmacaoSenha}
          paddingRight="0"
          eyeWidth="auto"
        />
      </FadeIn>
    </WrapperFlex>
  );
};

const AlertUnlock = ({ type, email, idUsuario, handleAcaoUsuarioById }) => {
  let icon;
  let text;
  let subtext;
  let display;
  if (type === 'Ativo') {
    icon = <CheckWarning />;
    text = 'Liberação enviada';
    subtext = 'Solicitação de finalização de cadastro foi enviada para';
    display = 'none';
  } else {
    icon = <UnlockWarning />;
    text = 'Liberação ainda não enviada';
    subtext = 'Deseja enviar a liberação para';
  }
  return (
    <Alerts width="633" type={type} height="75">
      <span>
        {icon} {text}
        <br />
        <p>
          {subtext}
          <b>{email}</b>
          {type !== 'Ativo' ? '?' : ''}
        </p>
      </span>
      <ButtonBorder
        justifySpaceBetween
        alignCenter
        width="155"
        padding={10}
        onClick={() => handleAcaoUsuarioById(idUsuario, type)}
        type={type}
        display={display}
      >
        <UnlockIConContainer size="20" type={type} />
        liberar acesso
      </ButtonBorder>
    </Alerts>
  );
};

export default TabFormConfiguracoes;
