import React from 'react';
import PropTypes from 'prop-types';

import { Container, THead, TBody, Tr, Th, Td, LinkContainer } from './styles';

const Table = ({ children }) => {
  return <Container>{children}</Container>;
};

const TableHead = ({ children }) => {
  return <THead>{children}</THead>;
};

const TableBody = ({ children }) => {
  return <TBody>{children}</TBody>;
};

const TableCell = ({
  children,
  widthAuto,
  padding,
  width,
  redirectToDetalheLista,
  activeAction,
  colspan,
}) => {
  return (
    <Td width={width} widthAuto={widthAuto} padding={padding} colSpan={colspan}>
      <LinkContainer
        activeAction={activeAction}
        onClick={redirectToDetalheLista ? () => redirectToDetalheLista() : null}
      >
        {children}
      </LinkContainer>
    </Td>
  );
};

const TableHeader = ({ children, widthAuto }) => {
  return <Th widthAuto={widthAuto}>{children}</Th>;
};

const TableRow = ({
  children,
  onMouseLeave,
  onMouseEnter,
  maxWidth,
  minWidth,
  onClick = (_) => _,
  isClickable = false,
}) => {
  return (
    <Tr
      maxWidth={maxWidth}
      minWidth={minWidth}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      isClickable={isClickable}
    >
      {children}
    </Tr>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
};
TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};
TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};
TableCell.propTypes = {
  children: PropTypes.node,
};
TableCell.defaultProps = {
  children: '',
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Table, TableHead, TableBody, TableCell, TableHeader, TableRow };
