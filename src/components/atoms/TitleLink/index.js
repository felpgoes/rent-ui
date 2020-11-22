import React from 'react';

import SettingsIcon from '../../../assets/images/settings.svg';

import ChangeIcon from '../../icons/ChangeIcon';

import { Container } from './styles';

const TitleLink = ({
  to,
  text,
  disabled,
  alignRight,
  marginSides,
  settings,
  sidebar,
  onClick = (_) => _,
  ...props
}) => (
  <Container
    {...props}
    tabIndex="-1"
    alignRight={alignRight}
    to={to}
    disabled={disabled}
    marginSides={marginSides}
    onClick={(e) => {
      e.stopPropagation();
      disabled ? e.preventDefault() : onClick();
    }}
  >
    {settings && (
      <img src={SettingsIcon} alt="settings" style={{ marginRight: 5 }} />
    )}
    {sidebar && (
      <ChangeIcon
        width={18}
        height={12}
        color="#fff"
        style={{ marginRight: 7, marginTop: 3 }}
      />
    )}
    {text}
  </Container>
);

export default TitleLink;
