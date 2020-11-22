import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { isEmpty, uniqueId } from 'lodash';
import { BsPlus } from 'react-icons/bs';
import produce from 'immer';

import { AiOutlineInsertRowRight } from 'react-icons/ai';
import theme from '../../../styles/theme';
import { getDifferenceBetween } from '../../../utils/array';

import ButtonConfirm from '../../atoms/ButtonConfirm';
import { Text } from '../../atoms/Text';
import FadeIn from '../../atoms/FadeIn';
import Skeleton from '../../atoms/Skeleton';
import Animations from '../../atoms/Animations';
import Link from '../../atoms/Link';

import EmptyContent from '../../molecules/EmptyContent';
import WrapperFlex from '../../molecules/WrapperFlex';
import Alerts from '../../molecules/Alerts';
import CustomScrollBars from '../../molecules/CustomScrollBars';

import DropDownSearchBox from '../DropDownSearchBox';
import ModalConsultaContratantes from '../ModalConsultaContratantes';
import CollapseNestedList from '../CollapseNestedList';

import { TipoConsultaParametrizacaoEnum, TipoCardRoot } from '../../../enums';

import useQueue from '../../../hooks/useQueue';

import {
  TermosSelecionadosContainer,
  ModalidadesSelecionadasContainer,
  EmptyContentText,
  AlertList,
} from './styles';

import ModalSuccess from '../ModalSuccess';
import ModalError from '../ModalError';
import ModalCancelAction from '../ModalCancelAction';
import ModalWarning from '../ModalWarning';

import {
  setNivelHeader,
  setPost,
  getParametrizacaoRoot,
  setParametrizacaoNivel,
  treeBuilder,
} from '../../../utils/treeViewBuilder';

import CardContratantes from '../../molecules/CardContratantes';
import { Creators as ContratanteActions } from '../../../store/ducks/contratante';
import { Creators as UsuarioActions } from '../../../store/ducks/usuario';

const ParametrizacaoContratantes = ({
  tableFilterparams,
  setTableFilterParams,
  parametrizacaoFilterParams,
  setParametrizacaoFilterParams,
  cleanParams,
  dropDownWidth,
  grupoComplementosParams,
  contratanteParams,
  rowsChecked,
  setRowsChecked,
  paginationParams,
  setPaginationParams,
  setParamsBusca,
  setTipoBusca,
  initialPaginationParams,
  idUsuario,
  usuarioDadosGerais,
}) => {
  const dispatch = useDispatch();
  const { parametrizacaoRoot } = useSelector((state) => state.contratante);
  const { usuario } = useSelector((state) => state.auth);
  const { getGrupoContagem } = useSelector((state) => state.contratante);
  const {
    postParametrizacaoUsuario,
    putParametrizacaoUsuario,
    saveParametrizacaoCards,
    getAndBuildParametrizacaoCards,
  } = useSelector((state) => state.usuario);

  const [hasContratantes, setHasContratantes] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState({
    success: false,
    message: '',
    alert: false,
  });
  const [isError, setIsError] = useState({ error: false, message: '' });
  const [isWarning, setIsWarning] = useState({
    warning: false,
    message: '',
    action: (_) => _,
  });
  const [isAlert, setIsAlert] = useState({
    alert: false,
    message: '',
    action: (_) => _,
  });
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardsSearch, setCardsSearch] = useState('');

  const handleModalSuccess = () => {
    setIsSuccess({ success: false, message: '' });
    dispatch(UsuarioActions.parametrizacaoNodeRenew());
  };
  const handleModalError = () => {
    setIsError({ error: false, message: '' });
    dispatch(UsuarioActions.parametrizacaoNodeRenew());
  };

  const handleToogleModalAlert = () => {
    setIsAlert({
      warning: !isAlert.warning,
      message: '',
      action: (_) => _,
    });
  };

  const handleModalCancelAction = (idCard, idParametrizacao) => {
    setIsWarning({
      warning: !isWarning.warning,
      message: 'Deseja realmente excluir esta parametrização?',
      action: () => handleOnClickExcluir(idCard, idParametrizacao),
    });
  };

  const handleToogleModal = (e) => {
    if (e.keyCode !== 13) {
      cleanParams();
      setIsOpen(!isOpen);
    }
  };

  function handleOnClickExcluir(idCard, idParametrizacao) {
    if (idParametrizacao > 0)
      dispatch(
        UsuarioActions.patchParametrizacaoInativarRequest(
          idUsuario,
          idCard,
          idParametrizacao
        )
      );
    else dispatch(ContratanteActions.parametrizacaoDeleteCard(idCard));

    setIsWarning({
      warning: false,
      message: '',
      action: (_) => _,
    });
  }

  function handleOnClickEditar(idCard) {
    const card = parametrizacaoRoot.find((card) => card.idCard === idCard);
    if (isEmpty(card.options)) {
      if (card.idParametrizacao === 0) {
        if (
          card.tipoParametrizacao ===
          TipoConsultaParametrizacaoEnum.returnName[1]
        ) {
          dispatch(
            ContratanteActions.getGrupoContratantesRequest({
              codigoGrupo: card?.complemento?.codigoGrupo,
              codigoComplemento: card?.complemento?.codigoComplemento,
              idCard,
              path: [0],
            })
          );
        } else {
          dispatch(
            ContratanteActions.getContratanteModalidadesRequest({
              codigoContratante: card.contratante?.codigoContratante,
              idCard,
              path: [0],
            })
          );
        }
      }
    }

    if (card.idParametrizacao !== 0 && !card?.fullTree) {
      dispatch(
        UsuarioActions.getParametrizacaoCardsCompletoRequest(
          idUsuario,
          idCard,
          card.idParametrizacao
        )
      );
    }

    dispatch(ContratanteActions.parametrizacaoToogleCard([{ idCard }]));
  }

  function handleToogleCard(idCard) {
    dispatch(ContratanteActions.parametrizacaoToogleCard([{ idCard }]));
  }

  const getName = (type, selectedCard) => {
    const types = {
      'Grupo ou Complemento': `${selectedCard?.complemento?.codigoComplemento}`,
      Contratante: `${selectedCard?.contratante?.nomeContratante}`,
    };

    return types[type];
  };

  function handleOnClickSalvar(selectedCard) {
    const postCard = [];
    const putCard = [];
    let newContagem;
    if (selectedCard.idParametrizacao === 0) {
      const { contagem, parametrizacaoRoot } = getParametrizacaoRoot(
        selectedCard
      );

      postCard.push({
        name: getName(selectedCard.tipoParametrizacao, selectedCard),
        idParametrizacao: 0,
        idCard: selectedCard.idCard,
        idUsuarioInclusao: usuario.idUsuarioLogado,
        tipoParametrizacao:
          TipoCardRoot.returnNameForName[selectedCard.tipoParametrizacao],
        parametrizacaoRoot,
      });

      newContagem = contagem;
      // dispatch(
      //   UsuarioActions.postParametrizacaoUsuarioRequest(idUsuario, [
      //     newCardParametrizado,
      //   ])
      // );
    } else {
      const { contagem, parametrizacaoRoot } = getParametrizacaoRoot(
        selectedCard
      );
      newContagem = contagem;
      putCard.push({
        name: getName(selectedCard),
        idParametrizacao: selectedCard.idParametrizacao,
        idCard: selectedCard.idCard,
        idUsuarioInclusao: usuario.idUsuarioLogado,
        tipoParametrizacao:
          TipoCardRoot.returnNameForName[selectedCard.tipoParametrizacao],
        parametrizacaoRoot,
      });
    }

    batch(() => {
      dispatch(
        UsuarioActions.saveParametrizacaoCardsRequest(
          idUsuario,
          postCard,
          putCard,
          false
        )
      );
      dispatch(
        ContratanteActions.parametrizacaoToogleCard([
          { idCard: selectedCard.idCard },
        ])
      );
      // if (selectedCard.idParametrizacao > 0)
      //   dispatch(
      //     ContratanteActions.parametrizacaoSetContagem(
      //       newContagem,
      //       selectedCard.idCard
      //     )
      //   );
    });
  }

  function handleAdicionarModal() {
    const contratanteRoot = [];
    const grupoRoot = [];
    let cards = getDifferenceBetween(
      rowsChecked,
      'id',
      parametrizacaoRoot,
      'id'
    );

    const inValidCards = [];

    if (parametrizacaoRoot.length > 0)
      cards.forEach((novo) => {
        parametrizacaoRoot.forEach((parametrizado) => {
          parametrizado.listaContratantes.some((p) => {
            if (novo.listaContratantes.includes(p)) {
              const invalid = {
                ...novo,
                vinculo: parametrizado,
              };
              inValidCards.push(invalid);
            }
          });
        });
      });

    cards = getDifferenceBetween(cards, 'id', inValidCards, 'id');

    if (inValidCards.length > 0) {
      setIsAlert({
        alert: true,
        message:
          inValidCards.length > 1 ? (
            <>
              As parametrizações:
              {inValidCards.map((c) => (
                <strong>{getName(c.tipoParametrizacao, c)}</strong>
              ))}
              , não foram adicionadas pois já estão parametrizadas. Para
              realizar as novas parametrizações é necessário remover a
              parametrização{' '}
              {inValidCards.map((c) => (
                <strong>
                  {getName(c.vinculo.tipoParametrizacao, c.vinculo)}
                </strong>
              ))}{' '}
              com a qual possui vínculo.
            </>
          ) : (
            <>
              A parametrização:
              {inValidCards.map((c) => (
                <strong>{getName(c.tipoParametrizacao, c)}</strong>
              ))}
              , não foi adicionada pois já está parametrizada. Para realizar a
              nova parametrização é necessário remover a parametrização{' '}
              {inValidCards.map((c) => (
                <strong>
                  {getName(c.vinculo.tipoParametrizacao, c.vinculo)}
                </strong>
              ))}{' '}
              com a qual possui vínculo.
            </>
          ),
        action: (_) => _,
      });
    }

    if (!isEmpty(cards)) {
      const newCards = cards.map((card) => {
        if (card.tipoParametrizacao === TipoCardRoot.returnName[0]) {
          contratanteRoot.push(card);
        }
        if (card.tipoParametrizacao === TipoCardRoot.returnName[1]) {
          grupoRoot.push(card);
        }

        const newCard = { ...card };

        return newCard;
      });
      batch(() => {
        dispatch(ContratanteActions.parametrizacaoSetCards(newCards));
        if (contratanteRoot.length > 0)
          dispatch(
            ContratanteActions.getParametrizacaoContratanteCompletoRequest(
              contratanteRoot
            )
          );
        if (grupoRoot.length > 0) {
          dispatch(
            ContratanteActions.getParametrizacaoGrupoComplementoCompletoRequest(
              grupoRoot
            )
          );
        }
      });
    }
  }

  function handleSearchParametrizadas(e) {
    const searchText = e.target.value.toUpperCase();
    setCardsSearch(searchText);
  }
  function handleSearchTable(e, isOnClick = false) {
    if (e.keyCode === 13 || isOnClick) {
      setPaginationParams(initialPaginationParams);
      dispatch(
        setTipoBusca(
          tableFilterparams.tipoParametrizacao,
          initialPaginationParams
        )
      );
    }
  }

  const setTipoContagemRequest = (tipoNode, parametrizacao) => {
    const tipoNodes = {
      Contratante: {
        contratante: {
          codigoContratante: parametrizacao?.contratante?.codigoContratante,
        },
        idCard: parametrizacao.idCard,
      },
      [TipoConsultaParametrizacaoEnum.returnName[1]]: {
        complemento: {
          codigoGrupo: parametrizacao?.complemento?.codigoGrupo,
          codigoComplemento: parametrizacao?.complemento?.codigoComplemento,
        },
        idCard: parametrizacao.idCard,
      },
    };

    return tipoNodes[tipoNode];
  };

  const handleFilterParametrizacaoRoot = (selCard) => {
    if (
      parametrizacaoFilterParams.tipoParametrizacao ===
      TipoConsultaParametrizacaoEnum.returnNameFormatted[0]
    )
      return (
        setParametrizacaoNivel(
          selCard.tipoParametrizacao,
          selCard
        ).nome.includes(
          parametrizacaoFilterParams.buscaParametrizacao.toUpperCase()
        ) ||
        !!selCard.options[0]?.subOptions?.find((c) =>
          c.name.includes(
            parametrizacaoFilterParams.buscaParametrizacao.toUpperCase()
          )
        )
      );
    if (
      parametrizacaoFilterParams.tipoParametrizacao ===
      TipoConsultaParametrizacaoEnum.returnNameFormatted[1]
    )
      return (
        selCard.tipoParametrizacao ===
          TipoConsultaParametrizacaoEnum.returnNameFormatted[1] &&
        (setParametrizacaoNivel(
          selCard.tipoParametrizacao,
          selCard
        ).nome.includes(
          parametrizacaoFilterParams.buscaParametrizacao.toUpperCase()
        ) ||
          !!selCard.options[0]?.subOptions?.find((c) =>
            c.name.includes(
              parametrizacaoFilterParams.buscaParametrizacao.toUpperCase()
            )
          ))
      );
    if (
      parametrizacaoFilterParams.tipoParametrizacao ===
      TipoConsultaParametrizacaoEnum.returnNameFormatted[2]
    )
      return (
        setParametrizacaoNivel(
          selCard.tipoParametrizacao,
          selCard
        ).nome.includes(
          parametrizacaoFilterParams.buscaParametrizacao.toUpperCase()
        ) &&
        selCard.tipoParametrizacao ===
          TipoConsultaParametrizacaoEnum.returnNameFormatted[2]
      );
  };

  useEffect(() => {
    dispatch(ContratanteActions.parametrizacaoRootRenew());
    if (idUsuario) {
      const params = { idUsuario };

      dispatch(UsuarioActions.getAndBuildParametrizacaoCardsRequest(params));
    }
  }, []);

  useEffect(() => {
    if (idUsuario > 0) {
      if (
        saveParametrizacaoCards.success &&
        !saveParametrizacaoCards.hasValidationErrors
      ) {
        setIsSuccess({
          success: true,
          message: { title: 'Parametrização salva com sucesso!', subtitle: '' },
          alert: false,
        });
      } else if (
        saveParametrizacaoCards.success &&
        saveParametrizacaoCards.hasValidationErrors
      ) {
        setIsSuccess({
          success: true,
          message: {
            title: 'Parametrização salva com sucesso!',
            subtitle: saveParametrizacaoCards.error,
          },
          alert: true,
        });
      }
    }
  }, [saveParametrizacaoCards.success]);

  useEffect(() => {
    if (idUsuario > 0) {
      if (saveParametrizacaoCards.isError) {
        setIsError({
          error: true,
          message:
            saveParametrizacaoCards.error[0] ||
            'Erro ao salvar a parametrização',
        });
      }
    }
  }, [saveParametrizacaoCards.isError]);

  useEffect(() => {
    if (idUsuario > 0 && saveParametrizacaoCards.success) {
      const grupoContagem = [];
      const contratanteContagem = [];
      const cardParametrizado = [];

      saveParametrizacaoCards.response.forEach((p) => {
        const newCard = parametrizacaoRoot.find((c) => c.idCard === p.idCard);
        if (newCard) cardParametrizado.push(newCard);
      });

      cardParametrizado.forEach((card) => {
        if (TipoCardRoot.returnName[0] === card.tipoParametrizacao)
          contratanteContagem.push(
            setTipoContagemRequest(card.tipoParametrizacao, card)
          );
        if (TipoCardRoot.returnName[1] === card.tipoParametrizacao)
          grupoContagem.push(
            setTipoContagemRequest(card.tipoParametrizacao, card)
          );
      });
      dispatch(
        UsuarioActions.getParametrizacaoCardsRequest({ idUsuario }, [
          ...grupoContagem,
          ...contratanteContagem,
        ])
      );

      dispatch(
        ContratanteActions.parametrizacaoSetLoadingCards(true, [
          ...grupoContagem,
          ...contratanteContagem,
        ])
      );
    }
  }, [saveParametrizacaoCards.success]);

  return (
    <>
      <WrapperFlex column justifyCenter alignCenter>
        <FadeIn width="100%">
          <WrapperFlex column justifyCenter alignStart>
            <Text
              text="Contratantes"
              type="headlineOne"
              color={theme.greenDefault}
            >
              resultados de consulta
            </Text>
            <WrapperFlex marginTop width="100%" justifySpaceBetween alignStart>
              <DropDownSearchBox
                dropdownName="tipoParametrizacao"
                inputName="buscaParametrizacao"
                params={parametrizacaoFilterParams}
                setParams={setParametrizacaoFilterParams}
                onBlur={(e) => handleSearchParametrizadas(e)}
                options={TipoConsultaParametrizacaoEnum.returnNameFormatted}
                handleInputChange={handleSearchParametrizadas}
                inputWidth="524"
                marginRight="30"
                placeholder={
                  parametrizacaoFilterParams.tipoParametrizacao ===
                  TipoConsultaParametrizacaoEnum.returnNameFormatted[0]
                    ? 'Digite o código do grupo, complemento ou nome da contratante'
                    : parametrizacaoFilterParams.tipoParametrizacao ===
                      TipoConsultaParametrizacaoEnum.returnName[1]
                    ? 'Digite o código do grupo ou complemento'
                    : 'Digite o código ou nome de contratante'
                }
                width={dropDownWidth}
              />
              <ButtonConfirm
                padding={10}
                text="contratante"
                justifySpaceBetween
                alignCenter
                width="138"
                type="button"
                onClick={(e) => handleToogleModal(e)}
              >
                <BsPlus color="#FFFF" size="20" />
              </ButtonConfirm>
            </WrapperFlex>
            {isEmpty(parametrizacaoRoot) ? (
              <EmptyContentContainer
                display={hasContratantes ? 'none' : ''}
                marginTop="28px"
                onClick={(e) => handleToogleModal(e)}
                loading={getAndBuildParametrizacaoCards.loading}
              />
            ) : (
              Object.values(parametrizacaoRoot)
                .filter((selCard) => handleFilterParametrizacaoRoot(selCard))
                .map((selectedCard) => (
                  <FadeIn width="100%">
                    <ParametrizacaoCards
                      setParametrizacaoNivel={setParametrizacaoNivel}
                      selectedCard={selectedCard}
                      getGrupoContagem={getGrupoContagem}
                      tableFilterparams={tableFilterparams}
                      hasContratantes={hasContratantes}
                      handleOnClickEditar={handleOnClickEditar}
                      handleOnClickExcluir={handleOnClickExcluir}
                      handleOnClickSalvar={handleOnClickSalvar}
                      selectedCards={selectedCards}
                      setSelectedCards={setSelectedCards}
                      idUsuario={idUsuario}
                      usuarioDadosGerais={usuarioDadosGerais}
                      handleToogleCard={handleToogleCard}
                      handleModalCancelAction={handleModalCancelAction}
                    />
                  </FadeIn>
                ))
            )}
          </WrapperFlex>
        </FadeIn>
      </WrapperFlex>
      <ModalConsultaContratantes
        isOpen={isOpen}
        onClick={handleToogleModal}
        params={tableFilterparams}
        setParams={setTableFilterParams}
        grupoComplementosParams={grupoComplementosParams}
        contratanteParams={contratanteParams}
        rowsChecked={rowsChecked}
        setRowsChecked={setRowsChecked}
        paginationParams={paginationParams}
        setPaginationParams={setPaginationParams}
        handleSearchTable={handleSearchTable}
        setTipoBusca={setTipoBusca}
        handleAdicionarModal={handleAdicionarModal}
        setIsOpen={setIsOpen}
        handleSearchParametrizadas={handleSearchParametrizadas}
      />
      <ModalSuccess
        onClick={handleModalSuccess}
        text={isSuccess.message.title}
        isOpen={isSuccess.success}
        alert={
          isSuccess.alert ? (
            <Alerts width="328" type="warningModal" height="auto" margin="0">
              <span>
                <WrapperFlex column alignCenter marginSides={0}>
                  <b>Atenção!</b>
                  <b>Erro ao salvar parametrização: </b>
                  <CustomScrollBars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={60}
                    thumbMinSize={30}
                    universal
                  >
                    <AlertList>
                      {isSuccess.message.subtitle.map((sub) => (
                        <li>
                          <b>{sub.name}</b> - {sub.errorMessage}
                        </li>
                      ))}
                    </AlertList>
                  </CustomScrollBars>
                </WrapperFlex>
              </span>
            </Alerts>
          ) : (
            false
          )
        }
      />
      <ModalError
        onClick={handleModalError}
        text={isError.message || 'Erro ao salvar a parametrização.'}
        isOpen={isError.error}
      />
      <ModalCancelAction
        onClick={handleModalCancelAction}
        onClickOk={isWarning.action}
        isOpen={isWarning.warning}
        text={isWarning.message}
        textHeader="cancelar"
      />
      <ModalWarning
        isOpen={isAlert.alert}
        text={isAlert.message}
        onClick={handleToogleModalAlert}
        height="385px"
      />
    </>
  );
};

const CounterContainer = ({ response, loading }) => {
  return !loading ? (
    Object.keys(response).map((resp) => {
      return (
        <ModalidadesSelecionadasContainer>
          <Text font="12px calibri regular" text={`${resp} selecionadas:`} />
          <Text
            font="Bold 13px calibri"
            text={response[resp]}
            marginLeft="7px"
            color={theme.greenLink}
          />
        </ModalidadesSelecionadasContainer>
      );
    })
  ) : (
    <ModalidadesSelecionadasContainer>
      <WrapperFlex column>
        <Skeleton height="13px" width="150px" marginUpDown="4" />
        <Skeleton height="13px" width="150px" marginUpDown="4" />
        <Skeleton height="13px" width="150px" marginUpDown="4" />
      </WrapperFlex>
    </ModalidadesSelecionadasContainer>
  );
};

const EmptyContentContainer = ({ display, marginTop, onClick, loading }) => {
  return (
    <EmptyContent isLoading={loading} display={display} marginTop={marginTop}>
      <EmptyContentText>
        Nenhuma contratante cadastrada
        <span>
          Para adicionar, clique no botão{' '}
          <Link onClick={onClick} href="#">
            + contratantes
          </Link>
        </span>
      </EmptyContentText>
    </EmptyContent>
  );
};

const ParametrizacaoCards = ({
  setParametrizacaoNivel,
  selectedCard,
  getGrupoContagem,
  hasContratantes,
  handleOnClickEditar,
  handleOnClickSalvar,
  idUsuario,
  handleToogleCard,
  handleModalCancelAction,
}) => {
  return (
    <CardContratantes
      marginTop="28px"
      contratanteHeader={
        selectedCard.cardLoading ? (
          <Skeleton height="13px" width="250px" marginUpDown="4" />
        ) : (
          setParametrizacaoNivel(selectedCard.tipoParametrizacao, selectedCard)
            .nome
        )
      }
      cardType={
        selectedCard.cardLoading ? (
          <Skeleton height="13px" width="200px" marginUpDown="4" />
        ) : (
          selectedCard.tipoParametrizacao
        )
      }
      display={hasContratantes ? 'none' : ''}
      width="100%"
      onClickEditar={() => handleOnClickEditar(selectedCard.idCard)}
      onClickExcluir={() =>
        handleModalCancelAction(
          selectedCard.idCard,
          selectedCard.idParametrizacao
        )
      }
      onClickSalvar={
        idUsuario > 0
          ? () => handleOnClickSalvar(selectedCard)
          : () => handleToogleCard(selectedCard.idCard)
      }
      isEditar={selectedCard.isEditar}
      idUsuario={idUsuario}
      idParametrizacao={selectedCard.idParametrizacao}
      loading={selectedCard.nodeLoading}
    >
      {!selectedCard.isEditar ? (
        <CounterContainer
          response={selectedCard.contagem}
          loading={selectedCard.cardLoading}
        />
      ) : (
        <CollapseNestedList
          selectedOptions={selectedCard.selectedOptions}
          selectedCard={selectedCard}
          contagem={selectedCard.contagem}
          options={selectedCard.options}
          idUsuario={idUsuario}
        />
      )}
    </CardContratantes>
  );
};

export default ParametrizacaoContratantes;
