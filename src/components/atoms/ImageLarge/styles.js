import styled from 'styled-components'

export const Container = styled.img`
  height: 112px;
  width: 112px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
  }
`
