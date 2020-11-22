import React, { useState } from 'react';
import produce from 'immer';

import { Collapse, CollapseHeader, CollapseContent } from '../Collapse';
import WrapperFlex from '../WrapperFlex';
import FileExplorer from '.';
import Checkbox from '../../atoms/Checkbox';

import { Container } from './styles';

const toppingOptions = [
    {
        name: 'Contratantes',
        id: 1,
        subOptions: [
            {
                name: '32824 - Cargill Maria Luiza Batista Cruz',
                id: 2,
                subOptions: [
                    {
                        name: 'Modalidades',
                        id: 3,
                        subOptions: [
                            {
                                name: '20',
                                id: 4,
                                subOptions: [
                                    {
                                        name: 'Termos',
                                        id: 5,
                                        subOptions: [
                                            {
                                                name:
                                                    '320 - Apartamento Completo',
                                                id: 6,
                                                subOptions: [],
                                            },
                                            {
                                                name:
                                                    '322 - Enfermaria Completo',
                                                id: 7,
                                                subOptions: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

function TreeView() {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [options, setOptions] = useState(toppingOptions);

    function handleRender() {
        return (
            <OptionsList
                options={options}
                onChange={(optionId) => setSelectedOptions(optionId)}
                selectedOptions={selectedOptions}
            />
        );
    }

    return (
        <div>
            <h1>Contratante</h1>
            {handleRender()}
        </div>
    );
}

const OptionsList = ({ options, selectedOptions, onChange }) => {
    const handleCheckboxClicked = (selectedOptionId) => {
        const newSelected = produce(selectedOptions, (draft) => {
            if (draft[selectedOptionId]) {
                delete draft[selectedOptionId];
            } else {
                draft[selectedOptionId] = {};
            }
            return draft;
        });

        onChange(newSelected);
    };

    const handleSubOptionsListChange = (optionId, subSelections) => {
        const newSubSelected = produce(selectedOptions, (draft) => {
            draft[optionId] = subSelections;

            return draft;
        });

        onChange(newSubSelected);
    };

    return (
        <div>
            {options.map((option) => (
                <ul>
                    <CheckboxContainer
                        selected={selectedOptions[option.id]}
                        label={option.name}
                        onChange={() => {
                            handleCheckboxClicked(option.id);
                        }}
                    />
                    {option.subOptions.length > 0 &&
                    selectedOptions[option.id] ? (
                        <OptionsList
                            options={option.subOptions}
                            selectedOptions={selectedOptions[option.id]}
                            onChange={(subSelections) =>
                                handleSubOptionsListChange(
                                    option.id,
                                    subSelections
                                )
                            }
                        />
                    ) : null}
                </ul>
            ))}
        </div>
    );
};

const CheckboxContainer = ({ selected, label, onChange }) => {
    return (
        <div>
            <Checkbox checked={selected} onClick={() => onChange(!selected)} />
            <button
                className="checkbox"
                type="button"
                onClick={() => onChange(!selected)}
            >
                {selected ? 'X' : 'O'}
            </button>
            <div className="label">{label}</div>
        </div>
    );
};

export default TreeView;
