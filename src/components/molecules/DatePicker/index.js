import React, { useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';

import { AiOutlineCalendar } from 'react-icons/ai';

import CalendarDate from 'react-date-picker/dist/entry.nostyle';

import { Container } from './styles';

import theme from '../../../styles/theme';

function DatePicker({ name, minDate, onChange, value }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.value',
      defaultValue,
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <CalendarDate
        ref={datepickerRef}
        name={name}
        className="react-date-picker"
        onChange={onChange}
        value={value}
        minDetail="decade"
        clearIcon={null}
        calendarIcon={<AiOutlineCalendar size="20" color={theme.grey} />}
        dayPlaceholder="00"
        monthPlaceholder="00"
        yearPlaceholder="0000"
        showLeadingZeros
        minDate={new Date(minDate)}
        locale="pt-BR"
      />
    </Container>
  );
}

export default DatePicker;
