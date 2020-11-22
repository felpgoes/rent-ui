import React, { useEffect } from 'react';

import {
  Collapse,
  CollapseHeader,
  CollapseContent,
} from '../../molecules/Collapse';

import Input from '../../atoms/Input';
import UploadBox from '../../molecules/UploadBox';
import TextArea from '../../atoms/TextArea';
import LabelContainer from '../../molecules/LabelContainer';

import ButtonRemove from '../../atoms/ButtonRemove';

import WrapperFlex from '../../molecules/WrapperFlex';

import {
  UploadFileLoading,
  UploadFileWarning,
  UploadFileSuccess,
} from './styles';

function CollapseListaDetalhe({
  listaUploaded,
  setNewArquivoImportacao,
  loading,
  uploadSuccess,
  listaId,
  setListaId,
  onClickHandleCancelList,
}) {
  function handleImportacaoStatus() {
    if (listaId === listaUploaded.listaId) {
      if (loading) return <UploadFileLoading isLoading={loading} />;
      if (uploadSuccess) {
        return <UploadFileSuccess />;
      }
      if (!loading && !uploadSuccess) {
        return <UploadFileWarning />;
      }
    }
  }
  return (
    <Collapse>
      <CollapseHeader
        text={listaUploaded.nomeLista}
        justifyContent="space-between"
        display
        alignItems="center"
      >
        <ButtonRemove
          onClick={() => onClickHandleCancelList(listaUploaded.idFile)}
        />
      </CollapseHeader>
      <WrapperFlex wrap justifyStart alignStart>
        <CollapseContent justifyContent="start" alignItems="start">
          <WrapperFlex wrap justifySpaceBetween alignStart marginBottom>
            <LabelContainer text="Lista">
              <Input
                width="164"
                height="40"
                value={listaUploaded.nomeLista}
                disabled
              />
            </LabelContainer>
            <LabelContainer text="Contratante">
              <Input
                width="400"
                height="40"
                value={listaUploaded.codigoContratante}
                disabled
              />
            </LabelContainer>
          </WrapperFlex>
          <WrapperFlex marginBottom>
            <LabelContainer text="Descrição(opcional)">
              <TextArea
                name={`descricao[${listaUploaded.listaId}]`}
                width="682px"
                height="83px"
              />
            </LabelContainer>
          </WrapperFlex>
          <WrapperFlex justifySpaceEvenly alignCenter marginBottom>
            <WrapperFlex column flexStart marginBottom>
              <LabelContainer onClick={() => {}} text="Arquivo" />
              <UploadBox
                uploadSuccess={uploadSuccess}
                listaId={listaId}
                setListaId={setListaId}
                loading={loading}
                listaUploaded={listaUploaded}
                setNewArquivoImportacao={setNewArquivoImportacao}
              />
            </WrapperFlex>
            {handleImportacaoStatus()}
          </WrapperFlex>
        </CollapseContent>
      </WrapperFlex>
    </Collapse>
  );
}

export default CollapseListaDetalhe;
