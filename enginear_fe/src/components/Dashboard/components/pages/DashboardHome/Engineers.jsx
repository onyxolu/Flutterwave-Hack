import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Engineers extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <section className="Gallery" id="gallery-1">
                    <div className="Gallery-header"><a className="Gallery-close" onclick="closeAll()">×</a></div>
                    <div className="Gallery-images">
                        <div className="Gallery-left">
                            <div className="Gallery-image"></div>
                            <div className="Gallery-image"></div>
                        </div>
                        <div className="Gallery-image Gallery-image--primary" style={{ backgroundImage: 'url(https://images.askmen.com/1080x540/2016/03/23-111859-dealing_with_a_dead_car_battery.jpg)' }}></div>
                    </div>
                    <div className="Gallery-images">
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                    </div>
                    <div className="Gallery-images">
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                    </div>
                    <div className="Gallery-images">
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                    </div>
                    <div className="Gallery-images">
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                    </div>
                </section>
            </div>
        )
    }
}
