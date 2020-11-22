import styled, { css } from 'styled-components';

import { Input } from '@rocketseat/unform';

import theme from '../../../styles/theme';

export const Container = styled(Input)`
padding: 10px;

${({ width }) =>
    width
        ? css`
              width: ${width};
          `
        : `width: 682px;`};
    }
  }

${({ height }) =>
    height
        ? css`
              height: ${height};
          `
        : `height: 82px;`};
    }
  }

${({ border }) =>
    border
        ? css`
              border: ${border};
          `
        : `border: 1px solid ${theme.borderGray}`};
    }
  }


${({ background }) =>
    background
        ? css`
              background: ${background};
          `
        : `background: ${theme.bgWhite} 0% 0% no-repeat padding-box`};
    }
  }


${({ borderRadius }) =>
    borderRadius
        ? css`
              borderradius: ${borderRadius};
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
        : `color: ${theme.dropdownColorGray}`};
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

${({ letterSpacing }) =>
    letterSpacing
        ? css`
              letter-spacing: ${letterSpacing};
          `
        : `letter-spacing: 0.52px`};
    }
  }
`;
