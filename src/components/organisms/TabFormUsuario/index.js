import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';
import format from 'date-fns/format';

import { MdErrorOutline } from 'react-icons/md';
import { FaRegCheckCircle } from 'react-icons/fa';
import theme from '../../../styles/theme';

import {
    TipoStatusEnum,
    TipoPerfilUsuarioEnum,
    PerfilEnum,
    PermissaoContratanteEnum,
    TipoTelefoneEnum,
    TipoConsultaParametrizacaoEnum,
} from '../../../enums';

import { Hr, UnlockIConContainer, ReSendContainer } from './styles';

import ButtonBorder from '../../atoms/ButtonBorder';
import ButtonConfirm from '../../atoms/ButtonConfirm';
import { Text } from '../../atoms/Text';
import InputForm from '../../atoms/InputForm';
import FadeIn from '../../atoms/FadeIn';

import CustomScrollbars from '../../molecules/CustomScrollBars';
import LabelContainer from '../../molecules/LabelContainer';
import Alerts from '../../molecules/Alerts';
import LoadingSpinning from '../../molecules/LoadingSpinning';
import {
  TabContainer,
  TabActionWrapper,
  TabButton,
  TabContentWrapper,
} from '../../molecules/Tab';
import WrapperFlex from '../../molecules/WrapperFlex';
import Can from '../../molecules/CheckPermissions';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '../../molecules/Table';
import Pagination from '../../molecules/Pagination';
import EmptyContent from '../../molecules/EmptyContent';

import DropDownPerfil from '../DropDownPerfil';
import DropDownPermissao from '../DropDownPermissao';
import TelefoneBox from '../TelefoneBox';
import ParametrizacaoContratantes from '../ParametrizacaoContratantes';

import { isContratante } from '../../../utils/userRole';
import { isNumber } from '../../../utils/validation';

import { Creators as ContratanteActions } from '../../../store/ducks/contratante';

function TabFormUsuario({
  usuarioParams,
  setUsuarioParams,
  contatoParams,
  setContatoParams,
  dadosAcessoParams,
  setDadosAcessoParams,
  usuarioDadosGerais,
  usuarioDadosAcesso,
  usuarioHistoricoMovimentacao,
  handleAcaoUsuarioById,
  handleActiveTab,
  setPaginationParams,
  paginationParams,
  handleSelectedPageSize,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
  handlePageChangeKeyDown,
  idUsuario,
  useField,
}) {
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
          useField={useField}
        />
      );
    }
    return <EmptyContent />;
  }

  function handleRenderTableHistorico() {
    if (usuarioHistoricoMovimentacao.loading) {
      return <LoadingSpinning />;
    }

    if (usuarioHistoricoMovimentacao.response.size > 0) {
      return (
        <HistoricoMovimentacoes
          usuarioHistoricoMovimentacao={
            usuarioHistoricoMovimentacao.response.data.data
          }
          pageData={usuarioHistoricoMovimentacao.response.data}
          sizeData={usuarioHistoricoMovimentacao.response.size}
          setPaginationParams={setPaginationParams}
          paginationParams={paginationParams}
          handleSelectedPageSize={handleSelectedPageSize}
          handlePageChange={handlePageChange}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageChangeKeyDown={handlePageChangeKeyDown}
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
          {isContratante(usuarioDadosGerais.response.tipoPerfil) ? (
            <TabButton
              key="parametros"
              color="#00995D"
              name="parametros"
              text="parâmetros"
              widthAuto
              onClick={() => handleActiveTab('parametros')}
            />
          ) : null}
          <TabButton
            key="historicoMovimentacao"
            color="#00995D"
            name="historicoMovimentacao"
            text="histórico de movimentações"
            widthAuto
            onClick={() => handleActiveTab('historicoMovimentacoes')}
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
        <TabContentWrapper contentFor="dadosAcesso">
          <DadosAcesso
            dadosAcessoParams={dadosAcessoParams}
            setDadosAcessoParams={setDadosAcessoParams}
            usuarioDadosAcesso={usuarioDadosAcesso}
            handleAcaoUsuarioById={handleAcaoUsuarioById}
          />
        </TabContentWrapper>
        <TabContentWrapper
          maxHeight="unset"
          height="auto"
          contentFor="parametros"
        >
          <Parametros
            idUsuario={idUsuario}
            usuarioDadosGerais={usuarioDadosGerais}
          />
        </TabContentWrapper>
        <TabContentWrapper contentFor="historicoMovimentacao">
          {handleRenderTableHistorico()}
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
  useField,
}) => {
    function handleSelectedPerfil(e) {
        const newEditarUsuarioParams = produce(usuarioParams, (draft) => {
            debugger;
            if (draft.tipoPerfil !== e.target.dataset.text)
                draft.tipoPerfil = e.target.dataset.text;

            return draft;
        });

        setUsuarioParams(newEditarUsuarioParams);
    }
    function handleSelectedPermissao(e) {
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
                        <InputForm
                            handleChange={(e) => handleChange(e, 'nome')}
                            marginTop="9"
                            width="623"
                            height="40"
                            placeholder="Informe o nome completo do usuário"
                            name="nome"
                            value={usuarioParams.nome}
                        />
                    </LabelContainer>
                    {isContratante(usuarioDadosGerais.tipoPerfil) ? (
                        <LabelContainer
                            text="Matrícula (Opcional)"
                            marginBottom="30"
                        >
                            <InputForm
                                handleChange={(e) =>
                                    handleChange(e, 'matricula')
                                }
                                marginTop="9"
                                width="322"
                                height="40"
                                placeholder="Informe o número da matrícula"
                                name="matricula"
                                value={usuarioParams.matricula}
                            />
                        </LabelContainer>
                    ) : null}
                    <Can
                        checkRole={{
                            Administrador:
                                TipoPerfilUsuarioEnum.returnNameForName.Adm,
                        }}
                    >
                        {(can) => (
                            <DropDownPerfil
                                disable={!can && usuarioDadosGerais.tipoPerfil == null}
                                perfis={
                                    //TipoPerfilUsuarioEnum.returnNameFormatted
                                    PerfilEnum.returnName
                                }
                                headerText={
                                    //TipoPerfilUsuarioEnum
                                    //    .returnNameFormattedForName[
                                    //    usuarioDadosGerais.tipoPerfil
                                    //]
                                    usuarioParams.tipoPerfil == "" || usuarioParams.tipoPerfil == null ?
                                        TipoPerfilUsuarioEnum
                                            .returnTipoPerfilAcessoForTipoPerfil['Selecione'] :
                                        TipoPerfilUsuarioEnum
                                            .returnTipoPerfilAcessoForTipoPerfil[usuarioParams.tipoPerfil]
                                    
                                }
                                name="perfil"
                                // backgroundColor={theme.grey100}
                                marginBottom="30"
                                onClick={handleSelectedPerfil}
                            />
                        )}
                    </Can>
                    {isContratante(usuarioParams.tipoPerfil) || usuarioParams.tipoPerfil == "Contratante" ? (
                        <DropDownPermissao
                            onClick={handleSelectedPermissao}
                            permissoes={PermissaoContratanteEnum.returnName}
                            headerText={usuarioParams.permissao == "" || usuarioParams.permissao == null ? PermissaoContratanteEnum.returnName[0] : usuarioParams.permissao}
                            name="permissao"
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

const DadosAcesso = ({
  dadosAcessoParams,
  setDadosAcessoParams,
  usuarioDadosAcesso,
  handleAcaoUsuarioById,
}) => {
  function handleInput(e, status) {
    const newDadosAcessoParams = produce(dadosAcessoParams, (draft) => {
      if (draft[status] !== e.target.value) draft[status] = e.target.value;
    });

    setDadosAcessoParams(newDadosAcessoParams);
  }

  return (
    <WrapperFlex column justifyCenter alignCenter>
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
            marginTop="9"
            width="633"
            height="40"
            placeholder="Informe o nome completo do usuário"
            name="nome"
            value={dadosAcessoParams.nome}
            disabled
          />
        </LabelContainer>
        <LabelContainer text="E-mail do usuário" marginBottom="30">
          <InputForm
            handleChange={(e) => handleInput(e, 'email')}
            marginTop="9"
            width="458"
            height="40"
            placeholder="Informe o e-mail do usuário"
            name="email"
            value={dadosAcessoParams.email}
            disabled={dadosAcessoParams.tipoStatus === 'Inativo'}
          />
        </LabelContainer>
        <AlertUnlock
          type={dadosAcessoParams.tipoStatus}
          email={usuarioDadosAcesso.email}
          idUsuario={dadosAcessoParams.idUsuario}
          handleAcaoUsuarioById={handleAcaoUsuarioById}
        />
        {dadosAcessoParams.tipoStatus === 'Ativo' ? (
          <ReSendContainer>
            <Text text="Usuário não recebeu? " />
            <Text
              color={theme.greenDefault}
              text="Reenviar a liberação"
              onClick={() =>
                handleAcaoUsuarioById(
                  dadosAcessoParams.idUsuario,
                  'PendenteLiberacao'
                )
              }
            />
          </ReSendContainer>
        ) : (
          ''
        )}
      </WrapperFlex>
    </WrapperFlex>
  );
};

const HistoricoMovimentacoes = ({
  usuarioHistoricoMovimentacao,
  pageData,
  sizeData,
  setPaginationParams,
  paginationParams,
  handleSelectedPageSize,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
  handlePageChangeKeyDown,
}) => {
  useEffect(() => {
    const newPaginationParams = produce(paginationParams, (draft) => {
      draft.pageNumber = pageData.pageNumber;
      draft.pageSize = pageData.pageSize;
      draft.totalPages = Math.ceil(sizeData / pageData.pageSize);

      return draft;
    });

    setPaginationParams(newPaginationParams);
    // setNewPageAtual(pageData.pageNumber);
    // setPageSize(pageData.pageSize);
  }, []);

  return (
    <>
      <CustomScrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={420}
        thumbMinSize={30}
        universal
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Responsável</TableHeader>
              <TableHeader>Perfil</TableHeader>
              <TableHeader>Ação</TableHeader>
              <TableHeader>E-mail</TableHeader>
              <TableHeader>Data</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarioHistoricoMovimentacao.map((historico, index) => (
              <TableRow key={historico.idUsuarioHistorico}>
                <TableCell>
                  {historico.nomeResponsavel ? historico.nomeResponsavel : '-'}
                </TableCell>
                <TableCell>
                  {historico.tipoPerfil
                    ? TipoPerfilUsuarioEnum.returnNameFormattedForName[
                        historico.tipoPerfil
                      ]
                    : '-'}
                </TableCell>
                <TableCell>
                  {historico.dcAcao ? historico.dcAcao : '-'}
                </TableCell>
                <TableCell>
                  {historico.emailResponsavel
                    ? historico.emailResponsavel
                    : '-'}
                </TableCell>
                <TableCell>
                  {historico.dtInclusaoHistorico
                    ? format(
                        new Date(historico.dtInclusaoHistorico),
                        'dd/MM/yyyy HH:mm',
                        {
                          timeZone: 'America/Sao_Paulo',
                        }
                      )
                    : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CustomScrollbars>
      {pageData.total > 10 ? (
        <Pagination
          setPaginationParams={setPaginationParams}
          paginationParams={paginationParams}
          handleSelectedPageSize={handleSelectedPageSize}
          handlePageChange={handlePageChange}
          total={pageData.total}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageChangeKeyDown={handlePageChangeKeyDown}
        />
      ) : null}
    </>
  );
};

const AlertUnlock = ({ type, email, idUsuario, handleAcaoUsuarioById }) => {
  const ActionPorStatus = {
    Ativo: {
      Icon: <FaRegCheckCircle color={theme.greenDefault} size="20px" />,
      Text: 'Liberação enviada',
      SubText: 'Solicitação de finalização de cadastro foi enviada para',
      Display: '',
      DisplayButton: 'none',
    },
    PendenteLiberacao: {
      Icon: <MdErrorOutline color={theme.yellowDefault} size="20px" />,
      Text: 'Liberação ainda não enviada',
      SubText: 'Deseja enviar a liberação para',
      Display: '',
      DisplayButton: '',
    },
    Inativo: {
      Icon: null,
      Text: null,
      SubText: null,
      Display: 'none',
      DisplayButton: '',
    },
  };
  return (
    <Alerts
      display={ActionPorStatus[type].Display}
      width="633"
      type={type}
      height="75"
    >
      <span>
        {ActionPorStatus[type].Icon} {ActionPorStatus[type].Text}
        <br />
        <p>
          {ActionPorStatus[type].SubText}
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
        typeAction={type}
        display={ActionPorStatus[type].DisplayButton}
        type="button"
        marginTop="18px !important"
        color={theme.yellowDefault}
      >
        <UnlockIConContainer size="20" type={type} />
        liberar acesso
      </ButtonBorder>
    </Alerts>
  );
};

const Parametros = ({ idUsuario, usuarioDadosGerais }) => {
  const dispatch = useDispatch();

  const { getGrupoComplementos } = useSelector((state) => state.contratante);
  const { getContratantes } = useSelector((state) => state.contratante);

  const [tableFilterparams, setTableFilterParams] = useState({
    tipoParametrizacao: TipoConsultaParametrizacaoEnum.returnNameFormatted[1],
    buscaParametrizacao: 6,
  });
  const [parametrizacaoFilterParams, setParametrizacaoFilterParams] = useState({
    tipoParametrizacao: TipoConsultaParametrizacaoEnum.returnNameFormatted[0],
    buscaParametrizacao: '',
  });
  const [rowsChecked, setRowsChecked] = useState([]);

  const paginationModalParams = {
    pageNumber: 1,
    pageSize: 5,
    nextPage: null,
    previousPage: null,
    totalPages: null,
  };

  const [paginationParams, setPaginationParams] = useState(
    paginationModalParams
  );

  const cleanFilterParams = () => {
    setTableFilterParams({
      tipoParametrizacao: TipoConsultaParametrizacaoEnum.returnNameFormatted[1],
      buscaParametrizacao: '',
    });
    setRowsChecked([]);
  };

  const setParamsBusca = (tipoBusca, newPageParams) => {
    const tipoParamsBusca = {
      [TipoConsultaParametrizacaoEnum.returnName[1]]: {
        codigoGrupo: isNumber(tableFilterparams.buscaParametrizacao)
          ? tableFilterparams.buscaParametrizacao
          : null,
        codigoComplemento: isNumber(tableFilterparams.buscaParametrizacao)
          ? null
          : tableFilterparams.buscaParametrizacao,
        ...(newPageParams || paginationParams),
      },
      Contratante: {
        nomeContratante: isNumber(tableFilterparams.buscaParametrizacao)
          ? null
          : tableFilterparams.buscaParametrizacao,
        codigoContratante: isNumber(tableFilterparams.buscaParametrizacao)
          ? tableFilterparams.buscaParametrizacao
          : null,
        ...(newPageParams || paginationParams),
      },
    };

    return tipoParamsBusca[tipoBusca];
  };

  const setTipoBusca = (tipoBusca, newPageParams) => {
    const tiposBusca = {
      [TipoConsultaParametrizacaoEnum
        .returnName[1]]: ContratanteActions.getGrupoComplementosRequest(
        setParamsBusca(tipoBusca, newPageParams)
      ),
      Contratante: ContratanteActions.getContratanteRequest(
        setParamsBusca(tipoBusca, newPageParams)
      ),
    };

    return tiposBusca[tipoBusca];
  };

  return (
    <ParametrizacaoContratantes
      tableFilterparams={tableFilterparams}
      setTableFilterParams={setTableFilterParams}
      parametrizacaoFilterParams={parametrizacaoFilterParams}
      setParametrizacaoFilterParams={setParametrizacaoFilterParams}
      cleanParams={cleanFilterParams}
      grupoComplementosParams={getGrupoComplementos}
      contratanteParams={getContratantes}
      rowsChecked={rowsChecked}
      setRowsChecked={setRowsChecked}
      paginationParams={paginationParams}
      setPaginationParams={setPaginationParams}
      setParamsBusca={setParamsBusca}
      setTipoBusca={setTipoBusca}
      initialPaginationParams={paginationModalParams}
      idUsuario={idUsuario}
      usuarioDadosGerais={usuarioDadosGerais}
    />
  );
};

export default TabFormUsuario;
