import React from 'react';
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className='image'>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="image/download.jfif" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block slider-text">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="image/photo-1517248135467-4c7edcad34c4.jfif" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block slider-text">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="image/upwk61661577-wikimedia-image-kowapeej.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block slider-text">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='my-5 welcome-text'>
                <h4>Welcome to our Restaurant...!</h4>
                <p>Hello sir, if you are hungry then give me a chance. we serve the best food for ever. <br /> Hope you will like our food and enjoy with a great pleasure. <br /> Thanks for give us a chance to serve.
                </p>
            </div>
            <div className='container d-flex justify-content-around align-items-center my-5'>
                <div className='img'>
                    <img src="image/welcoming.jpg" alt="" />
                </div>
                <div className='ms-5'>
                    <h4>Welcome Welcome !!</h4>
                    <p>Welcome to our restaurant! We're delighted to have you here with us today. Our menu features a variety of dishes to suit all tastes and dietary requirements, including vegan and gluten-free options. Our chefs use only the freshest ingredients to prepare each meal with care and passion. Whether you're here for a quick bite or a leisurely dining experience, our friendly and attentive staff will ensure that your visit is memorable. Please sit back, relax, and let us take care of everything. We hope you enjoy your meal and thank you for choosing to dine with us.</p>
                </div>
            </div>

            <div className='mt-5 footer'>
                <p><small>All rights under copyright </small></p>
            </div>
        </div>
    );
};

export default Home;