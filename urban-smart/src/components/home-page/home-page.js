import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Operation } from '../../reducer.js';
import history from '../../history';
import { getAuthStatus } from '../../selectors';


class HomePage extends React.Component {
    state = {
        login: '',
        password: '',
    };

    handleLoginChange = (evt) => {
        this.setState({
            login: evt.target.value,
        });
    }

    handlePasswordChange = (evt) => {
        this.setState({
            password: evt.target.value,
        });
    }

    handleSignInChange = (evt) => {
        evt.preventDefault();
        const { onUserAuthorization } = this.props;
        history.push(AppRoute.PROFILE);
        onUserAuthorization(this.state.login);
    }

    render() {
        const { login, password } = this.state;
        const { isSignIn } = this.props;

        if (isSignIn === AuthorizationStatus.AUTH) {
            return <Redirect to={AppRoute.PROFILE} />;
        }

        return (
            <form>
                <label>
                    Введите логин:
                    <input
                        type="text"
                        name="login"
                        value={login}
                        onChange={this.handleLoginChange}
                    ></input>
                </label>
                <label>
                    Введите пароль:
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.handlePasswordChange}
                    ></input>
                </label>
                <button
                    onClick={this.handleSignInChange}
                    disabled={login === 'developer21' && password === '123456' ? false : true}
                >Нажми на меня</button>
            </form>
        );
    }
};

const mapStateToProps = (state) => ({
    isSignIn: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
    onUserAuthorization(data) {
        dispatch(Operation.userLogin(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
