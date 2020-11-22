import styled from 'styled-components'

export const Container = styled.div`
  img {
    width: 26px;
    height: 26px;
  }

  &.slick-arrow {
    width: 26px;
    height: 0;
    bottom: 50%;
  }

  &.slick-arrow::before {
    content: none;
  }

  &.slick-prev {
    transform: rotate(90deg);
  }

  &.slick-next {
    transform: rotate(270deg);
  }
`
