import React, {
    cloneElement,
    isValidElement,
    useState,
    useContext,
    useMemo,
    useEffect,
} from 'react';
import PropTypes from 'prop-types';
import theme from '../../../styles/theme';

import {
    ContentContainer,
    ButtonContainer,
    ActionWrapper,
    ContentWrapper,
} from './styles';

import ActionContext from '../../../context/TabContext';

const TabButton = ({
    name,
    text,
    color,
    active,
    children,
    onClick,
    widthAuto,
    display,
}) => {
    return (
        <ButtonContainer
            onClick={onClick}
            name={name}
            color={color}
            text={text}
            active={active}
            widthAuto={widthAuto}
            type="button"
            display={display}
        >
            {children}
        </ButtonContainer>
    );
};

const TabActionWrapper = ({ children }) => {
    const { nameButton } = useContext(ActionContext);

    function isArray(obj) {
        return !!obj && obj.length > 0 ? obj : Array(obj);
    }

    function setActive(child) {
        if (!nameButton) return child;
        if (child.props.name === nameButton) {
            return cloneElement(child, {
                active: true,
            });
        }
        return cloneElement(child, {
            active: false,
        });
    }

    function handleActiveEvent() {
        return isArray(children).map((child) => {
            if (isValidElement(child)) {
                return setActive(child);
            }
        });
    }

    return <ActionWrapper>{handleActiveEvent()}</ActionWrapper>;
};

const TabContentWrapper = ({
    children,
    contentFor,
    active,
    onClick,
    height,
    maxHeight,
}) => {
    const { nameButton } = useContext(ActionContext);
    const [display, setDisplay] = useState(false);

    function displayTabContent() {
        if (nameButton === contentFor) return setDisplay(true);
        return setDisplay(false);
    }

    useEffect(() => {
        active && !nameButton ? setDisplay(true) : displayTabContent();
    }, [nameButton, display, active]);

    return display ? (
        <ContentWrapper height={height} maxHeight={maxHeight} display={display}>
            {children}
        </ContentWrapper>
    ) : (
        <ContentWrapper />
    );
};

const TabContainer = ({ children }) => {
    const [nameButton, setName] = useState('');

    function handleActive(e) {
        const name =
            e.target.name !== undefined
                ? e.target.name
                : e.target.parentElement.name;
        if (name) {
            setName(name);
        }
    }

    return (
        <ContentContainer onClick={handleActive}>
            <ActionContext.Provider value={{ nameButton }}>
                {children}
            </ActionContext.Provider>
        </ContentContainer>
    );
};

export { TabButton, TabActionWrapper, TabContentWrapper, TabContainer };
// name,  text, color, active

TabButton.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    active: PropTypes.bool,
};

TabButton.defaultProps = {
    color: theme.grayDefault,
    active: false,
};

TabActionWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
TabContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    contentFor: PropTypes.string.isRequired,
};
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
