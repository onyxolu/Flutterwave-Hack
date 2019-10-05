import React, { Component } from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import { Map, GoogleApiWrapper } from 'google-maps-react';
=======
import Sidebar from './components/SideBar/Sidebar'
>>>>>>> 17cb26b7e5ea3f562f8e7265defd13f0c97c4f98

export default class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {

        return (
            <div>
<<<<<<< HEAD
                
=======
                <Sidebar />

>>>>>>> 17cb26b7e5ea3f562f8e7265defd13f0c97c4f98
            </div>
        )
    }
}
