import React, { useState, useContext } from 'react';

import ButtonCollapse from '../../atoms/ButtonCollapse';

import CollapseContext from '../../../context/CollapseContext';

import { CardHeader } from '../../atoms/Card';
import {
  ContainerCollapse,
  CollapseContentContainer,
  CollapseFooterContainer,
  CollapseHeaderContainer,
} from './styles';

function Collapse({ children, className }) {
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

function CollapseHeader({
  text,
  children,
  justifyContent,
  alignItems,
  className,
}) {
  const { open, handleCollapse } = useContext(CollapseContext);
  return (
    <CardHeader justifyContent={justifyContent} alignItems={alignItems}>
      <CollapseHeaderContainer
        justifyContent="start"
        alignItems="baseline"
        display
        className={className}
      >
        <ButtonCollapse isCollapsed={open} onClick={handleCollapse} />
        {text}
      </CollapseHeaderContainer>
      {children}
    </CardHeader>
  );
}

function CollapseFooter({ children }) {
  const { open } = useContext(CollapseContext);
  return open ? (
    <CollapseFooterContainer>{children}</CollapseFooterContainer>
  ) : null;
}

function CollapseContent({ children, alignItems, justifyContent }) {
  const { open } = useContext(CollapseContext);
  return (
    <CollapseContentContainer
      display={open}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </CollapseContentContainer>
  );
}
export { Collapse, CollapseHeader, CollapseFooter, CollapseContent };
