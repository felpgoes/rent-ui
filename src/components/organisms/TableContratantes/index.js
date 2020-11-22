import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, uniqueId } from 'lodash';
// import { Container } from './styles';
import produce from 'immer';

import { TipoConsultaParametrizacaoEnum } from '../../../enums';

import Checkbox from '../../atoms/Checkbox';
import FadeIn from '../../atoms/FadeIn';

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
import LoadingSpinning from '../../molecules/LoadingSpinning';

function TableContratantes({
  grupoComplementosParams,
  contratanteParams,
  setPaginationParams,
  paginationParams,
  handleSelectedPageSize,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
  handlePageChangeKeyDown,
  initialParams,
  rowsChecked,
  setRowsChecked,
}) {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!isEmpty(grupoComplementosParams.response.data)) {
      const newPaginationParams = produce(paginationParams, (draft) => {
        draft.pageNumber = grupoComplementosParams.response.data.pageNumber;
        draft.pageSize = grupoComplementosParams.response.data.pageSize;
        draft.totalPages = Math.ceil(
          grupoComplementosParams.response.size /
            grupoComplementosParams.response.data.pageSize
        );

        return draft;
      });

      setPaginationParams(newPaginationParams);
      // setNewPageAtual(pageData.pageNumber);
      // setPageSize(pageData.pageSize);
    }
  }, [grupoComplementosParams]);

  if (
    initialParams.tipoParametrizacao ===
    TipoConsultaParametrizacaoEnum.returnName[1]
  )
    return (
      <>
        {grupoComplementosParams.loading ? (
          <LoadingSpinning height="362px" />
        ) : (
          <TableComplemento
            grupoComplementosParams={grupoComplementosParams.response.data.data}
            pageData={grupoComplementosParams.response.data}
            sizeData={grupoComplementosParams.response.size}
            setPaginationParams={setPaginationParams}
            paginationParams={paginationParams}
            handleSelectedPageSize={handleSelectedPageSize}
            handlePageChange={handlePageChange}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageChangeKeyDown={handlePageChangeKeyDown}
            rowsChecked={rowsChecked}
            setRowsChecked={setRowsChecked}
          />
        )}
      </>
    );
  return (
    <>
      {contratanteParams.loading ? (
        <LoadingSpinning height="362px" />
      ) : (
        <TableContratante
          contratanteParams={contratanteParams.response.data?.data}
          pageData={contratanteParams.response.data}
          sizeData={contratanteParams.response.size}
          setPaginationParams={setPaginationParams}
          paginationParams={paginationParams}
          handleSelectedPageSize={handleSelectedPageSize}
          handlePageChange={handlePageChange}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageChangeKeyDown={handlePageChangeKeyDown}
          rowsChecked={rowsChecked}
          setRowsChecked={setRowsChecked}
        />
      )}
    </>
  );
}

const TableComplemento = ({
  grupoComplementosParams,
  pageData,
  sizeData,
  setPaginationParams,
  paginationParams,
  handleSelectedPageSize,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
  handlePageChangeKeyDown,
  rowsChecked,
  setRowsChecked,
}) => {
  const [isCheckedAllComplemento, setIsCheckedAllComplemento] = useState(false);

  useEffect(() => {
    if (!isEmpty(pageData)) {
      const newPaginationParams = produce(paginationParams, (draft) => {
        draft.pageNumber = pageData.pageNumber;
        draft.pageSize = pageData.pageSize;
        draft.totalPages = Math.ceil(sizeData / pageData.pageSize);

        return draft;
      });

      setPaginationParams(newPaginationParams);
    }
  }, [grupoComplementosParams]);

  return (
    <FadeIn>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader widthAuto>
              <Checkbox
                checked={isCheckedAllComplemento}
                onClick={() =>
                  setIsCheckedAllComplemento(!isCheckedAllComplemento)
                }
                height="18px"
                width="18px"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Complemento</TableHeader>
            <TableHeader>Qtd. Contratantes</TableHeader>
            <TableHeader>Qtd. Modalidades</TableHeader>
            <TableHeader>Qtd. Termos</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {grupoComplementosParams &&
          grupoComplementosParams[0]?.codigoComplemento !== '' ? (
            grupoComplementosParams.map((complemento, index) => (
              <TableContentComplemento
                complemento={complemento}
                index={index}
                checkAll={isCheckedAllComplemento}
                rowsChecked={rowsChecked}
                setRowsChecked={setRowsChecked}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colspan="7">
                <EmptyContent />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {grupoComplementosParams ? (
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
    </FadeIn>
  );
};

const TableContentComplemento = ({
  complemento,
  checkAll,
  setRowsChecked,
  index,
  rowsChecked,
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const [complementoState, setComplementoState] = useState({
    complemento,
    checked: !isChecked,
  });

  function handleCheckedComplemento(e, check, codigoComplemento) {
    const newComplemento = produce(complementoState, (draft) => {
      if (draft.complemento.codigoComplemento === codigoComplemento) {
        draft.listaContratantes = draft.complemento.listaContratantes;
        draft.checked = !check;
        draft.tipoParametrizacao = TipoConsultaParametrizacaoEnum.returnName[1];
        draft.id = codigoComplemento;
        draft.idCard = uniqueId('card_');
        draft.isEditar = false;
        draft.selectedOptions = {};
        draft.path = [];
        draft.options = [];
        draft.contagem = {};
        draft.idParametrizacao = 0;
        draft.nodeLoading = false;
        draft.cardLoading = false;
      }

      return draft;
    });

    const newComplementoRowChecked = produce(rowsChecked, (draft) => {
      const newDraft = draft.filter((u) => {
        return (
          u.complemento.codigoComplemento !==
            newComplemento.complemento.codigoComplemento && u.checked === true
        );
      });

      if (newComplemento.checked) newDraft.push(newComplemento);

      draft = newDraft;

      return draft;
    });

    setComplementoState(newComplemento);
    setRowsChecked(newComplementoRowChecked);
  }

  useEffect(() => {
    const newComplemento = produce(complementoState, (draft) => {
      draft.checked = checkAll;
      draft.tipoParametrizacao = TipoConsultaParametrizacaoEnum.returnName[1];
      draft.listaContratantes = draft.complemento.listaContratantes;
      draft.id = draft.complemento.codigoComplemento;
      draft.idCard = uniqueId('card_');
      draft.isEditar = false;
      draft.selectedOptions = {};
      draft.path = [];
      draft.options = [];
      draft.contagem = {};
      draft.idParametrizacao = 0;
      draft.nodeLoading = false;
      draft.cardLoading = false;

      return draft;
    });

    setComplementoState(newComplemento);
    if (checkAll) {
      if (
        !rowsChecked
          .map(
            (complementoRowChecked) =>
              complementoRowChecked.complemento.codigoComplemento
          )
          .includes(newComplemento.complemento.codigoComplemento)
      )
        setRowsChecked((oldArray) => [...oldArray, newComplemento]);
    } else setRowsChecked([]);
  }, [checkAll]);

  return (
    <TableRow
      onClick={(e) =>
        handleCheckedComplemento(
          e,
          complementoState.checked,
          complemento.codigoComplemento
        )
      }
      isClickable
    >
      <TableCell widthAuto>
        <Checkbox
          checked={complementoState.checked}
          onClick={(e) =>
            handleCheckedComplemento(
              e,
              complementoState.checked,
              complemento.codigoComplemento
            )
          }
          height="18px"
          width="18px"
        />
      </TableCell>
      <TableCell>
        {complemento.codigoGrupo ? complemento.codigoGrupo : '-'}
      </TableCell>
      <TableCell>
        {complemento.nomeGrupo ? complemento.nomeGrupo : '-'}
      </TableCell>
      <TableCell>
        {complemento.codigoComplemento ? complemento.codigoComplemento : '-'}
      </TableCell>
      <TableCell>{complemento.contratantes}</TableCell>
      <TableCell>{complemento.modalidades}</TableCell>
      <TableCell>{complemento.termos}</TableCell>
    </TableRow>
  );
};

const TableContratante = ({
  contratanteParams,
  pageData,
  sizeData,
  setPaginationParams,
  paginationParams,
  handleSelectedPageSize,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
  handlePageChangeKeyDown,
  rowsChecked,
  setRowsChecked,
}) => {
  const [isCheckedAllContratante, setIsCheckedAllContratante] = useState(false);

  useEffect(() => {
    if (!isEmpty(pageData)) {
      const newPaginationParams = produce(paginationParams, (draft) => {
        draft.pageNumber = pageData.pageNumber;
        draft.pageSize = pageData.pageSize;
        draft.totalPages = Math.ceil(sizeData / pageData.pageSize);

        return draft;
      });

      setPaginationParams(newPaginationParams);
    }
  }, [contratanteParams]);

  return (
    <FadeIn>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader widthAuto>
              <Checkbox
                checked={isCheckedAllContratante}
                onClick={() =>
                  setIsCheckedAllContratante(!isCheckedAllContratante)
                }
                height="18px"
                width="18px"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Inscrição</TableHeader>
            <TableHeader>Qtd. Modalidades</TableHeader>
            <TableHeader>Qtd. Termos</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {contratanteParams && contratanteParams[0]?.nomeContratante !== '' ? (
            contratanteParams.map((contratante, index) => (
              <TableContentContratante
                contratante={contratante}
                index={index}
                checkAll={isCheckedAllContratante}
                rowsChecked={rowsChecked}
                setRowsChecked={setRowsChecked}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colspan="6">
                <EmptyContent />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {contratanteParams ? (
        <Pagination
          setPaginationParams={setPaginationParams}
          paginationParams={paginationParams}
          handleSelectedPageSize={handleSelectedPageSize}
          handlePageChange={handlePageChange}
          total={pageData.total}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageChangeKeyDown={handlePageChangeKeyDown}
          disabled
        />
      ) : null}
    </FadeIn>
  );
};

const TableContentContratante = ({
  contratante,
  checkAll,
  index,
  rowsChecked,
  setRowsChecked,
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const [contratanteState, setContratanteState] = useState({
    contratante,
    checked: !isChecked,
  });

  function handleCheckedContratante(e, check, codigoContratante) {
    const newContratante = produce(contratanteState, (draft) => {
      if (draft.contratante.codigoContratante === codigoContratante) {
        draft.checked = !check;
        draft.listaContratantes = [draft.contratante.codigoContratante];
        draft.tipoParametrizacao = 'Contratante';
        draft.id = codigoContratante;
        draft.idCard = uniqueId('card_');
        draft.isEditar = false;
        draft.selectedOptions = {};
        draft.path = [];
        draft.options = [];
        draft.contagem = {};
        draft.idParametrizacao = 0;
        draft.nodeLoading = false;
        draft.cardLoading = false;
      }

      return draft;
    });

    const newContratanteRowChecked = produce(rowsChecked, (draft) => {
      const newDraft = draft.filter((u) => {
        return (
          u.contratante.codigoContratante !==
            newContratante.contratante.codigoContratante && u.checked === true
        );
      });

      if (newContratante.checked) newDraft.push(newContratante);

      draft = newDraft;

      return draft;
    });

    setContratanteState(newContratante);
    setRowsChecked(newContratanteRowChecked);
  }

  useEffect(() => {
    const newContratante = produce(contratanteState, (draft) => {
      draft.checked = checkAll;
      draft.tipoParametrizacao = 'Contratante';
      draft.listaContratantes = [draft.contratante.codigoContratante];
      draft.id = draft.contratante.codigoContratante;
      draft.idCard = uniqueId('card_');
      draft.isEditar = false;
      draft.selectedOptions = {};
      draft.path = [];
      draft.options = [];
      draft.contagem = {};
      draft.idParametrizacao = 0;
      draft.nodeLoading = false;
      draft.cardLoading = false;

      return draft;
    });
    setContratanteState(newContratante);
    if (checkAll) {
      if (
        !rowsChecked
          .map(
            (contratanteRowChecked) =>
              contratanteRowChecked.contratante.codigoContratante
          )
          .includes(newContratante.contratante.codigoContratante)
      )
        setRowsChecked((oldArray) => [...oldArray, newContratante]);
    } else setRowsChecked([]);
  }, [checkAll]);

  return (
    <TableRow
      onClick={(e) =>
        handleCheckedContratante(
          e,
          contratanteState.checked,
          contratante.codigoContratante
        )
      }
      isClickable
    >
      <TableCell widthAuto>
        <Checkbox
          checked={contratanteState.checked}
          onClick={(e) =>
            handleCheckedContratante(
              e,
              contratanteState.checked,
              contratante.codigoContratante
            )
          }
          height="18px"
          width="18px"
        />
      </TableCell>
      <TableCell>
        {contratante.codigoContratante ? contratante.codigoContratante : '-'}
      </TableCell>
      <TableCell>
        {contratante.nomeContratante ? contratante.nomeContratante : '-'}
      </TableCell>
      <TableCell>
        {contratante.numeroInscricao ? contratante.numeroInscricao : '-'}
      </TableCell>
      <TableCell>{contratante.modalidades}</TableCell>
      <TableCell>{contratante.termos}</TableCell>
    </TableRow>
  );
};

export default TableContratantes;
