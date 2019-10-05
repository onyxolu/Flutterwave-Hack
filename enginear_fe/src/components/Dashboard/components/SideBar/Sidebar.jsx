import React from 'react'
import PropTypes from 'prop-types'
import './Sidebar.css'
import Home from '../pages/DashboardHome/Home'

function Sidebar(props) {
    return (
        <div>
            <div class="area">
                <Home />
            </div>
            <nav class="main-menu">
                <ul>
                    <li>
                        <a href="http://justinfarrow.com">
                            <i class="fa fa-home fa-2x"></i>
                            <span class="nav-text">
                                Dashboard
                        </span>
                        </a>

                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fa fa-laptop fa-2x"></i>
                            <span class="nav-text">
                                Stars Components
                        </span>
                        </a>

                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fa fa-list fa-2x"></i>
                            <span class="nav-text">
                                Forms
                        </span>
                        </a>

                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fa fa-folder-open fa-2x"></i>
                            <span class="nav-text">
                                Pages
                        </span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-map-marker fa-2x"></i>
                            <span class="nav-text">
                                Maps
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-info fa-2x"></i>
                            <span class="nav-text">y
                                Documentation
                        </span>
                        </a>
                    </li>
                </ul>

                <ul class="logout">
                    <li>
                        <a href="#">
                            <i class="fa fa-power-off fa-2x"></i>
                            <span class="nav-text">
                                Logout
                        </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

Sidebar.propTypes = {

}

export default Sidebar

