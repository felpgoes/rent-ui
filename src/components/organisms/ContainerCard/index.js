import React from 'react'

import { Container } from './styles'

const ContainerCard = ({
  hidden,
  flex,
  statusColor,
  dashed,
  disabled,
  infoBox,
  flexStart,
  flexRow,
  centerBox,
  onClick = _ => _,
  children,
  block,
  headerBox,
  justifySpaceBetween,
  fullWidth,
  notAllignItemsCenter,
  mobileDisplay,
  marginSides,
  noShadow,
  noMargin,
  ...props
}) => (
  <Container
    {...props}
    hidden={hidden}
    flex={flex}
    statusColor={statusColor}
    dashed={dashed}
    disabled={disabled}
    infoBox={infoBox}
    flexStart={flexStart}
    flexRow={flexRow}
    centerBox={centerBox}
    fullWidth={fullWidth}
    onClick={e => {
      e.stopPropagation()
      !disabled && onClick()
    }}
    block={block}
    headerBox={headerBox}
    justifySpaceBetween={justifySpaceBetween}
    notAllignItemsCenter={notAllignItemsCenter}
    mobileDisplay={mobileDisplay}
    marginSides={marginSides}
    noShadow={noShadow}
    noMargin={noMargin}
  >
    {children}
  </Container>
)

export default ContainerCard
