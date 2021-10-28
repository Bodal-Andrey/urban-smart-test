import React from 'react';
import { connect } from 'react-redux';
import { getLogin } from '../../selectors';

class Profile extends React.Component {
    render() {
        const { login } = this.props;

        return (
            <h1>{login}</h1>
        );
    }
}

const mapStateToProps = (state) => ({
    login: getLogin(state)
});

export default connect(mapStateToProps)(Profile);
