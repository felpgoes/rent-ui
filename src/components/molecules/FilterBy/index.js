import React from 'react'

import {
  Container,
  SortTitleWrapper,
  OverflowWrapper,
  FadeLeft,
  SortButtonsWrapper,
  Helper,
  FadeRight
} from './styles'

const FilterBy = ({ text, children, ...props }) => (
  <Container {...props}>
    <SortTitleWrapper>
      <span>{text}</span>
    </SortTitleWrapper>

    <OverflowWrapper>
      <FadeLeft />
      <SortButtonsWrapper>
        {children}
        <Helper />
      </SortButtonsWrapper>
      <FadeRight />
    </OverflowWrapper>
  </Container>
)

export default FilterBy
