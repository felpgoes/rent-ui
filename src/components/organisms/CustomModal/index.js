import React from 'react'
import Modal from 'react-modal'

import theme from '../../../styles/theme'

export default function CustomModal({
  isOpen,
  onClose,
  width = 468,
  height = 393,
  padding = 16,
  children,
  ...props
}) {
  return (
    <Modal
      {...props}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={onClose}
      contentLabel=""
      style={{
        overlay: {
          backgroundColor: theme.textSidebarDisabled,
          zIndex: 30
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: theme.bgWhite,
          border: 'none',
          maxHeight: '100vh',
          padding,
          width,
          height
        }
      }}
    >
      {children}
    </Modal>
  )
}
