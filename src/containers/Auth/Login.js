import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isPasswordVisible: false,
            errMessage: ''
        }
    }


    handleOnchageUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnchagePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            console.log(data)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('success')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log('data', error.response)
        }

    }
    togglePasswordVisibility = () => {
        this.setState({
            isPasswordVisible: !this.state.isPasswordVisible
        });
    };
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <div className='input-container'>
                                <label className='floating-label'>username:</label>
                                <input type='text' className='form-control' placeholder='Enter your username' value={this.state.username}
                                    onChange={(event) => this.handleOnchageUserName(event)}
                                />
                            </div>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <div className='input-container'>
                                <label className='floating-label'>Password:</label>
                                <div className='password-input-container'>
                                    <input type={this.state.isPasswordVisible ? 'text' : 'password'}
                                        className='form-control' placeholder='Enter your password'
                                        value={this.state.password}
                                        onChange={(event) => this.handleOnchagePassword(event)}
                                    />
                                    <i className={`fa-regular ${this.state.isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} password-icon`}
                                        onClick={this.togglePasswordVisibility}></i>
                                </div>


                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Log In</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or Login With</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fa-brands fa-google-plus-g google"></i>
                            <i className="fa-brands fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
