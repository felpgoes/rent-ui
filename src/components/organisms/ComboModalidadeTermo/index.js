import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DropDownModalidade from '../DropDownModalidade';
import DropDownTermos from '../DropDownTermos';
import theme from '../../../styles/theme';

function ComboModalidadeTermo({
    selectedModalidade,
    setSelectedModalidade,
    selectedTermo,
    setSelectedTermo,
    isGetModalidadesSuccess,
    modalidades,
}) {
    function handleSelectedModalidade(e) {
        setSelectedModalidade(e.target.dataset.text);
        if (e.target.dataset.text !== selectedModalidade) {
            setSelectedTermo('');
        }
    }

    function handleSelectedTermo(e) {
        setSelectedTermo(e.target.dataset.text);
    }

    function isValidModalidadeETermo() {
        return modalidades.every(
            (modalidade) => modalidade.codigoModalidade !== 0
        );
    }

    function handleTermos() {
        const termos = modalidades
            .filter(
                (modalidade) =>
                    modalidade.codigoModalidade ===
                    parseInt(selectedModalidade, 10)
            )
            .map((modalidade) => modalidade.termos);

        return termos;
    }

    useEffect(() => {
        setSelectedModalidade('');
        setSelectedTermo('');
    }, [modalidades]);

    return (
        <>
            <DropDownModalidade
                headerText={selectedModalidade || 'Selecione a modalidade'}
                onClick={handleSelectedModalidade}
                modalidades={modalidades}
                name="modalidade"
                disable={!isGetModalidadesSuccess || !isValidModalidadeETermo()}
                backgroundColor={
                    !isGetModalidadesSuccess || !isValidModalidadeETermo()
                        ? theme.greyDisable
                        : false
                }
            />

            <DropDownTermos
                headerText={selectedTermo || 'Selecione o termo'}
                termos={handleTermos()}
                onClick={handleSelectedTermo}
                disable={!selectedModalidade || !isValidModalidadeETermo()}
                backgroundColor={
                    !selectedModalidade ? theme.greyDisable : false
                }
                name="termo"
            />
        </>
    );
}

export default ComboModalidadeTermo;
