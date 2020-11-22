import React from 'react'

import theme from '../../../styles/theme'

import CustomModal from '../CustomModal'
import CustomScrollbars from '../CustomScrollbars'
import WrapperFlex from '../../molecules/WrapperFlex'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'

export default function ListModal({ isOpen, onClose, title, items = [] }) {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} padding={0} height="fit-content" width={316}>
      <WrapperFlex fullWidth column style={{ padding: '16px 0 8px 16px' }}>
        <Text bold text={title} style={{ fontSize: 24, marginBottom: 16 }} />
        <CustomScrollbars autoHide style={{ height: 150 }}>
          {items.map(item => (
            <Text key={item} text={item} style={{ color: theme.movSecondary, marginBottom: 8 }} />
          ))}
        </CustomScrollbars>
      </WrapperFlex>

      <WrapperFlex
        justifyEnd
        alignCenter
        style={{ height: 66, backgroundColor: theme.bgGrayFooter, padding: 16 }}
      >
        <Button
          modal
          text="Fechar"
          onClick={onClose}
          style={{ minHeight: 34, minWidth: 101, borderRadius: 17 }}
        />
      </WrapperFlex>
    </CustomModal>
  )
}
