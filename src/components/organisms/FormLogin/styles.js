import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ errorUsuario }) =>
    errorUsuario
      ? css`
        label:first-child {
          p{
            color: #ED1651 !important;
          }
        }
        `
      : ''}


  ${({ errorSenha }) =>
    errorSenha
      ? css`
        label:last-child {
          p{
            color: #ED1651 !important;
          }
        }
        `
      : ''}    
`

export const AutenticacaoActionsDescription = styled.span`
  font-size: 13px;
  color: #808080;
  cursor: pointer;
  text-align: left;
  font-family: 'unimed_slabregular';
  padding-right: 32.5%;

  &:hover {
    color: #00995D
  }
`;