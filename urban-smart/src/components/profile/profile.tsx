import React from 'react';
import { connect } from 'react-redux';
import { getLogin, getLoadStatus } from '../../selectors';
import withLoad from '../hocs/withLoad';

interface Props {
    login: string,
    loadStatus?: boolean
};

const Profile = ({ login }: Props) => {
    return (
        <h1>{login}</h1>
    );
}

const mapStateToProps = (state: Props) => ({
    login: getLogin(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(Profile));
