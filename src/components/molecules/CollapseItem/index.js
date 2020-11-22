import React, { useState, useContext } from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import ButtonCollapse from '../../atoms/ButtonCollapse';
import LoadingSpinning from '../LoadingSpinning';

import CollapseContext from '../../../context/CollapseContext';

import WrapperFlex from '../WrapperFlex';
import {
  ContainerCollapse,
  CollapseContentContainer,
  CollapseFooterContainer,
  CollapseHeaderContainer,
} from './styles';

function CollapseItem({ children, className }) {
  const [open, setOpen] = useState(false);

  function handleCollapse() {
    setOpen(!open);
  }
  return (
    <ContainerCollapse isCollapsed={open} className={className}>
      <CollapseContext.Provider value={{ open, handleCollapse }}>
        {children}
      </CollapseContext.Provider>
    </ContainerCollapse>
  );
}

function CollapseHeaderItem({
  children,
  className,
  handleClick = (_) => _,
  handlePath = (_) => _,
  isDisabled = false,
  loading = false,
  isCollapsed = false,
}) {
  const { open, handleCollapse } = useContext(CollapseContext);
  return (
    <WrapperFlex width="100%" justifySpaceBetween alignCenter>
      <CollapseHeaderContainer
        justifyContent="start"
        alignItems="center"
        display
        className={className}
      >
        {children}
        {loading ? (
          <LoadingSpinning />
        ) : !isDisabled ? (
          <ButtonCollapse
            Size="23"
            From={MdKeyboardArrowDown}
            To={MdKeyboardArrowDown}
            isCollapsed={isCollapsed || open}
            onClick={(e) => {
              e.stopPropagation();
              handlePath();
              handleClick();
              handleCollapse();
            }}
          />
        ) : null}
      </CollapseHeaderContainer>
    </WrapperFlex>
  );
}

function CollapseFooterItem({ children }) {
  const { open } = useContext(CollapseContext);
  return open ? (
    <CollapseFooterContainer>{children}</CollapseFooterContainer>
  ) : null;
}

function CollapseContentItem({ children, alignItems, justifyContent }) {
  const { open } = useContext(CollapseContext);
  return open ? (
    <CollapseContentContainer
      display={open}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </CollapseContentContainer>
  ) : null;
}
export {
  CollapseItem,
  CollapseHeaderItem,
  CollapseFooterItem,
  CollapseContentItem,
};
