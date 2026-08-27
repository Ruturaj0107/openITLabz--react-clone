import React from "react";
import ContHero from "./hero";
import Details from "./detail";
import LocatnPage from "./location";

function ContactPage() {
    return (
        <>
            <header className="">
                <div className="page-header min-vh-75 bg-demo-banner" style={{ backgroundImage: 'url(./assets/contact.jpg)', backgroundPosition: '50%' }}>
                    <span className="mask bg-common-banner-overlay opacity-4 position-absolute top-0 start-0 w-100 h-100"></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 my-auto">
                                <div className="brand">
                                    <h2 className="text-light mb-0" style={{ color: '#ffffff !important' }}>
                                        Your Success Story Begins Today
                                    </h2>
                                    <p className="text-white fw-bold" style={{ opacity: '0.75' }}>Take the first step toward a better tomorrow with your very own cyber coach.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 my-auto">
                                {/* <img></img> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg_div card card-body shadow-blur mx-3 mx-md-4 mt-n6" style={{ transform: "translateY(-70px)", border: 'none' }}>
                <ContHero />
                <Details />
                <LocatnPage />
                <section className="py-5">
                    <div className="container content-course-details py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="mb-1 fnt-clr-head">Network your way to success</h4>
                                <p className="lead mb-0 fnt-clr-txt">Follow Us!</p>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="sharethis-inline-share-buttons st-left st-has-labels st-inline-share-buttons st-animated" id="st-1">
                                    <div className="st-btn st-frist st-remove-label" data-network="facebook" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/facebook.svg" />
                                        <span className="st-label">share</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="twitter" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/twitter.svg" />
                                        <span className="st-label">post</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="email" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/email.svg" />
                                        <span className="st-label">post</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="whatsapp" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/whatsapp.svg" />
                                        <span className="st-label">post</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="sms" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/sms.svg" />
                                        <span className="st-label">sms</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="sharethis" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/sharethis.svg" />
                                        <span className="st-label">post</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="linkedin" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/linkedin.svg" />
                                        <span className="st-label">post</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="tumblr" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/tumblr.svg" />
                                        <span className="st-label">post</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="reddit" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/reddit.svg" />
                                        <span className="st-label">post</span>
                                    </div>
                                    <div className="st-btn st-remove-label" data-network="digg" style={{ display: "inline-block" }}>
                                        <img alt="face sharing button" src="./assets/digg.svg" />
                                        <span className="st-label">post</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactPage;