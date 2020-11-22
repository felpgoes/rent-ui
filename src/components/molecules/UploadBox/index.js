import React, { useRef, useState, useEffect } from 'react';

import { MdFileUpload } from 'react-icons/md';
import { toast } from 'react-toastify';

import { getBase64 } from '../../../utils/array';

import { WarningToast } from '../Toast';

import { Container, IconContainer, HiddenInput, Content } from './styles';

function UploadBox({
    disabled,
    setNewArquivoImportacao,
    listaUploaded,
    loading,
    uploadSuccess,
    listaId,
    setListaId,
}) {
    const [data, setData] = useState([]);
    const [uploadError, setUploadError] = useState(false);

    const fileInputRef = useRef(null);

    function openFileDialog() {
        fileInputRef.current.click();
    }

    function fileListToArray(list) {
        const array = [];
        for (let i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    async function preparaArquivo(file) {
        setListaId('');
        const fileToBase64 = await getBase64(file);

        const novoArquivoRequest = {
            idLista: listaUploaded.listaId,
            arquivo: fileToBase64,
            nomeArquivo: file.name,
            idHub: '',
        };

        setListaId(listaUploaded.listaId);
        setNewArquivoImportacao(novoArquivoRequest);
    }

    function onFilesAdded(e) {
        setUploadError(false);
        setData([]);

        const { files } = e.target;
        handleFiles(files);
    }

    function handleFiles(files) {
        if (files && files[0]) {
            const validExtension = ['txt'];
            const extension = files[0].name.split('.').pop().toLowerCase();

            if (!validExtension.includes(extension)) {
                toast.error(
                    <WarningToast>
                        O envio de{' '}
                        <strong>listas de movimentações em lote </strong>
                        permite envio de até <strong>10</strong> arquivos{' '}
                        <strong>.txt</strong> de até <strong>5mb</strong> cada.
                    </WarningToast>
                );
            } else {
                preparaArquivo(files[0]);
            }
        }
    }

    function dragOver(e) {
        e.preventDefault();
    }
    function dragEnter(e) {
        e.preventDefault();
    }
    function dragLeave(e) {
        e.preventDefault();
    }
    function fileDrop(e) {
        e.preventDefault();
        const { files } = e.dataTransfer;

        if (files.length) {
            handleFiles(files);
        }
    }

    return (
        <Container
            height="30"
            width="504"
            onClick={openFileDialog}
            onChange={onFilesAdded}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
        >
            <p>{listaUploaded.nomeArquivo}</p>
            <HiddenInput
                ref={fileInputRef}
                className="FileInput"
                type="file"
                multiple
            />
            <IconContainer>
                <MdFileUpload color="#808080" />
            </IconContainer>
        </Container>
    );
}

export default UploadBox;
