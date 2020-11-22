import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: ${theme.blueDefault};
  padding: 15px;
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
            position: absolute;
            text-align: center;
            font: Bold 14px/20px Open Sans;
            letter-spacing: 0;
            color: #ffffff;
            opacity: 1;
            top: 45%;
            left: 56%;
            right: auto;
            bottom: auto;
            margin-right: -50%;
            transform: translate(-50%, -50%);

            @media (max-width: 768px) {
              font-size: 11px;
              top: 43%;
              left: 59%;
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
