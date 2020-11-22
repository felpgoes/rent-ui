import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import produce from 'immer';
import { isEmpty } from 'lodash';

import history from '../../services/history';
import { Creators as PlaceActions } from '../../store/ducks/places';

import TitlePage from '../../components/atoms/TitlePage';

import Breadcrumbs from '../../components/molecules/Breadcrumbs';
import WrapperFlex from '../../components/molecules/WrapperFlex';
import Pagination from '../../components/molecules/Pagination';
import Cards from '../../components/Cards';
import FadeIn from '../../components/atoms/FadeIn';
import LoadingIcon from '../../components/Icons/LoadingIcon';

import { Container } from './styles';

function Dashboard() {
  const dispatch = useDispatch();
  const { places, loading } = useSelector((state) => state.places);
  const paginationParams = useMemo(
    () => ({
      page: 1,
      totalPages: 0,
      total: 0,
    }),
    []
  );

  const redirectToDetalhe = useCallback((id) => {
    history.push(`/place/${id}`);
  }, []);
  const [pageParams, setPageParams] = useState(paginationParams);

  useEffect(() => {
    const newPaginationParams = produce(pageParams, (draft) => {
      draft.totalPages = places.pageCount;
      draft.total = places.resultCount;
    });

    setPageParams(newPaginationParams);
  }, [places]);

  function handleNextPage() {
    const newPageAtual = produce(pageParams, (draft) => {
      if (draft.totalPages !== draft.page) draft.page += 1;

      return draft;
    });

    const params = {
      ...newPageAtual,
    };
    if (pageParams.totalPages !== pageParams.page)
      dispatch(PlaceActions.getPlacesRequest(params));

    setPageParams(newPageAtual);
  }

  function handlePreviousPage() {
    const newPageAtual = produce(paginationParams, (draft) => {
      if (draft.page > 1) draft.page -= 1;

      return draft;
    });
    const params = {
      ...newPageAtual,
    };

    if (pageParams.page !== 1) dispatch(PlaceActions.getPlacesRequest(params));

    setPageParams(newPageAtual);
  }

  useEffect(() => {
    dispatch(PlaceActions.getPlacesRequest(paginationParams));
  }, [paginationParams, dispatch]);

  return (
    <Container>
      <FadeIn>
        <WrapperFlex justifyStart alignStart column>
          <WrapperFlex percentage={100} justifySpaceBetween alignStart>
            <TitlePage text="Espaços" />
          </WrapperFlex>
          <Breadcrumbs />
        </WrapperFlex>
        <WrapperFlex justifyStart alignStart column />
        <WrapperFlex>
          {!isEmpty(places?.results) && (
            <WrapperFlex
              percentage={100}
              justifyStart
              alignEnd
              marginSides={10}
              wrap="true"
            >
              {places.results.map((place) => (
                <Cards
                  place={place}
                  onClick={() => redirectToDetalhe(place.id)}
                  loading={loading}
                />
              ))}
            </WrapperFlex>
          )}
          {isEmpty(places?.results) && loading ? (
            <WrapperFlex
              percentage={100}
              justifyCenter
              alignEnd
              marginSides={10}
              marginBottom={100}
              marginTop={100}
              wrap="true"
            >
              <LoadingIcon />
            </WrapperFlex>
          ) : null}
        </WrapperFlex>
        {!isEmpty(places?.results) && (
          <Pagination
            total={pageParams.total}
            paginationParams={pageParams}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        )}
      </FadeIn>
    </Container>
  );
}

export default Dashboard;
