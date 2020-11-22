import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';
import format from 'date-fns/format';
import ReactTooltip from 'react-tooltip';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { ImPencil } from 'react-icons/im';
import { MdAdb } from 'react-icons/md';

import theme from '../../../styles/theme';

import { Creators as ListaActions } from '../../../store/ducks/lista';

import {
  ContainerEmptyContent,
  UnlockIConContainer,
  HoverActions,
} from './styles';

import {
  StatusListaEnum,
  MovimentacaoListaEnum,
  StatusListaAPIEnum,
  TipoPerfilUsuarioEnum,
} from '../../../enums';

import FadeIn from '../../atoms/FadeIn';
import ButtonBorder from '../../atoms/ButtonBorder';
import Checkbox from '../../atoms/Checkbox';
import Icon from '../../atoms/Icon';

import Alerts from '../../molecules/Alerts';
import {
  TabContainer,
  TabActionWrapper,
  TabButton,
  TabContentWrapper,
} from '../../molecules/Tab';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '../../molecules/Table';
import CustomScrollbars from '../../molecules/CustomScrollBars';
import WrapperFlex from '../../molecules/WrapperFlex';
import Pagination from '../../molecules/Pagination';
import LoadingSpinning from '../../molecules/LoadingSpinning';
import Can from '../../molecules/CheckPermissions';

import { isAdmin } from '../../../utils/userRole';

const { REACT_APP_MOVCAD_LEGACY } = process.env;

function TabTableLista({
  setPaginationParams,
  paginationParams,
  handleActiveTab,
  handleSelectedPageSize,
  handlePageChange,
  handlePageChangeKeyDown,
  handleNextPage,
  handlePreviousPage,
  handleConfirmAction,
  handleAcaoListas,
  handleAcaoListaById,
}) {
  const { getListas } = useSelector((state) => state.lista);
  const { usuario } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function handleRender(listaStatus, tabName = null) {
    if (getListas.loading) {
      return <LoadingSpinning />;
    }
    if (!!listaStatus.data && listaStatus.data.length > 0) {
      return (
        <TableLista
          pageData={listaStatus}
          listas={listaStatus.data}
          setPaginationParams={setPaginationParams}
          paginationParams={paginationParams}
          handleSelectedPageSize={handleSelectedPageSize}
          handlePageChange={handlePageChange}
          handlePageChangeKeyDown={handlePageChangeKeyDown}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleConfirmAction={handleConfirmAction}
          handleAcaoListas={handleAcaoListas}
          handleAcaoListaById={handleAcaoListaById}
          listasSize={listaStatus.size}
          {...(tabName && { tabName })}
          usuario={usuario}
        />
      );
    }
    return <EmptyContent />;
  }

  useEffect(() => {
    const params = {
      ...paginationParams,
    };

    dispatch(
      ListaActions.getListasRequest(params, StatusListaAPIEnum.returnNameForTab)
    );
  }, []);

  return (
    <>
      <TabContainer>
        <TabActionWrapper>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaAPIEnum.returnNameForTab.Todas)
            }
            active
            color="#00995D"
            name="todas"
          >
            <span>{getListas.response.Todas.size}</span>todas
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaAPIEnum.returnNameForTab.Registrada)
            }
            color="#F47920"
            name="registradas"
          >
            <span>{getListas.response.Registrada.size}</span>
            registradas
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaAPIEnum.returnNameForTab.EmValidacao)
            }
            color="#6A0099"
            name="emvalidacao"
          >
            <span>{getListas.response.EmValidacao.size}</span>
            <span>em validação</span>
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaAPIEnum.returnNameForTab.Pendente)
            }
            color="#F1C104"
            name="pendentes"
          >
            <span>{getListas.response.Pendente.size}</span>pendentes
          </TabButton>

          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaAPIEnum.returnNameForTab.EmEspera)
            }
            color="#D94FCC"
            name="emespera"
          >
            <span>{getListas.response.EmEspera.size}</span>em espera
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaAPIEnum.returnNameForTab.Processada)
            }
            color="#B1D34B"
            name="processadas"
          >
            <span>{getListas.response.Processada.size}</span>
            processadas
          </TabButton>

          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaAPIEnum.returnNameForTab.ComErro)
            }
            color="#ED1651"
            name="comerro"
          >
            <span>{getListas.response.ComErro.size}</span>com erro
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaAPIEnum.returnNameForTab.Excluida)
            }
            color="#5A5A5A"
            name="excluida"
          >
            <span>{getListas.response.Excluida.size}</span>excluída
          </TabButton>
        </TabActionWrapper>
        <TabContentWrapper
          active
          contentFor="todas"
          maxHeight="none"
          height="auto"
        >
          {handleRender(getListas.response.Todas, 'Todas')}
        </TabContentWrapper>
        <TabContentWrapper
          contentFor="registradas"
          maxHeight="none"
          height="auto"
        >
          {handleRender(
            getListas.response.Registrada,
            StatusListaAPIEnum.returnTabForName.Registrada
          )}
        </TabContentWrapper>
        <TabContentWrapper
          contentFor="emvalidacao"
          maxHeight="none"
          height="auto"
        >
          {handleRender(
            getListas.response.EmValidacao,
            StatusListaAPIEnum.returnTabForName.EmValidacao
          )}
        </TabContentWrapper>
        <TabContentWrapper
          maxHeight="none"
          height="auto"
          contentFor="pendentes"
        >
          {handleRender(
            getListas.response.Pendente,
            StatusListaAPIEnum.returnTabForName.Pendente
          )}
        </TabContentWrapper>
        <TabContentWrapper maxHeight="none" height="auto" contentFor="emespera">
          {handleRender(
            getListas.response.EmEspera,
            StatusListaAPIEnum.returnTabForName.EmEspera
          )}
        </TabContentWrapper>
        <TabContentWrapper
          maxHeight="none"
          height="auto"
          contentFor="processadas"
        >
          {handleRender(
            getListas.response.Processada,
            StatusListaAPIEnum.returnTabForName.Processada
          )}
        </TabContentWrapper>
        <TabContentWrapper maxHeight="none" height="auto" contentFor="comerro">
          {handleRender(
            getListas.response.ComErro,
            StatusListaAPIEnum.returnTabForName.ComErro
          )}
        </TabContentWrapper>
        <TabContentWrapper maxHeight="none" height="auto" contentFor="excluida">
          {handleRender(
            getListas.response.Excluida,
            StatusListaAPIEnum.returnTabForName.Excluida
          )}
        </TabContentWrapper>
      </TabContainer>
    </>
  );
}

const TableLista = ({
  listas,
  pageData,
  setPaginationParams,
  paginationParams,
  handleSelectedPageSize,
  handlePageChange,
  handlePageChangeKeyDown,
  handleNextPage,
  handlePreviousPage,
  handleConfirmAction,
  tabName,
  handleAcaoListas,
  handleAcaoListaById,
  listasSize,
  usuario,
}) => {
  const [checkAll, setCheckAll] = useState(false);
  const [listaRowsChecked, setListaRowsChecked] = useState([]);

  function handleCheckAll(e) {
    setCheckAll(!checkAll);
  }

  useEffect(() => {
    const newPaginationParams = produce(paginationParams, (draft) => {
      draft.pageNumber = pageData.pageNumber;
      draft.pageSize = pageData.pageSize;
      draft.totalPages = pageData.totalPages;

      return draft;
    });
    setPaginationParams(newPaginationParams);
  }, []);

  return (
    <>
      <FadeIn height="auto">
        {listaRowsChecked.length > 0 ? (
          <FadeIn height="auto">
            <SetAllLista
              tabName={tabName}
              listaRowsChecked={listaRowsChecked}
              handleAcaoListas={handleAcaoListas}
              handleConfirmAction={handleConfirmAction}
              paginationParams={paginationParams}
              totalSize={listasSize}
              marginLeft="20px"
            />
          </FadeIn>
        ) : null}
        <Table>
          <TableHead>
            <TableRow>
              {tabName === 'Pendente' && isAdmin(usuario.role) ? (
                <TableHeader widthAuto>
                  <Checkbox
                    checked={checkAll}
                    onClick={(e) => handleCheckAll(e)}
                    height="18px"
                    width="18px"
                  />
                </TableHeader>
              ) : null}
              <TableHeader>Lista</TableHeader>
              <TableHeader>Contratante</TableHeader>
              <TableHeader>Movimentação</TableHeader>
              <TableHeader>Criação</TableHeader>
              <TableHeader>Envio</TableHeader>
              <TableHeader>Finalização</TableHeader>
              <TableHeader>Status</TableHeader>
              {tabName === 'Pendente' && isAdmin(usuario.role) ? (
                <TableHeader>Status RPA</TableHeader>
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {listas.map((lista) => (
              <TableContent
                lista={lista}
                checkAll={checkAll}
                setListaRowsChecked={setListaRowsChecked}
                listaRowsChecked={listaRowsChecked}
                paginationParams={paginationParams}
                handleConfirmAction={handleConfirmAction}
                tabName={tabName}
                usuario={usuario}
              />
            ))}
          </TableBody>
        </Table>
      </FadeIn>
      {pageData.size > 10 ? (
        <Pagination
          setPaginationParams={setPaginationParams}
          paginationParams={paginationParams}
          handleSelectedPageSize={handleSelectedPageSize}
          handlePageChange={handlePageChange}
          total={pageData.size}
          handlePageChangeKeyDown={handlePageChangeKeyDown}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      ) : null}
    </>
  );
};

const TableContent = ({
  lista,
  checkAll,
  setListaRowsChecked,
  listaRowsChecked = [],
  paginationParams,
  handleConfirmAction,
  tabName,
  usuario,
}) => {
  const [hoverAction, setHoverAction] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [list, setList] = useState({ lista, checked: !isChecked });

  function handleMouseEnterHover(e) {
    setHoverAction(!hoverAction);
  }
  function handleMouseLeaveHover(e) {
    if (hoverAction) setHoverAction(!hoverAction);
  }

  function redirectToDetalheLista(idLista) {
    window.location.replace(
      `${REACT_APP_MOVCAD_LEGACY}/CadastrarLista.aspx?idLista=${idLista}`
    );
  }

  function handleCheckedLista(e, check, idLista) {
    const newLista = produce(list, (draft) => {
      if (draft.lista.idLista === idLista) draft.checked = !check;

      return draft;
    });

    const newListaRowChecked = produce(listaRowsChecked, (draft) => {
      const newDraft = draft.filter((l) => {
        return l.lista.idLista !== newLista.lista.idLista && l.checked === true;
      });

      if (newLista.checked) newDraft.push(newLista);

      draft = newDraft;

      return draft;
    });

    setList(newLista);
    setListaRowsChecked(newListaRowChecked);
  }

  useEffect(() => {
    const newLista = produce(list, (draft) => {
      draft.checked = checkAll;

      return draft;
    });
    setList(newLista);
    if (checkAll) {
      if (
        !listaRowsChecked
          .map((listaRowChecked) => listaRowChecked.lista.idLista)
          .includes(newLista.lista.idLista)
      )
        setListaRowsChecked((oldArray) => [...oldArray, newLista]);
    } else setListaRowsChecked([]);
  }, [checkAll]);

  return (
    <TableRow
      onMouseEnter={handleMouseEnterHover}
      onMouseLeave={handleMouseLeaveHover}
      key={lista.idLista}
    >
      {tabName === 'Pendente' && isAdmin(usuario.role) ? (
        <TableCell widthAuto key={lista.idLista}>
          <Checkbox
            checked={list.checked}
            onClick={(e) => handleCheckedLista(e, list.checked, lista.idLista)}
            height="18px"
            width="18px"
          />
        </TableCell>
      ) : null}
      <TableCell
        redirectToDetalheLista={() => redirectToDetalheLista(lista.idLista)}
        activeAction
      >
        {lista.nmLista}
      </TableCell>
      <TableCell>
        {lista.cdContratante} - {lista.nmContratante}
      </TableCell>
      <TableCell>{lista.dcTipoAcao}</TableCell>
      <TableCell>
        {lista.dtInclusao
          ? format(new Date(lista.dtInclusao), 'dd/MM/yyyy HH:mm', {
              timeZone: 'America/Sao_Paulo',
            })
          : null}
      </TableCell>
      <TableCell>
        {lista.dtEnvio
          ? format(new Date(lista.dtEnvio), 'dd/MM/yyyy HH:mm')
          : null}
      </TableCell>
      <TableCell>
        {lista.dtVencimento
          ? format(new Date(lista.dtVencimento), 'dd/MM/yyyy HH:mm')
          : null}
      </TableCell>
      <TableCell>
        {hoverAction &&
        paginationParams.tipoStatus !==
          StatusListaAPIEnum.returnNameForTab.Registrada &&
        lista.idStatusLista !== StatusListaAPIEnum.returnId.Registrada &&
        paginationParams.tipoStatus !==
          StatusListaAPIEnum.returnNameForTab.Pendente ? (
          <TableListaActions
            redirectToDetalheLista={() => redirectToDetalheLista(lista.idLista)}
            idLista={lista.idLista}
            listaStatus={
              StatusListaAPIEnum.returnNameFormatted[lista.idStatusLista]
            }
            handleConfirmAction={handleConfirmAction}
          />
        ) : (
          StatusListaAPIEnum.returnNameFormatted[lista.idStatusLista]
        )}
      </TableCell>
      {tabName === 'Pendente' && isAdmin(usuario.role) ? (
        <TableCell>
          {hoverAction &&
          paginationParams.tipoStatus !==
            StatusListaAPIEnum.returnNameForTab.Registrada &&
          lista.idStatusLista !== StatusListaAPIEnum.returnId.Registrada ? (
            <TableListaActions
              redirectToDetalheLista={() =>
                redirectToDetalheLista(lista.idLista)
              }
              idLista={lista.idLista}
              listaStatus={
                StatusListaAPIEnum.returnNameFormatted[lista.idStatusLista]
              }
              listaStatusRPA={lista.statusEnvioRPA}
              handleConfirmAction={handleConfirmAction}
            />
          ) : (
            <>{lista.statusEnvioRPA ? lista.descricaoStatusRPA : '-'}</>
          )}
        </TableCell>
      ) : null}
    </TableRow>
  );
};

const EmptyContent = () => (
  <WrapperFlex height="100%" justifyCenter alignCenter>
    <ContainerEmptyContent>Nenhum registro localizado</ContainerEmptyContent>
  </WrapperFlex>
);

const SetAllLista = ({
  tabName,
  listaRowsChecked,
  handleAcaoListas,
  handleConfirmAction,
  paginationParams,
  marginLeft,
  totalSize,
}) => {
  return (
    <WrapperFlex marginBottom="true" justifySpaceBetween alignCenter>
      <Alerts width="100%" type="success">
        <RiErrorWarningLine size="20" />{' '}
        <span>
          Você selecionou {listaRowsChecked.length} de{' '}
          {totalSize >= 10 ? paginationParams.pageSize : totalSize} itens.
        </span>
      </Alerts>
      <ButtonBorder
        justifySpaceBetween
        alignCenter
        width="180"
        padding={10}
        onClick={() =>
          handleConfirmAction(
            listaRowsChecked,
            StatusListaAPIEnum.returnNameFormatted[10].replace(/\s+/g, '')
          )
        }
        marginLeft={marginLeft}
      >
        <MdAdb size="20" stroke={theme.greenDefault} />
        enviar p/ RPA
      </ButtonBorder>
    </WrapperFlex>
  );
};

const TableListaActions = ({
  redirectToDetalheLista,
  idLista,
  listaStatus,
  handleConfirmAction,
  listaStatusRPA,
}) => {
  return (
    <WrapperFlex alignCenter justifySpaceEvenly>
      <HoverActions data-tip="editar" onClick={() => redirectToDetalheLista()}>
        <ImPencil size="17" color={theme.colorGray} />
      </HoverActions>

      {listaStatus === 'Pendente de Processamento' ? (
        <Can
          checkRole={{
            Adm: TipoPerfilUsuarioEnum.returnNameForName.Adm,
          }}
        >
          <ActionPorStatus
            listaStatus={listaStatus}
            idLista={idLista}
            handleConfirmAction={handleConfirmAction}
            listaStatusRPA={listaStatusRPA}
          />
        </Can>
      ) : null}
      <ReactTooltip
        className="extraClass"
        delayHide={1000}
        effect="solid"
        backgroundColor={theme.greenDefault}
        textColor="#FFF"
        place="bottom"
      />
    </WrapperFlex>
  );
};

const ActionPorStatus = ({
  listaStatus,
  idLista,
  handleConfirmAction,
  listaStatusRPA,
}) => {
  const status = listaStatus.replace(/\s+/g, '');
  const IconPorStatus = {
    PendentedeProcessamento: {
      Text: !listaStatusRPA ? 'enviar para RPA' : 'cancelar envio para RPA',
      Icon: !listaStatusRPA ? (
        <MdAdb size="17" color={theme.colorGray} />
      ) : (
        <Icon size="23" color={theme.colorGray} icon="cancelOutline" />
      ),
      onClick: !listaStatusRPA
        ? () => handleConfirmAction(idLista, status)
        : () => handleConfirmAction(idLista, 'Cancelar'),
    },
  };

  function handleIconsPorStatus() {
    return IconPorStatus[status].Icon;
  }

  function handleToolTipTextPorStatus() {
    return IconPorStatus[status].Text;
  }

  return (
    <HoverActions
      data-tip={handleToolTipTextPorStatus()}
      onClick={IconPorStatus[status].onClick}
    >
      {handleIconsPorStatus()}
    </HoverActions>
  );
};
export default TabTableLista;
