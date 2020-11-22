import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import theme from '../../../styles/theme'

import CustomModal from '../CustomModal'
import WrapperFlex from '../../molecules/WrapperFlex'
import DateWrapper from '../../molecules/DateWrapper'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'

export default function ContactsModal({ isOpen, requestClose, onSubmit }) {
  const [date, setDate] = useState(new Date())

  return (
    <CustomModal isOpen={isOpen} onClose={requestClose} padding={0} height={430} width={400}>
      <WrapperFlex fullWidth column style={{ padding: 16 }}>
        <Text bold text="Selecione uma data" style={{ fontSize: 18, marginBottom: 16 }} />
      </WrapperFlex>
      <WrapperFlex marginSides={30}>
        <DateWrapper icon>
          <DatePicker
            selected={new Date(date)}
            onChange={setDate}
            onSelect={setDate}
            locale="pt-BR"
            showTimeSelect
            timeFormat="p"
            dateFormat="dd/MM/yyyy HH:mm"
          />
        </DateWrapper>
      </WrapperFlex>
      <WrapperFlex
        justifyEnd
        alignCenter
        style={{
          marginTop: 235,
          height: 66,
          backgroundColor: theme.bgGrayFooter,
          padding: 16
        }}
      >
        <Button
          modal
          noBg
          color={theme.movSecondary}
          text="Cancelar"
          onClick={requestClose}
          style={{ minHeight: 34, minWidth: 98, borderRadius: 17, marginRight: 10 }}
        />

        <Button
          modal
          blue
          text="Salvar"
          style={{ minHeight: 34, minWidth: 98, borderRadius: 17 }}
          onClick={() => onSubmit(date)}
        />
      </WrapperFlex>
    </CustomModal>
  )
}
