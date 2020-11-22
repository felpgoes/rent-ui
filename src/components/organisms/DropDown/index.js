import React from 'react';
import produce from 'immer';

import {
  Dropdown,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  Option,
} from '../../molecules/Dropdown';

const DropDown = ({
  disable,
  name,
  headerText,
  maxHeight,
  options,
  onClick = (_) => _,
  overrideClick = false,
  params,
  setParams,
  className,
  width,
  height,
  minHeight,
}) => {
  const handleClick = (e) => {
    const newParams = produce(params, (draft) => {
      draft[e.target.name || e.target.getAttribute('name')] =
        e.target.dataset.text;

      return draft;
    });

    setParams(newParams);
  };

  return (
    <DropDownContainer
      width={width}
      minHeight={height}
      height={height}
      className={className}
      disable={disable}
    >
      <DropDownHeader
        minHeight={height}
        height={height}
        disable={disable}
        name={name}
        width={width}
      >
        {headerText}
      </DropDownHeader>
      <DropDownListContainer width={width}>
        <Dropdown>
          {Object.values(options).map((option, index) => (
            <Option
              name={name}
              key={`${index}_${option}`}
              onClick={
                overrideClick
                  ? (e) => {
                      onClick(e);
                    }
                  : (e) => handleClick(e)
              }
              text={option}
            />
          ))}
        </Dropdown>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

export default DropDown;
