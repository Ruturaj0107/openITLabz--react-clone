import React from "react";

function Details() {
    return (
        <>
            <section className="py-5 position-relative">
                <div className="page-header min-vh-50 looking-for-course-banner" style={{ backgroundImage: 'url(./assets/looking-for-course.jpg)' }}>
                    <span className="mask bg-common-banner-overlay opacity-6"></span>
                    <div className="container">
                        <div className="row justify-content-center inner">
                            <div className="col-lg-6 text-center mx-auto">
                                <h3 className="text-white mt-4 mb-1 fnt-clr-head">Looking for a course?</h3>
                                <p className="lead text-white mb-6">Let’s find the best one for you</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row contact-det mt-n5 border-radius-xl shadow-blur position-relative overflow-hidden" style={{transform:'translateY(-60px)',backdropFilter:'saturate(200%) blur(30px)',backgroundColor:'rgba(255, 255, 255, 0.8)',marginBottom:'-10px'}}>
                        <div className="col-lg-3 col-md-6 col-12 position-relative my-auto">
                            <div className="p-3 text-center">
                                <div className="icon-green icon-shape bg-gradient-warning shadow-primary text-center mx-auto">
                                    <span className="material-symbols-outlined" >
                                        <img src="./assets/location.svg" alt="hc" style={{width:'25px'}} />
                                    </span>
                                </div>
                                <h5 className="mt-3 mb-1 fnt-clr-head">Address</h5>
                                <p className="mb-0 fnt-clr-txt">101, Success Square,
                                    Near Rakshak Nagar Gold,
                                    Pandhari Nagar, Kharadi,
                                    Pune - 411014, Maharashtra, India</p>
                                <hr className="vertical dark" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 position-relative my-auto">
                            <div className="p-3 text-center">
                                <div className="icon-yellow icon-shape bg-gradient-warning shadow-primary text-center mx-auto">
                                    <span className="material-symbols-outlined" >
                                        <img src="./assets/email.svg" alt="hc" style={{width:'25px'}} />
                                    </span>
                                </div>
                                <h5 className="mt-3 mb-1 fnt-clr-head">Email</h5>
                                <p className="mb-5 fnt-clr-txt">enquiry@openitlabz.com</p>
                            </div>
                            <hr className="vertical dark" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 position-relative my-auto">
                            <div className="p-3 text-center">
                                <div className="icon icon-shape icon-md bg-gradient-info shadow-primary text-center mx-auto" style={{backgroundImage:'linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%)'}}>
                                    <span className="material-symbols-outlined" >
                                        <img src="./assets/call.svg" alt="hc" />
                                    </span>
                                </div>
                                <h5 className="mt-3 mb-1 fnt-clr-head">Phone</h5>
                                <p className="mb-0 fnt-clr-txt">(+91) 744 749 0744</p>
                                <p className="mb-4 fnt-clr-txt">(+91) 744 731 8744</p>
                            </div>
                            <hr className="vertical dark" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 position-relative my-auto">
                            <div className="p-3 text-center">
                                <div className="icon-red icon-shape bg-gradient-danger shadow-primary text-center mx-auto">
                                    <span className="material-symbols-outlined" >
                                        <img src="./assets/schedule.svg" alt="hc" />
                                    </span>
                                </div>
                                <h5 className="mt-3 mb-1 fnt-clr-head">Working hours</h5>
                                <p className="mb-0 fnt-clr-txt">Monday to Sunday</p>
                                <p className="mb-3 fnt-clr-txt">9:00 AM to 10:00 PM</p>
                            </div>
                            <hr className="vertical dark" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Details;
