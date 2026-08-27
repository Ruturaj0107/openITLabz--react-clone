import React from "react";
// import { Carousel } from "bootstrap";


function HomeFB() {
    return (
        <section className="bg-common-banner-testimonial position-relative overflow-hidden py-4" style={{ height: '500px',backgroundImage:'url(./assets/success.jpg)',backgroundAttachment:'fixed',backgroundRepeat:'no-repeat' }}>
            <span className="mask bg-common-banner-overlay opacity-6"></span>
            <div className="carousel fb_carousel">
            <div id="carouselExample" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <p className="lead text-white">""OpenITLabz offered me an excellent platform to upgrade my skills and land a senior tech position in my dream company. Cannot thank the team enough!"  </p>
                                    <div className="author justify-content-center">
                                        <div className="name ps-2">
                                            <span className="text-white">Vaibhav Patel</span>
                                            <div className="stats">
                                                <small className="text-white">Cloud Engineer, Congnizant</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <p className="lead text-white">"With the help of OpenITLabz, I transitioned to a lucrative career in AWS as a Solutions Architect." </p>
                                    <div className="author justify-content-center">
                                        <div className="name ps-2">
                                            <span className="text-white">Rahid Mujawar</span>
                                            <div className="stats">
                                                <small className="text-white">Software Engineer</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <p className="lead text-white">"The DevOps module was easy to understand yet thorough. My professor Sameer was patient with all my doubts." </p>
                                    <div className="author justify-content-center">
                                        <div className="name ps-2">
                                            <span className="text-white">Bhushan Patil</span>
                                            <div className="stats">
                                                <small className="text-white">Student</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <p className="lead text-white">"I really appreciate the offline and online training modes offered by OpenITLabz. I could complete my course while balancing a full-time job. " </p>
                                    <div className="author justify-content-center">
                                        <div className="name ps-2">
                                            <span className="text-white">Vishal Sharma</span>
                                            <div className="stats">
                                                <small className="text-white">Cloud Engineer, Capgemini</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>

        </section>
    );
}

export default HomeFB;