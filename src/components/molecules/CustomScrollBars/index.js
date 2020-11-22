import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import css from 'dom-css';

import theme from '../../../styles/theme';

const trackStyle = {
    position: 'absolute',
    transition: 'opacity 200ms ease 0s',
    right: 2,
    bottom: 2,
    zIndex: 1,
    // borderRadius: 3
    // backgroundColor: theme.yellowTranslucid
};

const CustomScrollBars = (props) => {
    const thumbStyle = () => ({
        cursor: 'pointer',
        borderRadius: 3,
        backgroundColor: theme.grey,
        overflowX: 'auto',
        overflowY: 'hidden',
        height: props.height,
    });

    const handleUpdate = (values) => {
        const { scrollTop, scrollHeight, clientHeight } = values;

        const bottomScrollTop = scrollHeight - clientHeight;
    };

    return (
        <Scrollbars
            ref={(e) => props.getRef && props.getRef(e)}
            onUpdate={handleUpdate}
            renderTrackHorizontal={({ style, ...props }) => (
                <div
                    {...props}
                    style={{
                        ...style,
                        ...trackStyle,
                        left: 2,
                    }}
                />
            )}
            renderTrackVertical={({ style, ...props }) => (
                <div
                    {...props}
                    style={{
                        ...style,
                        ...trackStyle,
                        top: 2,
                    }}
                />
            )}
            renderThumbHorizontal={({ style, ...props }) => (
                <div
                    {...props}
                    style={{
                        ...style,
                        ...thumbStyle(),
                    }}
                />
            )}
            renderThumbVertical={({ style, ...props }) => (
                <div
                    {...props}
                    style={{
                        ...style,
                        ...thumbStyle(),
                    }}
                />
            )}
            renderView={({ style, ...props }) => (
                <div {...props} style={{ ...style, flex: 1 }} />
            )}
            {...props}
        >
            {props.children}
        </Scrollbars>
    );
};

export default CustomScrollBars;
