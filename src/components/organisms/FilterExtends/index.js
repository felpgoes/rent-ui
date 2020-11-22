import React, { useState, useEffect } from 'react';

import ButtonConfirm from '../../atoms/ButtonConfirm';
import ButtonBorderless from '../../atoms/ButtonBorderless';
import InputForm from '../../atoms/InputForm';

import {
  CardFilter,
  CardFilterContent,
  CardFilterFooter,
  CardFilterHeader,
} from '../../molecules/CardFilter';
import DatePicker from '../../molecules/DatePicker';
import LabelContainer from '../../molecules/LabelContainer';
import WrapperFlex from '../../molecules/WrapperFlex';
import Can from '../../molecules/CheckPermissions';

import DropDownMovimentacao from '../DropDownMovimentacao';
import DropDownTipos from '../DropDownTipos';
import DropDownYesNo from '../DropDownYesNo';
import ComboModalidadeTermo from '../ComboModalidadeTermo';

import { ComboDatePicker, Container } from './styles';

import { isNumber } from '../../../utils/validation';

import {
  TipoListaEnum,
  MovimentacaoListaEnum,
  TipoPerfilUsuarioEnum,
} from '../../../enums';

function FilterExtends({
  isOpen,
  isGetModalidadesSuccess,
  modalidades,
  handleGetModalidadesByContratante,
  setSearchBoxValue,
  cleanFilterParams,
}) {
  const [selectedMovimentacao, setSelectedMovimentacao] = useState('');
  const [selectedTipo, setSelectedTipo] = useState('');
  const [selectedModalidade, setSelectedModalidade] = useState('');
  const [selectedTermo, setSelectedTermo] = useState('');
  const [inputContratante, setInputContratante] = useState('');
  const [
    inputNomeBeneficiarioCartao,
    setInputNomeBeneficiarioCartao,
  ] = useState('');
  const [selectedListasVencidas, setSelectedListasVencidas] = useState('');
  const [selectedRN412, setSelectedRN412] = useState('');
  const [disableImportarCriacao, setDisableImportarCriacao] = useState(false);
  const [disableImportarAtualizacao, setDisableImportarAtualizacao] = useState(
    false
  );
  const [dates, setDates] = useState({
    dataCriacaoDe: null,
    dataCriacaoAte: null,
    dataAtualizacaoDe: null,
    dataAtualizacaoAte: null,
  });

  function handleDataCriacaoDe(e) {
    const dataCriacaoAte = e > dates.dataCriacaoAte ? e : dates.dataCriacaoAte;
    setDates({
      dataCriacaoDe: e,
      dataCriacaoAte,
      dataAtualizacaoDe: dates.dataAtualizacaoDe,
      dataAtualizacaoAte: dates.dataAtualizacaoAte,
    });
  }

  function handleDataCriacaoAte(e) {
    setDates({
      dataCriacaoDe: dates.dataCriacaoDe,
      dataCriacaoAte: e,
      dataAtualizacaoDe: dates.dataAtualizacaoDe,
      dataAtualizacaoAte: dates.dataAtualizacaoAte,
    });
  }

  function handleDataAtualizacaoDe(e) {
    const dataAtualizacaoAte =
      e > dates.dataAtualizacaoAte ? e : dates.dataAtualizacaoAte;
    setDates({
      dataCriacaoDe: dates.dataCriacaoDe,
      dataCriacaoAte: dates.dataCriacaoAte,
      dataAtualizacaoDe: e,
      dataAtualizacaoAte,
    });
  }

  function handleDataAtualizacaoAte(e) {
    setDates({
      dataCriacaoDe: dates.dataCriacaoDe,
      dataCriacaoAte: dates.dataCriacaoAte,
      dataAtualizacaoDe: dates.dataAtualizacaoDe,
      dataAtualizacaoAte: e,
    });
  }

  function handleSelectedMovimentacao(e) {
    setSelectedMovimentacao(e.target.dataset.text);
  }

  function handleSelectedTipo(e) {
    setSelectedTipo(e.target.dataset.text);
  }

  function handleInputContratanteChange(e) {
    if (e.target.value === '' || isNumber(e.target.value))
      setInputContratante(e.target.value);

    if (e.target.value === '') {
      setSelectedModalidade('');
      setSelectedTermo('');
    }
  }

  function handleLimparFiltros() {
    setSelectedTipo('');
    setSelectedMovimentacao('');
    setSelectedModalidade('');
    setSelectedTermo('');
    setDates({
      dataCriacaoDe: null,
      dataCriacaoAte: null,
      dataAtualizacaoDe: null,
      dataAtualizacaoAte: null,
    });
    setInputContratante('');
    setSearchBoxValue('');
    cleanFilterParams();
    setInputNomeBeneficiarioCartao('');
    setSelectedListasVencidas('');
    setSelectedRN412('');
  }

  function handleInputNomeBeneficiarioCartao(e) {
    setInputNomeBeneficiarioCartao(e.target.value);
  }

  function handleSelectedListasVencidas(e) {
    setSelectedListasVencidas(e.target.dataset.text);
  }
  function handleSelectedRN412(e) {
    setSelectedRN412(e.target.dataset.text);
  }

  useEffect(() => {
    function handleDisableImportar() {
      if (
        (dates.dataCriacaoDe && dates.dataCriacaoAte) ||
        (!dates.dataCriacaoDe && !dates.dataCriacaoAte)
      ) {
        setDisableImportarCriacao(false);
      } else {
        setDisableImportarCriacao(true);
      }

      if (
        (dates.dataAtualizacaoDe && dates.dataAtualizacaoAte) ||
        (!dates.dataAtualizacaoDe && !dates.dataAtualizacaoAte)
      ) {
        setDisableImportarAtualizacao(false);
      } else {
        setDisableImportarAtualizacao(true);
      }
    }

    handleDisableImportar();
  }, [dates]);

  return (
    <Container isOpen={isOpen}>
      <CardFilter>
        <CardFilterHeader>filtro avançado</CardFilterHeader>
        <CardFilterContent minHeight="184">
          <WrapperFlex wrap="true" justifyStart>
            <LabelContainer marginBottom="6" text="Nome Beneficiário ou Cartão">
              <InputForm
                name="nomeBeneficiarioCartao"
                width="300"
                height="46"
                type="text"
                handleChange={handleInputNomeBeneficiarioCartao}
                value={inputNomeBeneficiarioCartao}
                placeholder="Pesquise por nome do beneficiário ou cartão"
              />
            </LabelContainer>
            <DropDownTipos
              tipos={TipoListaEnum.returnName}
              onClick={handleSelectedTipo}
              headerText={selectedTipo || 'Selecione o tipo'}
              name="tipo"
            />
            <DropDownMovimentacao
              tipos={MovimentacaoListaEnum.returnNameFormatted}
              onClick={handleSelectedMovimentacao}
              headerText={selectedMovimentacao || 'Selecione a movimentação'}
              name="movimentacao"
            />
            <Can
              checkRole={{
                Adm: TipoPerfilUsuarioEnum.returnNameForName.Adm,
              }}
            >
              <LabelContainer marginBottom="6" text="Contratante">
                <InputForm
                  name="codigoContratante"
                  width="170"
                  height="46"
                  type="text"
                  handleChange={handleInputContratanteChange}
                  value={inputContratante}
                  placeholder="Selecione a contratante"
                  handleInputOnBlur={(e) =>
                    handleGetModalidadesByContratante(e, inputContratante)
                  }
                />
              </LabelContainer>
            </Can>
            <ComboModalidadeTermo
              selectedModalidade={selectedModalidade}
              setSelectedModalidade={setSelectedModalidade}
              selectedTermo={selectedTermo}
              setSelectedTermo={setSelectedTermo}
              isGetModalidadesSuccess={isGetModalidadesSuccess}
              modalidades={modalidades}
            />
            <DropDownYesNo
              onClick={handleSelectedListasVencidas}
              headerText={selectedListasVencidas || 'Todas'}
              name="vencida"
              labelText="Listas Vencidas"
            />
            <DropDownYesNo
              onClick={handleSelectedRN412}
              headerText={selectedRN412 || 'Todas'}
              name="rn412"
              labelText="RN412"
            />
          </WrapperFlex>
          <WrapperFlex wrap="true" justifyStart>
            <LabelContainer marginBottom="6" text="Data de criação">
              <ComboDatePicker>
                <DatePicker
                  name="dataCriacaoDe"
                  onChange={handleDataCriacaoDe}
                  value={dates.dataCriacaoDe}
                />
                <p>à</p>
                <DatePicker
                  onChange={handleDataCriacaoAte}
                  name="dataCriacaoAte"
                  minDate={dates.dataCriacaoDe}
                  value={dates.dataCriacaoAte}
                />
              </ComboDatePicker>
            </LabelContainer>
            <LabelContainer
              marginBottom="6"
              text="Data de atualização"
              marginLeft="20px"
            >
              <ComboDatePicker>
                <DatePicker
                  name="dataAtualizacaoDe"
                  onChange={handleDataAtualizacaoDe}
                  value={dates.dataAtualizacaoDe}
                />
                <p>à</p>
                <DatePicker
                  onChange={handleDataAtualizacaoAte}
                  name="dataAtualizacaoAte"
                  minDate={dates.dataAtualizacaoDe}
                  value={dates.dataAtualizacaoAte}
                />
              </ComboDatePicker>
            </LabelContainer>
          </WrapperFlex>
        </CardFilterContent>
        <CardFilterFooter justifyContent="left">
          <ButtonConfirm
            padding={8}
            justifyCenter
            alignCenter
            text="pesquisar"
            type="submit"
            disabled={disableImportarCriacao || disableImportarAtualizacao}
            opacity={
              disableImportarCriacao || disableImportarAtualizacao ? 0.4 : 1
            }
          />
          <ButtonBorderless
            padding={8}
            justifyCenter
            alignCenter
            text="limpar"
            type="button"
            onClick={handleLimparFiltros}
          />
        </CardFilterFooter>
      </CardFilter>
    </Container>
  );
}

export default FilterExtends;
