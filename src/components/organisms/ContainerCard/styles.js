import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  position: relative;
  justify-content: center;
  color: ${theme.movBlack};
  background-color: ${theme.bgWhite};
  margin: ${({ mobileDisplay }) => (mobileDisplay ? '6px 0' : '8px 0')};
  border-radius: 4px;
  box-shadow: 0 1px 3px ${theme.shadowDefault};
  transition: all 0.2s ease;
  ${({ dashed }) => dashed && `border: 2px dashed ${theme.bgGrayDisabled};`}

  ${({ statusColor }) =>
    statusColor
      ? css`
          border-right: 10px solid ${statusColor};
        `
      : ''};

  ${({ marginSides }) =>
    marginSides
      ? css`
          margin-left: 8px;
          margin-right: 8px;
        `
      : ''};

  ${({ notAllignItemsCenter }) =>
    notAllignItemsCenter
      ? ''
      : css`
          align-items: center;
        `};

  ${({ flexRow }) =>
    flexRow
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: column;
        `};

  ${({ block }) =>
    block
      ? css`
          display: block;
          position: initial;
        `
      : ''};

  ${({ justifySpaceBetween }) =>
    justifySpaceBetween
      ? css`
          justify-content: space-between;
        `
      : ''};

  ${({ flex }) =>
    flex
      ? css`
          flex: 1;
        `
      : ''};

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            cursor: pointer;
            box-shadow: 0 2px 6px ${theme.shadowHover};
          }
        `
      : ''}

  ${({ noShadow }) =>
    noShadow
      ? css`
          box-shadow: none;
        `
      : ''}

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : ''}

  ${({ infoBox }) =>
    infoBox
      ? css`
          padding: 15px 55px;
          align-items: flex-start;
        `
      : ''}

  ${({ headerBox }) =>
    headerBox
      ? css`
          padding: 24px;
          align-items: flex-start;
        `
      : ''}

    ${({ flexStart }) =>
      flexStart
        ? css`
            justify-content: flex-start;
          `
        : ''};

  ${({ centerBox }) =>
    centerBox
      ? css`
          padding: 55px;
        `
      : ''}

  ${({ noMargin }) =>
    noMargin
      ? css`
          margin: 0;
        `
      : ''}

  @media (max-width: 768px) {
    margin-top: 6px;
    margin-bottom: 6px;

    ${({ statusColor }) =>
      statusColor
        ? css`
            border-right: 6px solid ${statusColor};
          `
        : ''};

    ${({ infoBox }) =>
      infoBox
        ? css`
            padding: 10px 16px;
          `
        : ''}

    ${({ centerBox }) =>
      centerBox
        ? css`
            padding: 16px;
          `
        : ''}
  }
`
