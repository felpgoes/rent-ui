import React from 'react';

import { BsPlusSquare, BsDashSquare } from 'react-icons/bs';

import { Container } from './styles';

import theme from '../../../styles/theme';

const ButtonCollapse = ({
  isCollapsed,
  onClick = (a) => a,
  menu,
  From,
  To,
  Size,
}) => {
  if (isCollapsed) {
    return (
      <Container
        type="button"
        isCollapsed={isCollapsed}
        menu={menu}
        onClick={onClick}
        Size={Size}
      >
        {From ? (
          <From size={Size} width={Size} height={Size} color={theme.grey} />
        ) : (
          <BsDashSquare size="15" />
        )}
      </Container>
    );
  }
  return (
    <Container
      type="button"
      isCollapsed={isCollapsed}
      menu={menu}
      onClick={onClick}
      Size={Size}
    >
      {To ? (
        <To size={Size} width={Size} height={Size} color={theme.grey} />
      ) : (
        <BsPlusSquare size="15" />
      )}
    </Container>
  );
};

export default ButtonCollapse;
