import React from 'react';

import LoadingIcon from '../../../assets/images/loading.svg';
import LoadingWhiteIcon from '../../../assets/images/loading-white.svg';

import { Spinner } from './styles';

const Loading = ({ primary, button, small, ...props }) => (
    <Spinner
        {...props}
        src={primary ? LoadingWhiteIcon : LoadingIcon}
        alt="Carregando"
        primary={primary}
        button={button}
        small={small}
    />
);

export default Loading;
