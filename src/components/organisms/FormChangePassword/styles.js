import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ errorSenhaAntiga }) =>
    errorSenhaAntiga
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
        label:nth-child(2) {
          p{
            color: #ED1651 !important;
          }
        }
        `
      : ''}


  ${({ errorConfirmarSenha }) =>
    errorConfirmarSenha
      ? css`
        label:last-child {
          p{
            color: #ED1651 !important;
          }
        }
        `
      : ''}

  ${({ showOnBlurAntigaSenha }) =>
   showOnBlurAntigaSenha
      ? css`
        label:first-child {
          span:last-child{
            visibility: visible;
          }
        }
        `
      : css`
        label:first-child {
          span:last-child{
            visibility: hidden;
          }
        }
      `} 

  ${({ showOnBlurNovaSenha }) =>
    showOnBlurNovaSenha
      ? css`
        label:nth-child(2) {
          span:last-child{
            visibility: visible;
          }
        }
        `
      : css`
        label:nth-child(2) {
          span:last-child{
            visibility: hidden;
          }
        }
      `} 

  ${({ showOnBlurConfirmarSenha }) =>
    showOnBlurConfirmarSenha
      ? css`
        label:last-child {
          span:last-child{
            visibility: visible;
          }
        }
        `
      : css`
        label:last-child {
          span:last-child{
            visibility: hidden;
          }
        }
      `}    
`