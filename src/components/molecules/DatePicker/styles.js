import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
    .react-date-picker {
        background-color: white;

        &.react-date-picker--closed {
            &.react-date-picker--enabled {
                &.react-date-picker {
                    height: 100%;
                }
            }
        }

        &.react-date-picker--open {
            &.react-date-picker--enabled {
                &.react-date-picker {
                    height: 100%;
                }
            }
        }
    }

    .react-calendar__navigation {
        background-color: ${theme.greenDefault};
        border-color: ${theme.greenDefault};
        border-radius: 0px 5px 0px 0px;
        padding: 2% 0% 0% 0%;

        display: grid !important;
        grid-template-columns: 5% 5% 55% 5% 5%;
        justify-content: center;

        button {
            background-color: ${theme.greenDefault};
            border: 1px solid ${theme.greenDefault};
            border-radius: 2px;
            color: #ffff;
            font-family: 'unimed_slabbold';
            font-size: 20px;
        }
    }

    .react-calendar__viewContainer {
        border: 2px solid ${theme.greenDefault};
    }

    .react-date-picker {
        display: inline-flex;
        position: relative;
    }
    .react-date-picker,
    .react-date-picker *,
    .react-date-picker *:before,
    .react-date-picker *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .react-date-picker--disabled {
        background-color: #f0f0f0;
        color: #6d6d6d;
    }
    .react-date-picker__wrapper {
        display: flex;
        border: thin solid gray;
        border-radius: 5px;
    }
    .react-date-picker__inputGroup {
        min-width: calc((4px * 3) + 0.54em * 8 + 0.217em * 2);
        flex-grow: 1;
        display: flex;
        padding: 9px 4px;
        align-items: baseline;
        box-sizing: content-box;

        input,
        span {
            color: #a1a1a1;
        }
    }
    .react-date-picker__inputGroup__divider {
        padding: 1px 0;
        white-space: pre;
    }
    .react-date-picker__inputGroup__input {
        min-width: 0.54em;

        height: 100%;
        position: relative;
        padding: 0 1px;
        border: 0;
        background: none;
        font: inherit;
        box-sizing: content-box;
        -moz-appearance: textfield;
    }
    .react-date-picker__inputGroup__input::-webkit-outer-spin-button,
    .react-date-picker__inputGroup__input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .react-date-picker__inputGroup__input:invalid {
        background: rgba(255, 0, 0, 0.1);
    }
    .react-date-picker__inputGroup__input--hasLeadingZero {
        margin-left: -0.54em;
        padding-left: calc(1px + 0.54em);
    }
    .react-date-picker__button {
        border: 0;
        background: transparent;
        padding: 4px 6px;
    }
    .react-date-picker__button:enabled {
        cursor: pointer;
    }
    .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
    .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
        stroke: #bebebe;
    }
    .react-date-picker__button:disabled .react-date-picker__button__icon {
        stroke: #6d6d6d;
    }
    .react-date-picker__button svg {
        display: inherit;
    }
    .react-date-picker__calendar {
        width: 350px;
        max-width: 100vw;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 11;
    }
    .react-date-picker__calendar--closed {
        display: none;
    }
    .react-date-picker__calendar .react-calendar {
        border-width: thin;
    }

    .react-date-picker__calendar-button {
        &.react-date-picker__button {
            border-left: 1px solid #808080;
        }
    }

    .react-calendar__month-view__weekdays {
        font-family: 'unimed_slabbold';
        font-size: 13px;
        color: #5a5a5a;
        text-align: center;
        margin: 3% 1% 3% 1%;
        background-color: #ffff;

        .react-calendar__month-view__weekdays__weekday {
            abbr {
                cursor: auto;
                text-decoration: none;
            }
        }
    }

    .react-calendar__month-view {
        background-color: #ffff;
    }
    .react-calendar__month-view__days,
    .react-calendar__year-view__months,
    .react-calendar__decade-view__years {
        button {
            background-color: #ffff;
            border: 1px solid #ffff;
            font-family: Calibri;
            font-size: 20px;
            color: ${theme.colorGray};
        }

        button:disabled {
            background-color: ${theme.greyDisable} !important;
            color: ${theme.colorGray} !important;
        }

        button:hover,
        button:active,
        button:after {
            background-color: ${theme.greenDefault};
            color: #ffff;
            border-radius: 5px;
        }
    }

    svg[stroke] {
        stroke: gray;
    }
`;
