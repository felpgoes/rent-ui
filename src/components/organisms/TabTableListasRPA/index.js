import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';
import format from 'date-fns/format';
import ReactTooltip from 'react-tooltip';

import { RiErrorWarningLine } from 'react-icons/ri';
import { MdAdb, MdFileDownload, MdExpandMore } from 'react-icons/md';

import theme from '../../../styles/theme';

import { Creators as ListaActions } from '../../../store/ducks/lista';

import { ContainerEmptyContent, HoverActions } from './styles';

import { MovimentacaoListaEnum, StatusListaRPAEnum } from '../../../enums';

import FadeIn from '../../atoms/FadeIn';
import ButtonBorder from '../../atoms/ButtonBorder';
import Checkbox from '../../atoms/Checkbox';
import Icon from '../../atoms/Icon';
import ButtonConfirm from '../../atoms/ButtonConfirm';
import ButtonDropdown from '../../atoms/ButtonDropdown';

import useOutsideClick from '../../../utils/useOutsideClick';

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

import WrapperFlex from '../../molecules/WrapperFlex';
import Pagination from '../../molecules/Pagination';
import LoadingSpinning from '../../molecules/LoadingSpinning';
import Alerts from '../../molecules/Alerts';

import DropdownRPA from '../DropdownRPA';

const { REACT_APP_MOVCAD_LEGACY } = process.env;

function TabTableListasRPA({
  setPaginationParams,
  paginationParams,
  handleActiveTab,
  handleSelectedPageSize,
  handlePageChange,
  handlePageChangeKeyDown,
  handleNextPage,
  handlePreviousPage,
  handleConfirmAction,
  dropdownOptions,
  handleDropdownItem,
}) {
  const { getListasRPA } = useSelector((state) => state.lista);

  const dispatch = useDispatch();

  function handleRender(listaStatus, tabName = null) {
    if (getListasRPA.loading) {
      return <LoadingSpinning />;
    }
    if (listaStatus.data && listaStatus.data.length > 0) {
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
          listasSize={listaStatus.size}
          dropdownOptions={dropdownOptions}
          handleDropdownItem={handleDropdownItem}
          {...(tabName && { tabName })}
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
      ListaActions.getListasRPARequest(
        params,
        StatusListaRPAEnum.returnNameForTab
      )
    );
  }, []);

  return (
    <>
      <TabContainer>
        <TabActionWrapper>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaRPAEnum.returnNameForTab.Todas)
            }
            active
            color="#00995D"
            name="todas"
          >
            <span>{getListasRPA.response.Todas.size}</span>todas
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaRPAEnum.returnNameForTab.Processar)
            }
            color="#B1D34B"
            name="processar"
          >
            <span>{getListasRPA.response.Processar.size}</span>processar
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaRPAEnum.returnNameForTab.Reprocessar)
            }
            color="#F47920"
            name="reprocessar"
          >
            <span>{getListasRPA.response.Reprocessar.size}</span>reprocessar
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaRPAEnum.returnNameForTab.Liberar)
            }
            color="#F1C104"
            name="liberar"
          >
            <span>{getListasRPA.response.Liberar.size}</span>liberar
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaRPAEnum.returnNameForTab.Alteracao)
            }
            color="#D94FCC"
            name="alteracao"
          >
            <span>{getListasRPA.response.Alteracao.size}</span>alteracao
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaRPAEnum.returnNameForTab.PreVenda)
            }
            color="#6A0099"
            name="preVenda"
          >
            <span>{getListasRPA.response.PreVenda.size}</span>pré-venda
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaRPAEnum.returnNameForTab.Importacao)
            }
            color="#484848"
            name="importacao"
          >
            <span>{getListasRPA.response.Importacao.size}</span>importacao
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(StatusListaRPAEnum.returnNameForTab.ComErros)
            }
            color="#ED1651"
            name="comErros"
          >
            <span>{getListasRPA.response.ComErros.size}</span>com erros
          </TabButton>
        </TabActionWrapper>
        <TabContentWrapper
          active
          contentFor="todas"
          maxHeight="none"
          height="auto"
        >
          {handleRender(getListasRPA.response.Todas, 'Todas')}
        </TabContentWrapper>
        <TabContentWrapper
          contentFor="processar"
          maxHeight="none"
          height="auto"
        >
          {handleRender(
            getListasRPA.response.Processar,
            StatusListaRPAEnum.returnTabForName.Processar
          )}
        </TabContentWrapper>
        <TabContentWrapper
          contentFor="reprocessar"
          maxHeight="none"
          height="auto"
        >
          {handleRender(
            getListasRPA.response.Reprocessar,
            StatusListaRPAEnum.returnTabForName.Reprocessar
          )}
        </TabContentWrapper>
        <TabContentWrapper contentFor="liberar" maxHeight="none" height="auto">
          {handleRender(
            getListasRPA.response.Liberar,
            StatusListaRPAEnum.returnTabForName.Liberar
          )}
        </TabContentWrapper>
        <TabContentWrapper
          contentFor="alteracao"
          maxHeight="none"
          height="auto"
        >
          {handleRender(
            getListasRPA.response.Alteracao,
            StatusListaRPAEnum.returnTabForName.Alteracao
          )}
        </TabContentWrapper>
        <TabContentWrapper contentFor="preVenda" maxHeight="none" height="auto">
          {handleRender(
            getListasRPA.response.PreVenda,
            StatusListaRPAEnum.returnTabForName.PreVenda
          )}
        </TabContentWrapper>
        <TabContentWrapper
          contentFor="importacao"
          maxHeight="none"
          height="auto"
        >
          {handleRender(
            getListasRPA.response.Importacao,
            StatusListaRPAEnum.returnTabForName.Importacao
          )}
        </TabContentWrapper>
        <TabContentWrapper contentFor="comErros" maxHeight="none" height="auto">
          {handleRender(
            getListasRPA.response.ComErros,
            StatusListaRPAEnum.returnTabForName.ComErros
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
  listasSize,
  dropdownOptions,
  handleDropdownItem,
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
              listaRowsChecked={listaRowsChecked}
              paginationParams={paginationParams}
              totalSize={listasSize}
              marginLeft="20px"
              dropdownOptions={dropdownOptions}
              handleConfirmAction={handleConfirmAction}
            />
          </FadeIn>
        ) : null}
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader widthAuto>
                <Checkbox
                  checked={checkAll}
                  onClick={(e) => handleCheckAll(e)}
                  height="18px"
                  width="18px"
                />
              </TableHeader>
              <TableHeader>Lista</TableHeader>
              <TableHeader>Contratante</TableHeader>
              <TableHeader>Movimentação</TableHeader>
              <TableHeader>Criação</TableHeader>
              <TableHeader>Envio</TableHeader>
              <TableHeader>Finalização</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {listas.map((lista) => (
              <TableContent
                lista={lista}
                checkAll={checkAll}
                setListaRowsChecked={setListaRowsChecked}
                listaRowsChecked={listaRowsChecked}
                handleConfirmAction={handleConfirmAction}
                tabName={tabName}
                dropdownOptions={dropdownOptions}
                handleDropdownItem={handleDropdownItem}
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
  handleConfirmAction,
  tabName,
  dropdownOptions,
  handleDropdownItem,
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
      <TableCell widthAuto key={lista.idLista}>
        <Checkbox
          checked={list.checked}
          onClick={(e) => handleCheckedLista(e, list.checked, lista.idLista)}
          height="18px"
          width="18px"
        />
      </TableCell>
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
        {hoverAction ? (
          <TableListaActions
            redirectToDetalheLista={() => redirectToDetalheLista(lista.idLista)}
            idLista={lista.idLista}
            listaStatus={
              StatusListaRPAEnum.returnNameFormatted[lista.idStatusRPA]
            }
            handleConfirmAction={handleConfirmAction}
            dropdownOptions={dropdownOptions}
            handleDropdownItem={handleDropdownItem}
          />
        ) : (
          StatusListaRPAEnum.returnNameFormatted[lista.idStatusRPA]
        )}
      </TableCell>
    </TableRow>
  );
};

const EmptyContent = () => (
  <WrapperFlex height="100%" justifyCenter alignCenter>
    <ContainerEmptyContent>Nenhum registro localizado</ContainerEmptyContent>
  </WrapperFlex>
);

const SetAllLista = ({
  listaRowsChecked,
  paginationParams,
  marginLeft,
  totalSize,
  dropdownOptions,
  handleConfirmAction,
}) => {
  const [contratanteSearch, setContratanteSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  function handleShowDropdownItens() {
    setShowDropdown(!showDropdown);
  }

  function handleContratanteSearch(e) {
    setContratanteSearch(e.target.value);
  }

  return (
    <WrapperFlex marginBottom="true" alignCenter>
      <Alerts width="650px" type="success">
        <RiErrorWarningLine size="20" />{' '}
        <span>
          Você selecionou {listaRowsChecked.length} de{' '}
          {totalSize >= 10 ? paginationParams.pageSize : totalSize} itens.
        </span>
      </Alerts>
      {/* <ButtonBorder
        justifySpaceBetween
        alignCenter
        width="123"
        padding={10}
        marginLeft={marginLeft}
      >
        <MdFileDownload size="20" stroke={theme.greenDefault} />
        download
      </ButtonBorder>
      <ButtonBorder
        justifySpaceBetween
        alignCenter
        width="101"
        padding={10}
        marginLeft="16px"
      >
        <Icon size="25" color={theme.greenDefault} icon="deleteOutline" />
        excluir
      </ButtonBorder> */}
      <ButtonBorder
        justifySpaceBetween
        alignCenter
        width="155"
        padding={10}
        marginLeft="16px"
        onClick={() => handleConfirmAction(listaRowsChecked, 'cancelar')}
      >
        <Icon size="25" color={theme.greenDefault} icon="cancelOutline" />
        cancelar RPA
      </ButtonBorder>
      <ButtonDropdown
        marginLeft="16px"
        padding={0}
        text="status RPA"
        width="103"
        secondaryIcon={<MdExpandMore size="20" color="#FFF" />}
        onClick={handleShowDropdownItens}
      />
      <DropdownRPA
        options={dropdownOptions}
        onClick={handleConfirmAction}
        width="304px"
        handleChangeSearch={handleContratanteSearch}
        valueSearch={contratanteSearch}
        showDropdown={showDropdown}
        nameSearch="statusRPASearch"
        showInputSearch
        placeholderSearch="Pesquise e selecione o status RPA"
        marginLeft="678px"
        setShowDropdown={setShowDropdown}
        listas={listaRowsChecked}
      />
    </WrapperFlex>
  );
};

const TableListaActions = ({
  idLista,
  listaStatus,
  handleConfirmAction,
  dropdownOptions,
  handleDropdownItem,
}) => {
  const [contratanteSearch, setContratanteSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  function handleShowDropdownItens() {
    setShowDropdown(!showDropdown);
  }

  function handleContratanteSearch(e) {
    setContratanteSearch(e.target.value);
  }

  return (
    <WrapperFlex alignCenter justifySpaceEvenly>
      <HoverActions data-tip="ações RPA" onClick={handleShowDropdownItens}>
        <MdAdb size="22" color={theme.colorGray} />
      </HoverActions>
      <DropdownRPA
        options={dropdownOptions}
        onClick={handleConfirmAction}
        width="304px"
        handleChangeSearch={handleContratanteSearch}
        valueSearch={contratanteSearch}
        showDropdown={showDropdown}
        nameSearch="statusRPASearchItem"
        showInputSearch
        placeholderSearch="Pesquise e selecione o status RPA"
        marginRight="285px"
        setShowDropdown={setShowDropdown}
        listas={idLista}
      />
      {/* <HoverActions
        data-tip="download"
        onClick={() => handleConfirmAction(idLista, listaStatus)}
      >
        <MdFileDownload size="22" color={theme.colorGray} />
      </HoverActions> */}
      <HoverActions
        data-tip="cancelar processo RPA"
        onClick={() => handleConfirmAction(idLista, 'cancelar')}
      >
        <Icon size="22" color={theme.colorGray} icon="cancelOutline" />
      </HoverActions>
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
export default TabTableListasRPA;
