import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SignIn extends Component {
    static propTypes = {
        prop: PropTypes
    }

    state = {
        email: '',
        password: '',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {

    }

    render() {
        const { email, password } = this.state;
        return (
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    {/* <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div> */}
                    <span>or use your account</span>
                    <input onChange={this.onChange} name='email' value={email} type="email" placeholder="Email" />
                    <input onChange={this.onChange} name='password' value={password} type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button onClick={this.onSubmit}>Sign In</button>
                </form>
            </div>
        )
    }
}
