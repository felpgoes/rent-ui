import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LogoutIcon from '../../icons/LogoutIcon';

import { excludeData } from '../../../services/auth';
import { deleteMessageToken } from '../../../services/notification';

import { Creators as UserActions } from '../../../store/ducks/auth';

import { Container } from './styles';

class LogoutButton extends Component {
    logOut() {
        excludeData();
        deleteMessageToken();
        this.props.signOut();
    }

    render() {
        return (
            <Container>
                <LogoutIcon onClick={() => this.logOut()} />
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(LogoutButton);
