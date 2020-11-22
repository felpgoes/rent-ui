import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  position: relative;
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  * {
    margin: ${(props) => props.margin || '5px'};
    font: bold 14px 'work_sans';
    letter-spacing: 0px;
  }

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ``};

  ${({ type }) =>
    type === 'warning'
      ? css`
          color: #856404;
          background: #fff3cd;
        `
      : type === 'success'
      ? css`
          color: #00995d;
          background: #f2faf7;
        `
      : type === 'danger'
      ? css`
          color: #721c24;
          background: #f8d7da;
        `
      : type === 'warningModal'
      ? css`
          color: #60656c;
          background: #fbf7e4;
          margin: 0 !important;
          padding: 0.75rem 0.25rem;

          span p {
            font-weight: 100;
            line-height: 20px;
            text-align: center;
          }
        `
      : type === 'PendenteLiberacao'
      ? css`
          span,
          svg {
            color: #f1c104;
            line-height: 37px;
          }
          background: #fbf7e4;
          justify-content: space-between;
          padding: 0.75rem 1.25rem 0.75rem 0.25rem;

          span p {
            color: #5a5a5a;
            padding-left: 32px;
            font-weight: 100;
          }
        `
      : type === 'Ativo'
      ? css`
          span,
          svg {
            color: #00995d;
            line-height: 37px;
          }
          background: #f2faf7;
          justify-content: space-between;
          padding: 0.75rem 1.25rem 0.75rem 0.25rem;

          span p {
            color: #5a5a5a;
            padding-left: 32px;
            font-weight: 100;
          }
        `
      : css``}

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          width: 691px;
        `}
    ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css``}
`;
