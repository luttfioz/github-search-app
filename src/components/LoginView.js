import React from 'react';
import './LoginView.scss';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setToken({ 'token': this.state.email });
    }

    render() {
        return (
            <>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Github Search App Login Page</h2>
                        <p>Login from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit}>
                                <div className={`form-group `}>
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" required className={`form-control ${this.errorClass(this.state.formErrors.email)}`}
                                        name="email"
                                        placeholder="Email"
                                        data-testid="email"
                                        value={this.state.email}
                                        onChange={(event) => this.handleUserInput(event)} />
                                    {(this.state.formErrors.email.length === 0) ? '' : <span className="has-error-message"> Email {this.state.formErrors['email']}</span>}
                                </div>
                                <div className={`form-group `}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" required className={`form-control ${this.errorClass(this.state.formErrors.password)}`}
                                        name="password"
                                        placeholder="Password"
                                        data-testid="password"
                                        value={this.state.password}
                                        onChange={(event) => this.handleUserInput(event)} />
                                    {(this.state.formErrors.password.length === 0) ? '' : <span className="has-error-message">Password {this.state.formErrors['password']}</span>}

                                </div>
                                <button type="submit" data-testid="login" className="btn btn-primary btn-black" >Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
