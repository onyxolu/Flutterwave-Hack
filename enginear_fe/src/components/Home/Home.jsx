import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Home.css'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import axios from 'axios'

export default class Home extends Component {

    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {

    }

    onSignInClick = (e) => {
        e.preventDefault();
        document.getElementById('container').classList.remove("right-panel-active");
    }

    onSignUpClick = (e) => {
        e.preventDefault();
        document.getElementById('container').classList.add("right-panel-active");


    }

    render() {
        const { showDashboard } = this.props;
        return (
            <div>
                <h2>Connect Engineers with Customers</h2>
                <div class="container" id="container">
                    <SignUp showDashboard={showDashboard} />
                    <SignIn showDashboard={showDashboard} />
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button onClick={this.onSignInClick} class="ghost" id="signIn">Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button onClick={this.onSignUpClick} class="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
