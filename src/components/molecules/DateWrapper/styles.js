import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  ${({ center }) =>
    center
      ? css`
          justify-content: center;
        `
      : null}
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: ${theme.fontSemibold};
  flex: 0 1 ${({ percentage }) => (percentage ? `${percentage}%` : 0)};
  position: relative;
  margin-top:8px;

  img {
    position: absolute;
    left: 6px;
    height: 24px;
    width: 24px;
    z-index: 1;
  }

  span {
    font-size: 14px;
    margin: 0 13px;

    @media (max-width: 768px) {
      font-size: 12px;
      margin: 0 10px;
    }
  }

  /* ${({ left }) =>
    left
      ? css`
          .react-datepicker-popper {
            left: calc(0px - 206.18px) !important;
            .react-datepicker {
              .react-datepicker__triangle {
                margin-left: 202px !important;
              }
            }
          }
        `
      : null} */

  .react-datepicker-popper .react-datepicker {
    & .react-datepicker__day--selected,
    .react-datepicker__time-list-item--selected,
    .react-datepicker__day--keyboard-selected {
      background-color: ${theme.greenDefault} !important;
    }
  }

  input {
    width: 180px;
    height: 48px;
    background-color: ${theme.bgInput};
    color: ${theme.textGrayDisabled};
    border: none;
    font-size: 14px;
    padding-left: 36px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 4px;
    border-bottom: 2px solid lightgrey;
    transition: all ease-in 0.2s;
    .react-datepicker__day-name {
      display: block !important;
    }

    ::placeholder {
      color: ${theme.textGrayDisabled};
    }

    @media (max-width: 768px) {
      width: 150px;
      height: 40px;
      font-size: 12px;
    }
  }

  input:focus {
    border-bottom: 2px solid ${theme.greenDefault};
  }

  .react-datepicker {
    display: flex;
  }

  .react-datepicker__day--selected {
    background-color: ${theme.greenDefault} !important;

    :hover {
      background-color: ${theme.greenPressed} !important;
    }
  }

  .react-datepicker__time-list-item {
    line-height: 20px;
  }

  .react-datepicker__time-list-item--selected {
    background-color: ${theme.greenDefault} !important;

    :hover {
      background-color: ${theme.greenPressed} !important;
    }
  }
`
