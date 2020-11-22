/* eslint-disable react/no-did-update-set-state */
import { Component } from 'react';
import { connect } from 'react-redux';

class SafePermissionArea extends Component {
    constructor(props) {
        super(props);

        const { requiresGrant } = this.props;

        this.state = {
            visible: !requiresGrant,
        };

        if (!requiresGrant) return;

        try {
            const {
                user: { accessToken },
            } = props;

            const profile = JSON.parse(atob(accessToken.split('.')[1]));

            const { competences, features } = profile.user;
            if (
                (competences && competences.includes(requiresGrant)) ||
                (features && features.includes(requiresGrant))
            ) {
                this.state.visible = true;
            }
        } catch (error) {
            console.error(error);
        }
    }

    componentDidUpdate(previousProps) {
        const { requiresGrant } = this.props;
        const { visible } = this.state;
        if (requiresGrant !== previousProps.requiresGrant) {
            if (!requiresGrant && visible === false) {
                this.setState({ visible: true });
                return;
            }

            try {
                const {
                    user: { accessToken },
                } = this.props;

                const profile = JSON.parse(atob(accessToken.split('.')[1]));

                const { competences, features } = profile.user;

                if (
                    (competences && competences.includes(requiresGrant)) ||
                    (features && features.includes(requiresGrant))
                ) {
                    this.setState({ visible: true });
                } else if (visible) {
                    this.setState({ visible: false });
                } else {
                    this.setState({ visible: true });
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    render() {
        const { children } = this.props;
        const { visible } = this.state;
        if (visible) return children;

        return null;
    }
}

const mapStateToProps = (state) => ({
    user: state.auth,
});

export default connect(mapStateToProps, null)(SafePermissionArea);
