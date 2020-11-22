import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`

cursor: pointer;

  ${({ display }) =>
      display
          ? css`
                display: ${display};
            `
          : `display: flex`};

${({ alignItems }) =>
    alignItems
        ? css`
              align-items: ${alignItems};
          `
        : `align-items: center`};

${({ justifyContent }) =>
    justifyContent
        ? css`
              justify-content: ${justifyContent};
          `
        : `justify-content: center`};

${({ background }) =>
    background
        ? css`
              background: ${background};
          `
        : `background:  ${theme.grey100} 0% 0% no-repeat padding-box`};
    }
  }

${({ borderRadius }) =>
    borderRadius
        ? css`
              border-radius: ${borderRadius};
          `
        : `border-radius:  10px`};
    }
  }

${({ opacity }) =>
    opacity
        ? css`
              opacity: ${opacity};
          `
        : `opacity:  1`};
    }
  }

${({ height }) =>
    height
        ? css`
              height: ${height};
          `
        : `height:  160px`};
    }
  }

${({ width }) =>
    width
        ? css`
              width: ${width};
          `
        : `width:  408px`};
    }
  }

  svg{
    color: ${theme.greenDefault}
  }
`;

export const InputFileContainer = styled.div`
    display: flex;

    flex-direction: column;
`;

export const HiddenInput = styled.input`
    display: none;
`;
