import React from "react";




function CorporatePage() {

    return (
        <>
            <header className="">
                <div className="page-header min-vh-75 bg-demo-banner" style={{ backgroundImage: 'url(./assets/course-details-banner.jpg)', backgroundPosition: '50%' }}>
                    <span className="mask bg-common-banner-overlay opacity-4 position-absolute top-0 start-0 w-100 h-100"></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg my-auto">
                                <div className="brand">
                                    <h2 className="text-light brand-head mb-0" style={{ color: '#ffffff !important' }}>
                                        Corporate Training
                                    </h2>
                                    <p className="text-white fw-bold brand-head" style={{ opacity: '0.75' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 text-center course-img">
                                {/* <img src="./assets/aws_logo.png" alt="aws" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg_div card card-body shadow-blur mx-3 mx-md-4 mt-n6" style={{ transform: "translateY(-70px)", border: 'none' }}>
                <div className="container content-course-details">
                    <div className="row pt-4">
                        
                        <div className="row my-5 py-5 text-center">
                            <h2>Required content from openitlabz</h2>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CorporatePage;