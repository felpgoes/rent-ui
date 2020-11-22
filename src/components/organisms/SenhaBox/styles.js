import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const ChangePasswordContainer = styled.div`
    padding: 12px 0 0 5px;
    width: 130px;
    ${({ display }) =>
        display
            ? css`
                  display: ${display};
              `
            : `display: flex`};

    &:hover {
        cursor: pointer;
    }
`;
