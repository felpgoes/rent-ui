import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import theme from '../../../styles/theme';

export const Container = styled.input`
  padding: 10px;
  font: Regular 13px 'Calibri';
  color: ${theme.colorGray};

  ::placeholder {
    font: 13px Calibri Regular;
    letter-spacing: 0.52px;
    color: ${theme.grey}
}

    &:hover:enabled {
            background-color: ${theme.white};
            border: 1px solid ${theme.greenDefault};
    }
    &:focus{
        background-color: ${lighten(0.65, theme.greenDefault)};
        border: 1px solid ${theme.greenDefault};
    }
    &:focus:hover{
        background-color: ${lighten(0.65, theme.greenDefault)};
        border: 1px solid ${theme.greenDefault};
    }
    ${({ errorUsuario }) =>
      errorUsuario
        ? css`
            background-color: ${theme.white} !important;
            border: 1px solid ${theme.redLight} !important;
          `
        : ''}

${({ margin }) =>
  margin
    ? css`
        margin: ${margin}px;
      `
    : ''}


    ${({ marginTop }) =>
      typeof marginTop === 'number'
        ? css`
            margin-top: ${marginTop}px;
          `
        : marginTop
        ? css`
            margin-top: ${marginTop};
          `
        : ''}

${({ border }) =>
  border
    ? css`
        border: ${border};
      `
    : `border: 1px solid ${theme.grey}`};
    }
  }


${({ background }) =>
  background
    ? css`
        background: ${background};
      `
    : `background: ${theme.white} 0% 0% no-repeat padding-box`};
    }
  }

  ${({ disabled }) =>
    disabled
      ? css`
          background: ${theme.inputBackgroundGray} 0% 0% no-repeat padding-box;
          cursor: not-allowed;
        `
      : css``}


${({ borderRadius }) =>
  borderRadius
    ? css`
        border-radius: ${borderRadius};
      `
    : `border-radius: 5px`};
    }
  }


${({ opacity }) =>
  opacity
    ? css`
        opacity: ${opacity};
      `
    : `opacity: 1`};
    }
  }

${({ color }) =>
  color
    ? css`
        color: ${color};
      `
    : `color: ${theme.inputColorGray}`};
    }
  }



${({ font }) =>
  font
    ? css`
        font: ${font};
      `
    : `font: 15px Calibri Regular`};
    }
  }

${({ textAlign }) =>
  textAlign
    ? css`
        text-align: ${textAlign};
      `
    : `text-align: left`};
    }
  }

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : null};
    }
  }

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : null};
    }
  }


  @media (max-width: 768px) {
    flex: 0 1 ${({ percentageMobile }) =>
      percentageMobile ? `${percentageMobile}%` : '100%'};
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.redLight};
  font: 13px Calibri Regular;
  padding-top: 8px;
`;

export const IconValidation = styled.span`
  cursor: pointer;
  margin: 16px 16px;

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : ''}

  margin-bottom: 0;
  width: 100%;
  position: absolute;

  svg {
    ${({ showIconError }) =>
      showIconError
        ? css`
            fill: ${theme.redLight};
          `
        : css`
            fill: ${theme.greenDefault};
          `}
  }
`;
