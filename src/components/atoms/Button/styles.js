import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.button`


${({ border }) =>
    border
        ? css`
              border: ${border};
          `
        : `border: 1px solid ${theme.greenDefault}`};
    }
  }

${({ font }) =>
    font
        ? css`
              font: ${font};
          `
        : `font: 20px unimed_slabbold Regular`};
    }
  }

${({ color }) =>
    color
        ? css`
              color: ${color};
          `
        : `color: ${theme.greenDefault}`};
    }
  }

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

  ${({ height }) =>
      height
          ? css`
                height: ${height};
            `
          : ''};
  }
}

${({ width }) =>
    width
        ? css`
              width: ${width};
          `
        : ''};
  }
}

${({ background }) =>
    background
        ? css`
              background: ${background};
          `
        : ''};
  }
}
${({ marginLeft }) =>
    marginLeft
        ? css`
              margin-left: ${marginLeft};
          `
        : ''};
  }
}
${({ marginRight }) =>
    marginRight
        ? css`
              margin-right: ${marginRight};
          `
        : ''};
  }
}

`;
