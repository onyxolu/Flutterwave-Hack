import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    isLoggedIn: false
  }

  showDashboard = () => {
    console.log('showDashboard')
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {
          isLoggedIn ? <Dashboard /> : <Home showDashboard={this.showDashboard} />
        }
      </div>
    )
  }
}

