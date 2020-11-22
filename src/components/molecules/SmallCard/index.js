import React from 'react'

import theme from '../../../styles/theme'
import ContainerCard from '../../organisms/ContainerCard'
import WrapperFlex from '../WrapperFlex'
import Text from '../../atoms/Text'
// import OpenQuotationsIcon from '../../icons/OpenQuotationsIcon'

export default function SmallCard({ Icon, color, label, value, ...props }) {
  return (
    <ContainerCard {...props} noMargin disabled style={{ minWidth: 162 }}>
      <WrapperFlex fullWidth justifySpaceAround alignCenter>
        <WrapperFlex
          justifyCenter
          alignCenter
          style={{
            backgroundColor: color,
            borderRadius: 25,
            marginRight: 8,
            marginLeft: 20,
            minWidth: 50,
            height: 50
          }}
        >
          {Icon ? <Icon /> : null}
        </WrapperFlex>

        <WrapperFlex column justifyCenter style={{ marginRight: 20 }}>
          <Text text={label} style={{ fontSize: 11 }} />
          <Text bold huge text={value} color={color} />
        </WrapperFlex>
      </WrapperFlex>
    </ContainerCard>
  )
}
