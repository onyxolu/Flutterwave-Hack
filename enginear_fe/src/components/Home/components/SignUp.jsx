import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ApiService from '../../services/request'

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

    onSignUpClick = async(e) => {
        e.preventDefault();

        try {
            const response = await ApiService.signUp(this.state.phone);
            console.log(response)
        } catch (err) {

        }

        this.setState({
            pageToShow: 'otp'
        })
    }

    onVerifyOtpClick = async(e) => {
        e.preventDefault();
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_num: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            otp: this.state.otp,
        }
        try {
            const response = await ApiService.validateOtP(data);
            console.log(response)
            this.props.showDashboard();
        } catch (err) {
            console.log(err);
        }
        this.props.showDashboard();
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
