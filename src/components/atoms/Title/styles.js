import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.p`


${({ gray }) =>
    gray
            ? css`
            color: ${(gray)};
        `
        : `color: ${theme.titleGray}`};
    }
  }

${({ font }) =>
        font
            ? css`
            font: ${(font)};
        `
        : `font: 34px unimed_slabbold`};
    }
  }

${({ letterSpacing }) =>
    letterSpacing
            ? css`
            letter-spacing: ${(letterSpacing)};
        `
        : `letter-spacing: 0px`};
    }
  }

${({ textAlign }) =>
        textAlign
            ? css`
            text-align: ${(textAlign)};
        `
            : `text-align: left`};
    }
  }

${({ opacity }) =>
        opacity
            ? css`
            opacity: ${(opacity)};
        `
            : `opacity: 1`};
    }
  }
`
