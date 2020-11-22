import React from 'react';

import { BiCheck } from 'react-icons/bi';

import { Container, RoundBox } from './styles';

import { Text } from '../Text';

import theme from '../../../styles/theme';

const StepProcess = ({
    text,
    circleText,
    disabled,
    completed,
    paddingLeft,
    display,
    onClick
}) => (
    <Container display={display} onClick={onClick}>
        <RoundBox disabled={disabled} background={completed ? '#00995D' : 'none'}>
            {completed ? (
                <BiCheck size="25" color="white" />
            ) : (
                <Text
                    font="17px 'unimed_slabbold'"
                    color={disabled ? theme.grey300 : theme.greenlink }
                    text={circleText}
                    marginTop="0"
                />
            )}
        </RoundBox>
        <Text
            font="16px 'unimed_slabbold'"
            color={disabled ? theme.grey300 : ( completed ?  theme.greenDefault : theme.greenlink )}
            text={text}
            paddingTop="5px"
            marginLeft="16px"
            marginTop="0"
            letterSpacing="0px"
        />
    </Container>
);

export default StepProcess;
