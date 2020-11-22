import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import produce from 'immer';
import theme from '../../../styles/theme';

import {
  PaginationContainer,
  PagePrevious,
  PageNext,
  PageAtual,
  PageSize,
  PaginationTotal,
  PaginationAction,
} from './styles';

function Pagination({
  total,
  paginationParams,
  handlePageChange,
  handlePageChangeKeyDown,
  handleNextPage,
  handlePreviousPage,
}) {
  return (
    <PaginationContainer>
      <PaginationTotal>Total de {total} registros encontrados</PaginationTotal>
      <PaginationAction>
        <PagePrevious onClick={handlePreviousPage}>
          <MdKeyboardArrowLeft
            color={paginationParams.page === 1 ? theme.lightGrey : theme.grey}
          />
        </PagePrevious>
        <PageAtual
          width="46"
          height="34"
          value={paginationParams.page}
          handleChange={handlePageChange}
          handleInputKeyDown={handlePageChangeKeyDown}
          textAlign="center"
        />
        <span>de</span>
        <span>{paginationParams.totalPages}</span>
        <PageNext onClick={handleNextPage}>
          <MdKeyboardArrowRight
            color={
              paginationParams.page === paginationParams.totalPages
                ? theme.lightGrey
                : theme.grey
            }
          />
        </PageNext>
      </PaginationAction>
    </PaginationContainer>
  );
}

export default Pagination;
