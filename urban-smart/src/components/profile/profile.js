import React from 'react';
import { connect } from 'react-redux';
import { getLogin, getLoadStatus } from '../../selectors';
import withLoad from '../hocs/withLoad';

const Profile = ({ login }) => {
    return (
        <h1>{login}</h1>
    );
}

const mapStateToProps = (state) => ({
    login: getLogin(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(Profile));
