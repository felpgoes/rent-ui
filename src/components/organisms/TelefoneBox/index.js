import React, { useState } from 'react';
import produce from 'immer';

import { MdAddCircleOutline } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';

import { maskPattern } from '../../../utils/validation';

import {
  Container,
  NewTelefoneContainer,
  FirstTelefoneWrapper,
  CloseIconContainer,
} from './styles';

import DropDownTipoTelefoneLabel from '../DropDownTipoTelefoneLabel';
import LabelContainer from '../../molecules/LabelContainer';
import InputMasked from '../../atoms/InputMasked';
import { Text } from '../../atoms/Text';

import TipoTelefoneEnum from '../../../enums/TipoTelefoneEnum';

import theme from '../../../styles/theme';

function TelefoneBox({
  pageParams,
  setPageParams,
  onChange,
  onClick,
  useField,
}) {
  const [showAddTelephone, setShowAddTelephone] = useState(true);

  function isLimitTelefone() {
    const LIMITE_TELEFONE = 2;

    return pageParams.contatos.length < LIMITE_TELEFONE;
  }

  function handleAddNewTelefone() {
    if (isLimitTelefone()) {
      const newContato = produce(pageParams, (draft) => {
        draft.contatos.push({
          tipo: TipoTelefoneEnum.returnNameForName.Residencial,
          numero: '',
        });

        return draft;
      });

      setPageParams(newContato);
    } else {
      setShowAddTelephone(!showAddTelephone);
    }
  }

  return (
    <Container>
      {pageParams.contatos.map((contato, index) => {
        return (
          <TelefoneWrapper
            setPageParams={setPageParams}
            pageParams={pageParams}
            contato={contato}
            idTelefoneBox={index}
            maskPattern={maskPattern}
            onChange={onChange}
            onClick={onClick}
            displayLabel={index !== 0 ? 'none' : ''}
            useField={useField}
          />
        );
      })}
      {isLimitTelefone() ? (
        <NewTelefoneContainer
          onClick={handleAddNewTelefone}
          display={showAddTelephone ? 'flex' : 'none'}
        >
          <MdAddCircleOutline color={theme.green1} size="16" />
          <Text
            font="14px regular work_sans"
            color={theme.green1}
            marginLeft="12px"
            text="adicionar novo telefone"
          />
        </NewTelefoneContainer>
      ) : null}
    </Container>
  );
}

const TelefoneWrapper = ({
  idTelefoneBox,
  contato,
  maskPattern,
  pageParams,
  setPageParams,
  onClick,
  displayLabel,
  useField,
}) => {
  function handleSetTelefoneTipo(e, idTelefoneBox) {
    debugger;
    const newTipo = produce(pageParams, (draft) => {
      draft.contatos[idTelefoneBox].tipo = e.target.dataset.text;
      draft.contatos[idTelefoneBox].numero = '';

      return draft;
    });

    setPageParams(newTipo);
  }

  function handleInputChange(e, idTelefoneBox) {
    const newTipo = produce(pageParams, (draft) => {
      draft.contatos[idTelefoneBox].numero = e.target.value.replace(/\D+/g, '');

      return draft;
    });

    setPageParams(newTipo);
  }

  function deleteTelefone(IndexTelefone) {
    const newTipo = produce(pageParams, (draft) => {
      draft.contatos.splice(IndexTelefone, 1);
      return draft;
    });

    setPageParams(newTipo);
  }

  return (
    <FirstTelefoneWrapper>
      <DropDownTipoTelefoneLabel
        tipos={TipoTelefoneEnum.returnName}
        onClick={(e) => {
          handleSetTelefoneTipo(e, idTelefoneBox);
        }}
        headerText={contato.tipo || 'Selecione o tipo'}
        name={`contato[${idTelefoneBox}].tipo`}
        width="149px"
        marginRight="0"
        borderRadius="5px 0px 0px 5px"
        displayLabel={displayLabel}
      />
      <LabelContainer
        text="Número de telefone"
        margin="0"
        displayText={displayLabel}
      >
        <InputMasked
          width="210"
          name={`contato[${idTelefoneBox}].numero`}
          onClick={() => {}}
          height="46"
          placeholder="Selecione o número de telefone"
          borderRadius="0px 5px 5px 0px"
          mask={maskPattern[contato.tipo]}
          handleChange={(e) => {
            handleInputChange(e, idTelefoneBox);
          }}
          value={contato.numero}
          useField={useField}
        />
      </LabelContainer>
      {idTelefoneBox !== 0 ? (
        <CloseIconContainer onClick={() => deleteTelefone(idTelefoneBox)}>
          <CgClose size="16" color={theme.redDefault} />
        </CloseIconContainer>
      ) : null}
    </FirstTelefoneWrapper>
  );
};

export default TelefoneBox;
