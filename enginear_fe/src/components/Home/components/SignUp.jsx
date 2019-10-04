import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SignUp extends Component {
    static propTypes = {
        prop: PropTypes
    }

    state = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        confirm_password: '',
        otp: '',
        pageToShow: 'signUp'
    }

    componentDidMount() {
        this.setState({
            pageToShow: 'signUp'
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {

    }

    onSignUpClick = (e) => {
        e.preventDefault();
        this.setState({
            pageToShow: 'otp'
        })
    }

    onVerifyOtpClick = (e) => {
        e.preventDefault();
    }

    render() {
        const { first_name, last_name, phone, email, password, confirm_password, otp, pageToShow } = this.state;
        return (
            <div class="form-container sign-up-container">

                <form action="#">
                    <h1>Create Account</h1>

                    {

                        pageToShow === 'signUp' &&

                        <div>
                            <input name='first_name' value={first_name} onChange={this.onChange} type="text" placeholder="First Name" />
                            <input name='last_name' value={last_name} onChange={this.onChange} type="text" placeholder="Last Name" />
                            <input name='phone' value={phone} onChange={this.onChange} type="text" placeholder="Phone Number" />
                            <input name='email' value={email} onChange={this.onChange} type="email" placeholder="Email" />
                            <input name='password' value={password} onChange={this.onChange} type="password" placeholder="Password" />
                            <input name='confirm_password' value={confirm_password} onChange={this.onChange} type="password" placeholder="Confirm Password" />
                            <button onClick={this.onSignUpClick} >Sign Up</button>
                        </div>
                    }

                    {
                        pageToShow === 'otp' &&
                        <div >
                            <div>
                                <p>Kindly Input The OTP Sent to your number</p>
                                <div>
                                    <input name='otp' value={otp} onChange={this.onChange} type="text" placeholder="OTP" />
                                    <button onClick={this.onVerifyOtpClick} >Verify OTP</button>
                                </div>
                            </div>
                        </div>
                    }

                </form>
            </div>
        )
    }
}
