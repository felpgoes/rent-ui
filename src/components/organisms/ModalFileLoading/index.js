import React, { useState } from 'react';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../../molecules/Modal';

import { UploadeProgressEnum } from '../../../enums';

import FileUpload from '../../molecules/FileUpload';

import ButtonBorder from '../../atoms/ButtonBorder';
import ButtonConfirm from '../../atoms/ButtonConfirm';

import { Container, ContentText, ContentFile } from './styles';

function ModalFileLoading({
  isOpen,
  onClick,
  finishedLoadingFiles,
  listasCarregadas,
  importLoading,
  listaFiles,
  progress,
  uploadedLote,
  fileUploadedHistory,
  onClickCancel,
}) {
  const [canImport, setCanImport] = useState(false);
  const lastIndex = listaFiles.length - 1;

  function handleProgress(file) {
    let result = 0;
    let fileUploaded = false;

    if (
      file.id === uploadedLote.idFile &&
      progress.id == uploadedLote.listaId &&
      uploadedLote.uploadState === UploadeProgressEnum.InProgress
    ) {
      result = progress.progressValue;
    }

    if (fileUploadedHistory)
      fileUploaded = fileUploadedHistory.find(
        (fileUploaded) =>
          (fileUploaded.idFile === file.id && fileUploaded.isUploaded) || false
      );
    if (fileUploaded) {
      result = 100;
      if(listaFiles[lastIndex].id === file.id) setCanImport(true);
    }

    return result;
  }

  return (
    <Modal isOpen={isOpen} onClick={onClick} onClickCancel={onClickCancel}>
      <ModalHeader>importar</ModalHeader>
      <ModalContentWrapper height="300" display="block">
        <ModalContent>
          <Container>
            <ContentText>
              Aguarde! Seus arquivos estão sendo carregados.
            </ContentText>
            {Object.values(listaFiles).map((file) => (
              <MyContentFile
                file={file}
                uploadProgress={handleProgress}
                onClickCancel={onClickCancel}
              />
            ))}
          </Container>
        </ModalContent>
      </ModalContentWrapper>
      <ModalFooter justifyContent="flex-end">
        <ButtonBorder
          onClick={onClick}
          text="cancelar"
          justifyCenter
          alignCenter
          marginRight="20px"
        />
        <ButtonConfirm
          text="importar"
          onClick={finishedLoadingFiles}
          justifyCenter
          alignCenter
          disabled={!canImport}
          opacity={!listasCarregadas || importLoading ? 0.4 : 1}
        />
      </ModalFooter>
    </Modal>
  );
}

const MyContentFile = ({ file, uploadProgress, onClickCancel }) => {
  return (
    <ContentFile key={file.id}>
      <FileUpload
        fileName={file.name}
        fileSize={file.readableSize}
        uploadProgress={uploadProgress(file)}
        onClickCancel={onClickCancel}
        idFile={file.id}
      />
    </ContentFile>
  );
};

export default ModalFileLoading;
