import React from 'react';
import { connect } from 'react-redux';
import { getLogin } from '../../selectors';

const Profile = ({ login }) => {
    return (
        <h1>{login}</h1>
    );
}

const mapStateToProps = (state) => ({
    login: getLogin(state)
});

export default connect(mapStateToProps)(Profile);
