import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import WrapperFlex from '../WrapperFlex';

import theme from '../../../styles/theme';

import { ContainerEmptyContent } from './styles';

export default function LoadingSpinner({ height, size, color }) {
  return (
    <WrapperFlex height={height} justifyCenter alignCenter>
      <ContainerEmptyContent>
        <AiOutlineLoading3Quarters
          size={size || '50'}
          color={color || theme.greenDefault}
        />
      </ContainerEmptyContent>
    </WrapperFlex>
  );
}
