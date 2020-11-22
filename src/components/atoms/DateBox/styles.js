import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: ${theme.blueDefault};
  background-color: ${theme.bgWhite};

  ${({ small }) =>
    small
      ? css`
          height: 40px;
          min-width: 40px;
          line-height: 12px;

          span {
            font-size: 14px;
          }

          p {
            font-size: 10px !important;
          }

          h6 {
            font-size: 8px;
            line-height: 10px;
          }
        `
      : css`
          height: 70px;
          min-width: 70px;
          line-height: 20px;

          @media (max-width: 768px) {
            height: 50px;
            min-width: 50px;
            line-height: 12px;
          }

          span {
            font-size: 22px;
            font-weight: ${theme.fontSemibold};

            @media (max-width: 768px) {
              font-size: 14px;
            }
          }

          p {
            font-size: 18px;
            text-transform: uppercase;

            @media (max-width: 768px) {
              font-size: 11px;
            }
          }

          h6 {
            font-size: 9px;
            text-transform: uppercase;
            font-weight: ${theme.fontSemibold};
            line-height: 12px;

            @media (max-width: 768px) {
              font-size: 8px;
            }
          }
        `}
`
