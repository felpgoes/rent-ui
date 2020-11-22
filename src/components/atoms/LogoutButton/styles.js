import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;

  svg {
    cursor: pointer;
    transition: 0.2s;

    :hover {
      opacity: 0.7;
    }
  }
`
