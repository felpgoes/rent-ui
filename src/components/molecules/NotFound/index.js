import React from 'react';

import WrapperCenter from '../WrapperCenter';
import WrapperFlex from '../WrapperFlex';

const NotFound = ({ text, noCapitalize }) => (
  <WrapperFlex>
    <NotFound text={text} noCapitalize={noCapitalize} />
  </WrapperFlex>
);

export default NotFound;
