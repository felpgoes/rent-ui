import React from 'react';
import { FaRegFile } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import ProgressBar from '../ProgressBar';

import { FileBox, FileBoxHeader, FileContent, FileBoxFooter } from './styles';

function convertSize(sizeInBytes) {
    if (sizeInBytes < 10000) {
        const sizeInKilobytes = (sizeInBytes / 1024).toFixed(2);
        return `${sizeInKilobytes} kb`;
    }

    const sizeInMegabytes = (sizeInBytes / (1024 * 1024)).toFixed(2);
    return `${sizeInMegabytes} mb`;
}

function FileUpload({
    fileName,
    fileSize,
    uploadProgress,
    onClickCancel,
    idFile,
}) {
    return (
        <FileBox>
            <FaRegFile />
            <FileContent>
                <FileBoxHeader>
                    <p>{fileName}</p>
                    <p>{uploadProgress}%</p>
                </FileBoxHeader>
                <ProgressBar completed={uploadProgress} />
                <FileBoxFooter>
                    <p>{convertSize(fileSize)}</p>
                </FileBoxFooter>
            </FileContent>
            <AiOutlineCloseCircle onClick={() => onClickCancel(idFile)} />
        </FileBox>
    );
}

export default FileUpload;
