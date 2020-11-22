import React from 'react'

import theme from '../../../styles/theme'

import WrapperFlex from '../../molecules/WrapperFlex'

export default function CardTag({
  green,
  greenDash,
  yellow,
  yellowDash,
  red,
  redDash,
  blue,
  blueDash,
  filled,
  blackText,
  children,
  style,
  ...props
}) {
  let color = ''

  if (green) color = theme.toastSuccess
  if (yellow) color = theme.toastWarning
  if (red) color = theme.movPrimary
  if (blue) color = theme.toastInfo

  if (greenDash) color = theme.green400
  if (yellowDash) color = theme.orangeA400
  if (redDash) color = theme.movPrimary
  if (blueDash) color = theme.blueA300

  return (
    <WrapperFlex
      {...props}
      justifyCenter
      alignCenter
      style={{
        height: 24,
        minHeight: 24,
        padding: '0 16px',
        border: `1px solid ${color}`,
        borderRadius: 12,
        fontSize: 10,
        color: filled ? theme.bgWhite : blackText ? theme.movBlack90 : color,
        backgroundColor: filled ? color : theme.bgWhite,
        fontWeight: 'bold',
        ...style
      }}
    >
      {children}
    </WrapperFlex>
  )
}
