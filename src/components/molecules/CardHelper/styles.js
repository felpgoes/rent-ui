import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0;
    margin: 0 5px;
    border-radius: 8px;

    div {
        background-color: ${theme.bgInput};
        border-radius: 100px;
    }

    .image {
        margin-top: 30px;
        height: 80px;
        width: 80px;
        border-radius: 8px;

        @media (max-width: 768px) {
            margin-top: 5px;
        }
    }

    .title {
        margin-top: 5px;
        height: 18px;
        width: 160px;
    }

    .title-2 {
        margin-top: 5px;
        height: 18px;
        width: 140px;
    }

    .subtitle {
        margin-top: 5px;
        height: 12px;
        width: 60px;
    }

    .price {
        margin-top: 30px;
        height: 22px;
        width: 60px;
    }

    .box {
        margin-top: 5px;
        height: 35px;
        width: 140px;
        border-radius: 8px;
    }

    .subtitle-2 {
        margin-top: 5px;
        height: 10px;
        width: 100px;
    }

    ${({ productCard }) =>
        productCard
            ? css`
                  background-color: '#fff';
                  border: 1px solid rgba(255, 255, 255, 0.001);
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
              `
            : ''}

    ${({ cardWidth }) =>
        cardWidth
            ? css`
                  max-width: ${cardWidth}px;
                  min-width: ${cardWidth}px;
              `
            : css`
                  width: 127px;
              `}

  @media (max-width: 768px) {
        ${({ cardWidth }) =>
            cardWidth
                ? css`
                      max-width: ${cardWidth}px;
                      min-width: ${cardWidth}px;
                  `
                : css`
                      width: 127px;
                  `}
    }
`;
