import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from './components/SideBar/Sidebar'

export default class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {

        return (
            <div>
                <Sidebar />
            </div>
        )
    }
}
