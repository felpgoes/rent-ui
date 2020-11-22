import styled, { css } from 'styled-components';
import { DropDownHeader } from '../../molecules/Dropdown';
import theme from '../../../styles/theme';

export const DropDownHeaderContratantes = styled(DropDownHeader)``;
export const OptionsContainer = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight};
        `
      : ``};
`;
