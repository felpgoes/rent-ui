import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  CardFilter,
  CardFilterContent,
  CardFilterFooter,
  CardFilterHeader,
} from '../../molecules/CardFilter';

import DropDownPerfil from '../DropDownPerfil';

import ButtonConfirm from '../../atoms/ButtonConfirm';

import ButtonBorderless from '../../atoms/ButtonBorderless';

import WrapperFlex from '../../molecules/WrapperFlex';

import { Container, ComboDatePicker } from './styles';
import DatePicker from '../../molecules/DatePicker';
import LabelContainer from '../../molecules/LabelContainer';

import { PerfilEnum, TipoPerfilUsuarioEnum } from '../../../enums';

function FilterExtendsUsuarios({ isOpen, setInputValue }) {
  const { loading } = useSelector((state) => state.usuario.getConsultaUsuarios);

  const [selectedPerfil, setSelectedPerfil] = useState('');
  const [clearField, setClearField] = useState(false);
  const [dates, setDates] = useState({
    dataCriacaoDe: null,
    dataCriacaoAte: null,
    dataLiberacaoDe: null,
    dataLiberacaoAte: null,
    dataInativacaoDe: null,
    dataInativacaoAte: null,
  });
  const [disableImportarCriacao, setDisableImportarCriacao] = useState(false);
  const [disableImportarLiberacao, setDisableImportarLiberacao] = useState(
    false
  );
  const [disableImportarInativacao, setDisableImportarInativacao] = useState(
    false
  );

  function handleDataCriacaoDe(e) {
    const dataCriacaoAte = e > dates.dataCriacaoAte ? e : dates.dataCriacaoAte;
    setDates({
      dataCriacaoDe: e,
      dataCriacaoAte,
      dataLiberacaoDe: dates.dataLiberacaoDe,
      dataLiberacaoAte: dates.dataLiberacaoAte,
      dataInativacaoDe: dates.dataInativacaoDe,
      dataInativacaoAte: dates.dataInativacaoAte,
    });
  }

  function handleDataCriacaoAte(e) {
    setDates({
      dataCriacaoDe: dates.dataCriacaoDe,
      dataCriacaoAte: e,
      dataLiberacaoDe: dates.dataLiberacaoDe,
      dataLiberacaoAte: dates.dataLiberacaoAte,
      dataInativacaoDe: dates.dataInativacaoDe,
      dataInativacaoAte: dates.dataInativacaoAte,
    });
  }

  function handleDataLiberacaoDe(e) {
    const dataLiberacaoAte =
      e > dates.dataLiberacaoAte ? e : dates.dataLiberacaoAte;
    setDates({
      dataCriacaoDe: dates.dataCriacaoDe,
      dataCriacaoAte: dates.dataCriacaoAte,
      dataLiberacaoDe: e,
      dataLiberacaoAte,
      dataInativacaoDe: dates.dataInativacaoDe,
      dataInativacaoAte: dates.dataInativacaoAte,
    });
  }

  function handleDataLiberacaoAte(e) {
    setDates({
      dataCriacaoDe: dates.dataCriacaoDe,
      dataCriacaoAte: dates.dataCriacaoAte,
      dataLiberacaoDe: dates.dataLiberacaoDe,
      dataLiberacaoAte: e,
      dataInativacaoDe: dates.dataInativacaoDe,
      dataInativacaoAte: dates.dataInativacaoAte,
    });
  }

  function handleDataInativacaoDe(e) {
    const dataInativacaoAte =
      e > dates.dataInativacaoAte ? e : dates.dataInativacaoAte;
    setDates({
      dataCriacaoDe: dates.dataCriacaoDe,
      dataCriacaoAte: dates.dataCriacaoAte,
      dataLiberacaoDe: dates.dataLiberacaoDe,
      dataLiberacaoAte: dates.dataLiberacaoAte,
      dataInativacaoDe: e,
      dataInativacaoAte,
    });
  }

  function handleDataInativacaoAte(e) {
    setDates({
      dataCriacaoDe: dates.dataCriacaoDe,
      dataCriacaoAte: dates.dataCriacaoAte,
      dataLiberacaoDe: dates.dataLiberacaoDe,
      dataLiberacaoAte: dates.dataLiberacaoAte,
      dataInativacaoDe: dates.dataInativacaoDe,
      dataInativacaoAte: e,
    });
  }

  function handleSelectedPerfil(e) {
    setSelectedPerfil(e.target.dataset.text);
  }

  function handleLimparFiltros() {
    setSelectedPerfil('');
    setDates({
      dataCriacaoDe: '',
      dataCriacaoAte: '',
      dataLiberacaoDe: '',
      dataLiberacaoAte: '',
      dataInativacaoDe: '',
      dataInativacaoAte: '',
    });
    setInputValue('');
    setClearField(true);
  }

  useEffect(() => {
    setClearField(false);
  }, []);

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
        (dates.dataLiberacaoDe && dates.dataLiberacaoAte) ||
        (!dates.dataLiberacaoDe && !dates.dataLiberacaoAte)
      ) {
        setDisableImportarLiberacao(false);
      } else {
        setDisableImportarLiberacao(true);
      }

      if (
        (dates.dataInativacaoDe && dates.dataInativacaoAte) ||
        (!dates.dataInativacaoDe && !dates.dataInativacaoAte)
      ) {
        setDisableImportarInativacao(false);
      } else {
        setDisableImportarInativacao(true);
      }
    }

    handleDisableImportar();
  }, [dates]);

  return (
    <Container isOpen={isOpen}>
      <CardFilter minHeight="280">
        <CardFilterHeader>filtro avançado</CardFilterHeader>
        <CardFilterContent>
          <WrapperFlex wrap="true" justifyStart>
            <DropDownPerfil
              perfis={TipoPerfilUsuarioEnum.returnNameFormatted}
              onClick={handleSelectedPerfil}
              headerText={selectedPerfil || 'Selecione o perfil'}
              name="perfil"
            />
            <LabelContainer text="Data de criação" marginLeft="20px">
              <ComboDatePicker>
                <DatePicker
                  clearField={clearField}
                  name="dataCriacaoDe"
                  onChange={handleDataCriacaoDe}
                  value={dates.dataCriacaoDe}
                />
                <p>à</p>
                <DatePicker
                  clearField={clearField}
                  name="dataCriacaoAte"
                  onChange={handleDataCriacaoAte}
                  minDate={dates.dataCriacaoDe}
                  value={dates.dataCriacaoAte}
                />
              </ComboDatePicker>
            </LabelContainer>
            <LabelContainer text="Data de liberação" marginLeft="30px">
              <ComboDatePicker>
                <DatePicker
                  clearField={clearField}
                  name="dataLiberacaoDe"
                  onChange={handleDataLiberacaoDe}
                  value={dates.dataLiberacaoDe}
                />
                <p>à</p>
                <DatePicker
                  clearField={clearField}
                  name="dataLiberacaoAte"
                  onChange={handleDataLiberacaoAte}
                  minDate={dates.dataLiberacaoDe}
                  value={dates.dataLiberacaoAte}
                />
              </ComboDatePicker>
            </LabelContainer>
            <LabelContainer
              marginLeft="5"
              marginTop="15"
              text="Data de inativação"
            >
              <ComboDatePicker>
                <DatePicker
                  clearField={clearField}
                  name="dataInativacaoDe"
                  onChange={handleDataInativacaoDe}
                  value={dates.dataInativacaoDe}
                />
                <p>à</p>
                <DatePicker
                  clearField={clearField}
                  name="dataInativacaoAte"
                  onChange={handleDataInativacaoAte}
                  minDate={dates.dataInativacaoDe}
                  value={dates.dataInativacaoAte}
                />
              </ComboDatePicker>
            </LabelContainer>
          </WrapperFlex>
        </CardFilterContent>
        <CardFilterFooter justifyContent="left" paddingTop="0px">
          <ButtonConfirm
            padding={8}
            justifyCenter
            alignCenter
            isLoading={loading}
            text="pesquisar"
            type="submit"
            disabled={
              disableImportarCriacao ||
              disableImportarInativacao ||
              disableImportarLiberacao
            }
            opacity={
              disableImportarCriacao ||
              disableImportarInativacao ||
              disableImportarLiberacao
                ? 0.4
                : 1
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

export default FilterExtendsUsuarios;
