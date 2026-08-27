import React from "react";

function DownloadsPage() {
    return(
        <>
        <header className="">
                <div className="page-header min-vh-75 bg-demo-banner" style={{ backgroundImage: 'url(./assets/downloads-banner4.jpg)', backgroundPosition: '50%' }}>
                    <span className="mask bg-common-banner-overlay opacity-4 position-absolute top-0 start-0 w-100 h-100"></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 my-auto">
                                <div className="brand">
                                    <h2 className="text-light mb-0" style={{ color: '#ffffff !important' }}>
                                        Downloads
                                    </h2>
                                    <p className="text-white fw-bold" style={{ opacity: '0.75' }}>Download our helpful resources to boost your success!</p>
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
            <section className="pt-5 pb-5">
                <div className="container content-course-details">
                    <div className="row mt-lg-5 mt-1">
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-5 mb-5">
                            <div className="card card-profile">
                                <div className="text-center mt-n5 z-index-1">
                                    <div className="position-relative">
                                        <div className="blur-shadow-avatar">
                                            <img className="avatar avatar-xxl border-radius-xl" alt="pdf" src="./assets/pdf.svg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body m-3"><h5 class="mb-0 fnt-clr-head text-center">Azure DevOps Brochure</h5></div>
                                <div className="text-center ps-3 pb-3"><a href="https://openitlabz.com/upload/Brochure/Azure DevOps Brochure - OpenITLabz.pdf" class="btn btn-lg  bg-gradient-success sd mb-0">GET BROCHURE</a></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-5 mb-5">
                            <div className="card card-profile">
                                <div className="text-center mt-n5 z-index-1">
                                    <div className="position-relative">
                                        <div className="blur-shadow-avatar">
                                            <img className="avatar avatar-xxl border-radius-xl" alt="pdf" src="./assets/pdf.svg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body m-3"><h5 class="mb-0 fnt-clr-head text-center">Cloud Computing Brochure</h5></div>
                                <div className="text-center ps-3 pb-3"><a href="https://openitlabz.com/upload/Brochure/Azure DevOps Brochure - OpenITLabz.pdf" class="btn btn-lg  bg-gradient-success sd mb-0">GET BROCHURE</a></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-5 mb-5">
                            <div className="card card-profile">
                                <div className="text-center mt-n5 z-index-1">
                                    <div className="position-relative">
                                        <div className="blur-shadow-avatar">
                                            <img className="avatar avatar-xxl border-radius-xl" alt="pdf" src="./assets/pdf.svg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body m-3"><h5 class="mb-0 fnt-clr-head text-center">DevOps Professional Brochure</h5></div>
                                <div className="text-center ps-3 pb-3"><a href="https://openitlabz.com/upload/Brochure/Azure DevOps Brochure - OpenITLabz.pdf" class="btn btn-lg  bg-gradient-success sd mb-0">GET BROCHURE</a></div>
                            </div>
                        </div>
                        <div className="row mt-lg-5 mt-1">
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-5 mb-5">
                            <div className="card card-profile">
                                <div className="text-center mt-n5 z-index-1">
                                    <div className="position-relative">
                                        <div className="blur-shadow-avatar">
                                            <img className="avatar avatar-xxl border-radius-xl" alt="pdf" src="./assets/pdf.svg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body m-3"><h5 class="mb-0 fnt-clr-head text-center">Docker & Kubernetes Brochure</h5></div>
                                <div className="text-center ps-3 pb-3"><a href="https://openitlabz.com/upload/Brochure/Azure DevOps Brochure - OpenITLabz.pdf" class="btn btn-lg  bg-gradient-success sd mb-0">GET BROCHURE</a></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-5 mb-5">
                            <div className="card card-profile">
                                <div className="text-center mt-n5 z-index-1">
                                    <div className="position-relative">
                                        <div className="blur-shadow-avatar">
                                            <img className="avatar avatar-xxl border-radius-xl" alt="pdf" src="./assets/pdf.svg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body m-3"><h5 class="mb-0 fnt-clr-head text-center">Python Programming Brochure</h5></div>
                                <div className="text-center ps-3 pb-3"><a href="https://openitlabz.com/upload/Brochure/Azure DevOps Brochure - OpenITLabz.pdf" class="btn btn-lg  bg-gradient-success sd mb-0">GET BROCHURE</a></div>
                            </div>
                        </div>
                        </div>                
                    </div>
                </div>
            </section>
            <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="mb-3 fnt-clr-head">Share these batches details</h5>
                            <div className="sharethis-inline-share-buttons st-left st-has-labels st-inline-share-buttons st-animated" id="st-1">
                                <div className="st-btn st-frist st-remove-label" data-network="facebook" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/facebook.svg"/>
                                    <span className="st-label">share</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="twitter" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/twitter.svg"/>
                                    <span className="st-label">post</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="email" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/email.svg"/>
                                    <span className="st-label">post</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="whatsapp" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/whatsapp.svg"/>
                                    <span className="st-label">post</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="sms" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/sms.svg"/>
                                    <span className="st-label">sms</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="sharethis" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/sharethis.svg"/>
                                    <span className="st-label">post</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="linkedin" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/linkedin.svg"/>
                                    <span className="st-label">post</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="tumblr" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/tumblr.svg"/>
                                    <span className="st-label">post</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="reddit" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/reddit.svg"/>
                                    <span className="st-label">post</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="digg" style={{display:"inline-block"}}>
                                    <img alt="face sharing button" src="./assets/digg.svg"/>
                                    <span className="st-label">post</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center"></div>
                    </div>
            </div>
        </div>
        </>
    );
}



export default DownloadsPage;