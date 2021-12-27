import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Operation } from '../../reducer';
import history from '../../history';
import { getAuthStatus } from '../../selectors';

interface Props {
    onUserAuthorization: (login: string) => void,
    isSignIn: string
};

interface State {
    login: string,
    password: string
};

class HomePage extends React.Component<Props, State> {
    state = {
        login: '',
        password: '',
    };

    handleLoginChange = (evt: { target: HTMLInputElement }) => {
        this.setState({
            login: evt.target.value,
        });
    }

    handlePasswordChange = (evt: { target: HTMLInputElement }) => {
        this.setState({
            password: evt.target.value,
        });
    }

    handleSignInChange = (evt: { preventDefault: () => void; }) => {
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

const mapStateToProps = (state: string) => ({
    isSignIn: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    onUserAuthorization(data: string) {
        dispatch(Operation.userLogin(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
