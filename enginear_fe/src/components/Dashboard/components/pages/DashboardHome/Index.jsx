import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pay from '../Pay/Pay'
import Home from './Home'
import Rave from '../../../../Home/components/Rave'

export default class Index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    state = {
        showProfile: false
    }

    showProfile = () => {
        console.log('showProfile')
        this.setState({
            showProfile: true
        })
    }

    render() {
        const { showProfile } = this.state;
        return (
            <div>
                {
                    // showProfile ? <Pay /> : <Home showProfile={this.showProfile} />
                    showProfile ? <Pay /> : <Home showProfile={this.showProfile} />
                }
            </div>
        )
    }
}
