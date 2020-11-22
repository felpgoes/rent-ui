import React, { useRef, useState, useEffect } from 'react';

import { uniqueId } from 'lodash';
import { toast } from 'react-toastify';

import { MdPublish } from 'react-icons/md';
import { Container, InputFileContainer, HiddenInput } from './styles';

import { InputFileText } from '../../atoms/Text';

import { WarningToast } from '../Toast';

function InputFile({
    justifyContent,
    alignItems,
    display,
    font,
    text,
    color,
    textAlign,
    letterSpacing,
    name,
    background,
    borderRadius,
    opacity,
    width,
    height,
    children,
    margin,
    padding,
    lineHeight,
    setListaFiles,
    ...props
}) {
    const fileInputRef = useRef(null);
    const [filesUpload, setFilesUpload] = useState({});
    const [data, setData] = useState([]);
    const [uploadError, setUploadError] = useState([]);
    let uploadedFiles;

    function openFileDialog() {
        fileInputRef.current.click();
    }

    function onFilesAdded(e) {
        setUploadError(false);
        setData([]);

        const { files } = e.target;
        handleFiles(files);
    }

    function handleFiles(files) {
        setUploadError([]);
        const maxQuantityFiles = 10; // Quantidade máxima de arquivos à serem enviados
        const maxSizeFiles = 5242880; // Tamanho máximo(bytes) dos arquivos à serem enviados = 5mb
        const validExtension = ['txt'];
        const invalidFiles = [];
        uploadedFiles = Object.values(files)
            .map((file) => ({
                file,
                id: uniqueId(),
                name: file.name,
                readableSize: file.size,
                preview: URL.createObjectURL(file),
                progress: 0,
                uploaded: false,
                error: false,
                url: null,
            }))
            .filter((item) => {
                if (
                    !(item.readableSize > maxSizeFiles) &&
                    validExtension.includes(
                        item.name.split('.').pop().toLowerCase()
                    )
                ) {
                    return item;
                }
                setUploadError([...uploadError, item]);
            });

        if (uploadedFiles.length > 10) {
            uploadedFiles = uploadedFiles.slice(0, maxQuantityFiles);
            toast.error(
                <WarningToast>
                    O envio de listas ultrapassou o limite máximo de arquivos e
                    apenas
                    <strong> 10 arquivos foram considerados. </strong>
                </WarningToast>
            );
        }
        setListaFiles(uploadedFiles);
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

    useEffect(() => {
        if (uploadError.length > 0)
            toast.error(
                <WarningToast>
                    O envio de <strong>listas de movimentações em lote </strong>
                    permite somente arquivos <strong>.txt</strong> de até{' '}
                    <strong>5mb</strong> cada.
                </WarningToast>
            );
    }, [uploadError]);

    return (
        <>
            <Container
                {...props}
                background={background}
                borderRadius={borderRadius}
                opacity={opacity}
                width={width}
                height={height}
                display={display}
                alignItems={alignItems}
                justifyContent={justifyContent}
                onClick={openFileDialog}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
                <MdPublish size="90" />

                <HiddenInput
                    ref={fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={onFilesAdded}
                />

                {children}
            </Container>
        </>
    );
}

const Text = ({
    children,
    text,
    color,
    textAlign,
    letterSpacing,
    font,
    margin,
    padding,
    lineHeight,
    display,
}) => (
    <InputFileText
        text={text}
        color={color}
        textAlign={textAlign}
        letterSpacing={letterSpacing}
        font={font}
        padding={padding}
        margin={margin}
        lineHeight={lineHeight}
        display={display}
    >
        {children}
    </InputFileText>
);

const FileContainer = ({ children }) => (
    <InputFileContainer>{children}</InputFileContainer>
);

export { InputFile, Text, FileContainer };
