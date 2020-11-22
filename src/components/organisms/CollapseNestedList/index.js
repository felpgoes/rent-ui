import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import produce from 'immer';
import { set, isEmpty, get } from 'lodash';
import ReactTooltip from 'react-tooltip';
import { RiErrorWarningLine } from 'react-icons/ri';

import { Creators as ContratanteActions } from '../../../store/ducks/contratante';

import { Creators as UsuarioActions } from '../../../store/ducks/usuario';

import theme from '../../../styles/theme';

import Checkbox from '../../atoms/Checkbox';
import { Text } from '../../atoms/Text';
import Icon from '../../atoms/Icon';

import {
  CollapseItem,
  CollapseHeaderItem,
  CollapseFooterItem,
  CollapseContentItem,
} from '../../molecules/CollapseItem';
import WrapperFlex from '../../molecules/WrapperFlex';

import { getContagem } from '../../../utils/treeViewBuilder';

import { Container, Wrapper, OptionContainer, CheckboxWrapper } from './styles';

function CollapseNestedList({ selectedCard, contagem, options, idUsuario }) {
  const dispatch = useDispatch();

  return (
    <OptionsList
      options={options}
      onChange={(optionId) =>
        dispatch(
          ContratanteActions.parametrizacaoSetSelectedOption(
            optionId,
            selectedCard.idCard
          )
        )
      }
      selectedOptions={selectedCard.selectedOptions}
      isFirst
      selectedCard={selectedCard}
      idUsuario={idUsuario}
      contagem={contagem}
    />
  );
}

const OptionsList = ({
  options,
  selectedOptions,
  onChange,
  isFirst,
  selectedCard,
  idUsuario,
  contagem,
}) => {
  const { parametrizacaoRoot } = useSelector((state) => state.contratante);
  const BASE_PATH = [0, 'subOptions'];
  const dispatch = useDispatch();
  const handleCheckboxClicked = (option) => {
    dispatch(
      ContratanteActions.parametrizacaoSetSelectedOption(
        option.currentPath,
        selectedCard.idCard,
        !option.check,
        option.isHeader,
        option.id,
        option.previousPath
      )
    );
  };

  const setTipoNodeRequest = (option, parametrizacao, idCard) => {
    const tipoNodes = {
      Contratante: ContratanteActions.getGrupoContratantesRequest({
        codigoGrupo: parametrizacao?.complemento?.codigoGrupo,
        codigoComplemento: parametrizacao?.complemento?.codigoComplemento,
        idCard,
        path: BASE_PATH,
        currentPath: option.currentPath,
      }),
      Modalidade: ContratanteActions.getContratanteModalidadesRequest({
        codigoContratante: option.codigoContratante,
        idCard,
        path: option.nextPath,
        currentPath: option.currentPath,
      }),
      Termo: ContratanteActions.getModalidadeTermosRequest({
        codigoContratante: option.codigoContratante,
        codigoModalidade: option.codigoModalidade,
        idCard,
        path: option.nextPath,
        currentPath: option.currentPath,
      }),
    };

    return tipoNodes[option.nextRequest];
  };
  const setTipoNodeRequestById = (option, parametrizacao, idCard, idUser) => {
    const tipoNodes = {
      Contratante: UsuarioActions.getParametrizacaoNodeRequest(
        idUser,
        {
          codigoGrupo: parametrizacao?.complemento?.codigoGrupo,
          codigoComplemento: parametrizacao?.complemento?.codigoComplemento,
          idCard,
          path: BASE_PATH,
          currentPath: option.currentPath,
          idParametrizacao: parametrizacao.idParametrizacao,
        },
        'contratante'
      ),
      Modalidade: UsuarioActions.getParametrizacaoNodeRequest(
        idUser,
        {
          codigoContratante: option.codigoContratante,
          idCard,
          path: option.nextPath,
          currentPath: option.currentPath,
          idParametrizacao: parametrizacao.idParametrizacao,
        },
        'modalidade'
      ),
      Termo: UsuarioActions.getParametrizacaoNodeRequest(
        idUser,
        {
          codigoContratante: option.codigoContratante,
          codigoModalidade: option.codigoModalidade,
          idCard,
          path: option.nextPath,
          currentPath: option.currentPath,
          idParametrizacao: parametrizacao.idParametrizacao,
        },
        'termo'
      ),
    };

    return tipoNodes[option.nextRequest];
  };

  function handlePath(pathName, idCard) {
    dispatch(ContratanteActions.parametrizacaoSetPath(pathName, idCard));
  }
  function handleHeaderRequest(option, idUser) {
    if (selectedCard.idParametrizacao === 0)
      dispatch(setTipoNodeRequest(option, selectedCard, selectedCard.idCard));
    dispatch(
      ContratanteActions.parametrizacaoSetLoading(true, selectedCard.idCard)
    );
  }
  return (
    <>
      {options.map(
        (option) =>
          option && (
            <CollapseItem data-testid>
              <OptionContainer isFirst={isFirst}>
                <CollapseHeaderItem
                  handleClick={
                    !option.isHeader && isEmpty(option.subOptions)
                      ? () => handleHeaderRequest(option, idUsuario)
                      : (_) => _
                  }
                  handlePath={() =>
                    handlePath(option.nextPath, selectedCard.idCard)
                  }
                  isDisabled={!option.hasSubOptions || option?.isLast}
                >
                  <CheckboxContainer
                    selected={option.check}
                    label={option.name}
                    count={option.count}
                    isHeader={option.isHeader}
                    novo={option.novo}
                    inativado={option.inativado}
                    removeCheck={option.removeCheck}
                    onClick={() => {
                      handleCheckboxClicked(option);
                    }}
                  />
                </CollapseHeaderItem>
                <CollapseContentItem>
                  {option.subOptions.length > 0 ? (
                    <OptionsList
                      options={option.subOptions}
                      selectedCard={selectedCard}
                      idUsuario={idUsuario}
                      contagem={contagem}
                    />
                  ) : null}
                </CollapseContentItem>
              </OptionContainer>
            </CollapseItem>
          )
      )}
    </>
  );
};

const CheckboxContainer = ({
  selected,
  label,
  onClick,
  count,
  isHeader,
  novo,
  inativado,
  removeCheck = false,
}) => {
  return (
    <CheckboxWrapper>
      {inativado && (
        <>
          <Checkbox
            disabled
            checked={selected}
            onClick={() => onClick(!selected)}
          />
          <Text
            color="#808080"
            type="headlineOne"
            text={label}
            marginRight="10px"
          />
          <RiErrorWarningLine
            color={theme.grey}
            data-tip="Parâmetro indisponível e não associado a contratante."
            data-for="options"
            size="25"
          />
        </>
      )}
      {novo && (
        <>
          <Checkbox checked={selected} onClick={() => onClick(!selected)} />
          <Text
            color="#808080"
            type="headlineTwo"
            text={label}
            marginRight="10px"
          />
          <RiErrorWarningLine
            color={theme.grey}
            data-tip="Novo parâmetro disponível e associado a contratante."
            data-for="options"
            size="25"
          />
        </>
      )}
      {!novo && !inativado && (
        <>
          {!removeCheck ? (
            <Checkbox checked={selected} onClick={() => onClick(!selected)} />
          ) : null}
          <Text
            color="#808080"
            type="headlineTwo"
            text={label}
            marginRight="10px"
          />
        </>
      )}

      {isHeader && !removeCheck && (
        <>
          <Text
            paddingLeft="10px"
            font="12px calibri regular"
            text={`${label} selecionadas:`}
          />
          <Text
            font="Bold 13px calibri"
            text={count}
            marginLeft="7px"
            color={theme.greenLink}
          />
        </>
      )}

      <ReactTooltip
        id="options"
        className="extraClass"
        delayHide={false}
        effect="solid"
        backgroundColor={theme.greenDefault}
        textColor={theme.bgWhite}
        place="right"
      />
    </CheckboxWrapper>
  );
};

export default CollapseNestedList;
