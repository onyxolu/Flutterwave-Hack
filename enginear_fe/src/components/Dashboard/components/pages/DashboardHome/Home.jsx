import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Home.css'

export default class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    state = {
        showProfile: false
    }

    componentDidMount() {

    }

    openGallery = (id = 1) => {
        this.closeAll();
        const gallery = document.getElementById('gallery-1');
        const card = document.getElementById('card-1');
        console.log(gallery)
        gallery.classList.add('Gallery--active');
        card.classList.add('Card--active');
    }

    closeAll = () => {
        const galleryActv = document.querySelector('.Gallery--active');
        const cardActv = document.querySelector('.Card--active');
        if (galleryActv) {
            galleryActv.classList.remove('Gallery--active');
        }
        if (cardActv) {
            cardActv.classList.remove('Card--active');
        }
    }

    onClick = () => {

    }


    render() {
        const { showProfile } = this.props;
        return (

            <div>
                <section className="Grid">
                    <div className="Grid-row">
                        <a className="Card" onClick={this.openGallery} id="card-1">
                            <div className="Card-thumb">
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-image" style={{ backgroundImage: 'url(https://images.askmen.com/1080x540/2016/03/23-111859-dealing_with_a_dead_car_battery.jpg)' }}></div>
                            </div>
                            <div className="Card-title"><span>Dead Battery</span></div>
                            <div className="Card-explore"><span>Explore 50 more</span></div><button className="Card-button">Find Engineers</button></a>
                        <a className="Card" onClick={this.openGallery} id="card-2">
                            <div className="Card-thumb">
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-image" style={{ backgroundImage: 'url(https://www.kwik-fit.com/assets/blog/BC100108.jpg)' }}></div>
                            </div>
                            <div className="Card-title"><span>Flat Tyre</span></div>
                            <div className="Card-explore"><span>Explore 50 more</span></div><button className="Card-button">Find Engineers</button></a>
                        <a className="Card" onClick={this.openGallery} id="card-3">
                            <div className="Card-thumb">
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-image" style={{ backgroundImage: 'url(https://i0.wp.com/oards.com/wp-content/uploads/2017/12/5-causes-of-a-car-alternator-failure.jpg?resize=720%2C405)' }}></div>
                            </div>
                            <div className="Card-title"><span>Alternator Failure</span></div>
                            <div className="Card-explore"><span>Explore 50 more</span></div><button className="Card-button">Find Engineers</button></a>
                    </div>
                    <div className="Grid-row">
                        <a className="Card" onClick="openGallery(4)" id="card-4">
                            <div className="Card-thumb">
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-image" style={{ backgroundImage: 'url(https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/458b3f2c4c70c27984f625fb6568f1f5/204907157/182846206.jpg)' }}></div>
                            </div>
                            <div className="Card-title"><span>Break Squeaking</span></div>
                            <div className="Card-explore"><span>Explore 50 more</span></div><button className="Card-button">Find Engineers</button></a>
                        <a className="Card" onClick="openGallery(5)" id="card-5">
                            <div className="Card-thumb">
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-image" style={{ backgroundImage: 'url(https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/How_to_Improve_Automatic_Transmission_Performance_and_Reliability_10_overheated_vehicle_on_side_of_road)' }}></div>
                            </div>
                            <div className="Card-title"><span>Over Heating</span></div>
                            <div className="Card-explore"><span>Explore 50 more</span></div><button className="Card-button">Find Engineers</button></a>
                        <a className="Card" onClick="openGallery(6)" id="card-6">
                            <div className="Card-thumb">
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-image" style={{ backgroundImage: 'url(https://cdn.hswstatic.com/gif/steering-wheel-shake-1.jpg)' }}></div>
                            </div>
                            <div className="Card-title"><span>Stairing wheel shaking</span></div>
                            <div className="Card-explore"><span>Explore 50 more</span></div><button className="Card-button">Find Engineers</button></a>
                    </div>
                    {/* <div className="Grid-row">
                        <a className="Card" onClick="openGallery(7)" id="card-7">
                            <div className="Card-thumb">
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-shadow"></div>
                                <div className="Card-image" style={{ backgroundImage: 'url(https://robohash.org/3)' }}></div>
                            </div>
                            <div className="Card-title"><span>Super interesting card</span></div>
                            <div className="Card-explore"><span>Explore 50 more</span></div><button className="Card-button">view more</button></a>
                    </div> */}
                </section>
                <section className="Gallery" id="gallery-1">
                    <div className="Gallery-header"><a className="Gallery-close" onclick={this.closeAll}>×</a></div>
                    <div className="Gallery-images">
                        <div className="Gallery-left">
                            <div className="Gallery-image">
                                <div class="our-team" onClick={showProfile}>
                                    <div class="picture">
                                        <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                    </div>
                                    <div class="team-content">
                                        <h3 class="name">Michele Miller</h3>
                                        <h4 class="title">Abule Oja, Yaba</h4>
                                    </div>
                                    <ul class="social">
                                        <li><span class="fa fa-star checked"></span></li>
                                        <li><span class="fa fa-star checked"></span></li>
                                        <li><span class="fa fa-star checked"></span></li>
                                        <li><span class="fa fa-star checked"></span></li>
                                        <li><span class="fa fa-star"></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Gallery-image">
                                <div class="our-team">
                                    <div class="picture">
                                        <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                    </div>
                                    <div class="team-content">
                                        <h3 class="name">Michele Miller</h3>
                                        <h4 class="title">Abule Oja, Yaba</h4>
                                    </div>
                                    <ul class="social">
                                        <li><span class="fa fa-star checked"></span></li>
                                        <li><span class="fa fa-star checked"></span></li>
                                        <li><span class="fa fa-star checked"></span></li>
                                        <li><span class="fa fa-star"></span></li>
                                        <li><span class="fa fa-star"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Gallery-image Gallery-image--primary" style={{ backgroundImage: 'url(https://images.askmen.com/1080x540/2016/03/23-111859-dealing_with_a_dead_car_battery.jpg)' }}></div>
                    </div>
                    <div className="Gallery-images">
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Gallery-images">
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Gallery-images">
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Gallery-images">
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Gallery-image">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKOjeORZlPfqjsC-Lj-r16dCmH91R0kf6Zfrmmyc174I0m6O" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Abule Oja, Yaba</h4>
                                </div>
                                <ul class="social">
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star checked"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}
