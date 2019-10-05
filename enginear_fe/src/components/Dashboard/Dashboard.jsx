import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from './components/SideBar/Sidebar'
import Home from './components/pages/DashboardHome/Home'
import Sidebar2 from './components/SideBar/Sidebar2'

export default class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Sidebar />
                {/* <Sidebar2 /> */}
                {/* <Home /> */}

            </div>
        )
    }
}
