import React, { useContext } from 'react';

import { MdClose } from 'react-icons/md';
import ModalContext from '../../../context/ModalContext';

import {
  ModalContainer,
  ModalContentContainer,
  ModalContentWrapperContainer,
  ModalFooterContainer,
  ModalHeaderContainer,
  ModalBackGround,
} from './styles';

const Modal = ({
  children,
  isOpen,
  onClick,
  height,
  maxHeight,
  width,
  maxWidth,
  havingBackground = true,
  position,
  top,
  left,
}) => {
  return isOpen ? (
    <>
      {havingBackground ? <ModalBackGround /> : null}
      <ModalContainer
        position={position}
        top={top}
        left={left}
        height={height}
        width={width}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
      >
        <ModalContext.Provider value={{ onClick }}>
          {children}
        </ModalContext.Provider>
      </ModalContainer>
    </>
  ) : null;
};

const ModalHeader = ({ children, justifyContent, padding, background }) => {
  const { onClick } = useContext(ModalContext);

  return (
    <ModalHeaderContainer
      justifyContent={justifyContent}
      padding={padding}
      background={background}
    >
      {children}
      <MdClose onClick={(e) => onClick(e)} size="20" />
    </ModalHeaderContainer>
  );
};

const ModalContentWrapper = ({
  children,
  height,
  display,
  paddingTop,
  background,
}) => {
  return (
    <ModalContentWrapperContainer
      paddingTop={paddingTop}
      height={height}
      display={display}
      background={background}
    >
      {children}
    </ModalContentWrapperContainer>
  );
};

const ModalContent = ({
  children,
  isModalWithWarning,
  overflow,
  maxHeight,
  ref,
}) => {
  return (
    <ModalContentContainer
      isModalWithWarning={isModalWithWarning}
      overflow={overflow}
      maxHeight={maxHeight}
      ref={ref}
    >
      {children}
    </ModalContentContainer>
  );
};

const ModalFooter = ({
  children,
  justifyContent,
  alignItems,
  padding,
  marginBottom,
  paddingBottom,
  background,
}) => {
  return (
    <ModalFooterContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      marginBottom={marginBottom}
      paddingBottom={paddingBottom}
      background={background}
    >
      {children}
    </ModalFooterContainer>
  );
};

export { Modal, ModalHeader, ModalContentWrapper, ModalContent, ModalFooter };
