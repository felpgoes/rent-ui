import React from 'react'

import ContainerCard from '../../organisms/ContainerCard'
import WrapperFlex from '../WrapperFlex'
import Text from '../../atoms/Text'

import { IconWrapper } from './styles'

export default function SmallRectanguleCard({ title, description, icon: Icon, style, ...props }) {
  const { onClick } = props

  return (
    <ContainerCard
      {...props}
      disabled={!onClick}
      style={{ width: 205, height: 154, margin: 5, ...style }}
    >
      <WrapperFlex fullWidth flex column style={{ padding: '16px 16px 8px' }}>
        {Icon && (
          <IconWrapper>
            <Icon height={21} width={20} color="#fff" />
          </IconWrapper>
        )}

        <WrapperFlex fullWidth justifySpaceBetween style={{ marginTop: 7 }}>
          <Text bold text={title} style={{ lineHeight: '15px', fontSize: '11px' }} />
        </WrapperFlex>
        <WrapperFlex fullWidth justifySpaceBetween style={{ marginTop: 7 }}>
          <Text
            color="#7C7C7B"
            text={description}
            style={{ lineHeight: '14px', fontSize: '10px' }}
          />
        </WrapperFlex>
      </WrapperFlex>
    </ContainerCard>
  )
}
