import React from 'react'
import PropTypes from 'prop-types'  
import './Pay.css'
import Rave from '../../../../Home/components/Rave'

function Pay(props) {
    return (
        <div>
            <section className="profile">
                <header className="header">
                    <div class="details">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" alt="John Doe" class="profile-pic" />
                        <h1 class="heading">Test2 Test2</h1>
                        <div class="location">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
                            </svg>
                            <p>Abule Oja</p>
                        </div>
                        <div class="stats">
                            <div class="col-4">
                                <h4>20</h4>
                                <p>Reviews</p>
                            </div>
                            <div class="col-4">
                                <h4>10</h4>
                                <p>Communities</p>
                            </div>
                            <div class="col-4">
                                <h4>08023429684</h4>
                                <p>Phone Number</p>
                            </div>
                        </div>
                        <div>
                            <Rave />
                        </div>
                    </div>
                </header>
            </section>
        </div>
    )
}

Pay.propTypes = {

}

export default Pay

