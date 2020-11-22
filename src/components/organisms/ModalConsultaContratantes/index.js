import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';

import { isNumber } from '../../../utils/validation';

import ButtonBorder from '../../atoms/ButtonBorder';
import ButtonConfirm from '../../atoms/ButtonConfirm';
import { Text } from '../../atoms/Text';
import FadeIn from '../../atoms/FadeIn';

import { Creators as ContratanteActions } from '../../../store/ducks/contratante';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../../molecules/Modal';
import WrapperFlex from '../../molecules/WrapperFlex';

import DropDownSearchBox from '../DropDownSearchBox';
import TableContratantes from '../TableContratantes';

import { TipoConsultaParametrizacaoEnum } from '../../../enums';

import { Container } from './styles';

function ModalConsultaContratantes({
  isOpen,
  onClick,
  params,
  setParams,
  cleanParams,
  grupoComplementosParams,
  contratanteParams,
  rowsChecked,
  setRowsChecked,
  paginationParams,
  setPaginationParams,
  handleSearchTable,
  setTipoBusca,
  handleAdicionarModal,
  handleSearchParametrizadas,
}) {
  const dispatch = useDispatch();

  function handleSelectedPageSize(e) {
    const newPageSize = produce(paginationParams, (draft) => {
      draft.pageSize = e.target.dataset.text;
      draft.pageNumber = 1;

      return draft;
    });
    dispatch(setTipoBusca(params.tipoParametrizacao, newPageSize));
    setPaginationParams(newPageSize);
  }

  function handlePageChange(e) {
    const newPageAtual = produce(paginationParams, (draft) => {
      draft.pageNumber = e.target.value;

      return draft;
    });

    if (
      newPageAtual.totalPages >= newPageAtual.pageNumber &&
      newPageAtual.pageNumber !== '0'
    )
      setPaginationParams(newPageAtual);
  }

  function handleNextPage() {
    const newPageAtual = produce(paginationParams, (draft) => {
      if (draft.totalPages !== draft.pageNumber) draft.pageNumber += 1;

      return draft;
    });

    setPaginationParams(newPageAtual);

    if (paginationParams.totalPages !== paginationParams.pageNumber)
      dispatch(setTipoBusca(params.tipoParametrizacao, newPageAtual));
  }
  function handlePreviousPage() {
    const newPageAtual = produce(paginationParams, (draft) => {
      if (draft.pageNumber > 1) draft.pageNumber -= 1;

      return draft;
    });

    setPaginationParams(newPageAtual);

    if (paginationParams.pageNumber !== 1)
      dispatch(setTipoBusca(params.tipoParametrizacao, newPageAtual));
  }

  function handlePageChangeKeyDown(e) {
    if (e.keyCode === 13) {
      dispatch(setTipoBusca(params.tipoParametrizacao));
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClick={(e) => onClick(e)}
      width="916"
      height="544"
      position="absolute"
      top="43"
    >
      <ModalHeader background="#FFF">
        consultar contratantes disponíveis
      </ModalHeader>
      <ModalContentWrapper background="#FFF">
        <ModalContent overflow="hidden" maxHeight="none">
          <WrapperFlex marginTop column>
            <DropDownSearchBox
              dropdownName="tipoParametrizacao"
              inputName="buscaParametrizacao"
              onBlur={handleSearchTable}
              params={params}
              setParams={setParams}
              options={TipoConsultaParametrizacaoEnum.returnName}
              inputWidth="600"
              placeholder={
                params.tipoParametrizacao ===
                TipoConsultaParametrizacaoEnum.returnName[1]
                  ? 'Digite o código do grupo ou complemento'
                  : 'Digite o código ou nome de contratante'
              }
              handleInputKeyDown={handleSearchTable}
              onClick={(e) => handleSearchTable(e, true)}
            />
          </WrapperFlex>
          <WrapperFlex marginTop column>
            <Text text="resultados de consulta" type="headlineOne">
              resultados de consulta
            </Text>

            <TableContratantes
              grupoComplementosParams={grupoComplementosParams}
              contratanteParams={contratanteParams}
              setPaginationParams={setPaginationParams}
              paginationParams={paginationParams}
              handleSelectedPageSize={handleSelectedPageSize}
              handlePageChange={handlePageChange}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
              handlePageChangeKeyDown={handlePageChangeKeyDown}
              initialParams={params}
              rowsChecked={rowsChecked}
              setRowsChecked={setRowsChecked}
            />
          </WrapperFlex>
        </ModalContent>
      </ModalContentWrapper>
      <ModalFooter justifyContent="flex-end" background="#FFF">
        <ButtonBorder
          onClick={(e) => onClick(e)}
          text="cancelar"
          justifyCenter
          alignCenter
          type="button"
          marginRight="10px"
        />
        <ButtonConfirm
          text="adicionar"
          justifyCenter
          alignCenter
          type="button"
          onClick={(e) => {
            handleAdicionarModal();
            onClick(e);
          }}
        />
      </ModalFooter>
    </Modal>
  );
}

export default ModalConsultaContratantes;
