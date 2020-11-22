import React from 'react'

import ContainerCard from '../../organisms/ContainerCard'
import WrapperFlex from '../WrapperFlex'
import Text from '../../atoms/Text'

import theme from '../../../styles/theme'

export default function ListCard({ title, items, onClick, style, ...props }) {
  return (
    <ContainerCard
      {...props}
      disabled
      style={{
        margin: '0 0 20px 0',
        ...style
      }}
    >
      <WrapperFlex column fullWidth alignStart style={{ padding: '12px 16px 8px' }}>
        <Text big bold text={title} style={{ marginBottom: 16 }} />
        {!items.length ? (
          <Text
            text="Nenhum(a) Encontrado(a)"
            style={{
              color: theme.movSecondary,
              width: '100%',
              textAlign: 'center',
              marginBottom: 8
            }}
          />
        ) : (
          items.map(item => (
            <Text
              key={item}
              text={item}
              maxLines={1}
              style={{ color: theme.movSecondary, marginBottom: 8 }}
            />
          ))
        )}
      </WrapperFlex>

      {items.length ? (
        <WrapperFlex
          fullWidth
          justifyCenter
          alignCenter
          style={{
            minHeight: 34,
            color: theme.buttonInfo,
            backgroundColor: theme.bgGrayFooter,
            borderRadius: '0 0 4px 4px'
          }}
          onClick={onClick}
        >
          Ver mais
        </WrapperFlex>
      ) : null}
    </ContainerCard>
  )
}
