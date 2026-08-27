import React from "react";
import { Link } from "react-router-dom";

function Batches() {
    return(
        <>
         <header className="">
                <div className="page-header min-vh-75 bg-demo-banner" style={{ backgroundImage: 'url(./assets/batch.jpg)', backgroundPosition: '50%' }}>
                    <span className="mask bg-common-banner-overlay opacity-4 position-absolute top-0 start-0 w-100 h-100"></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 my-auto">
                                <div className="brand">
                                    <h2 className="text-light mb-0" style={{ color: '#ffffff !important' }}>
                                        Current Batches
                                    </h2>
                                    <p className="text-white fw-bold" style={{ opacity: '0.75' }}>The detailed list for current and upcoming batch, as well as batch information.</p>
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
                <div className="container py-lg-5 py-0 position-relative mb-4">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h2 className="position-relative fnt-clr-head">Current and upcoming batches</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 mt-4 content-course-details">
                            <div className="card card-profile mt-4 border batch-card">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12 mt-n5">
                                        <div className="p-3 text-center pe-md-0">
                                            <img className="w-lg-100 w-65 border-radius-md shadow-lg batch-card-image " src="./assets/devops-pro.png" alt="gg"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-6 col-12 my-auto">
                                        <div className="card-body ps-lg-0 p-3">
                                            <h5 className="mb-0 fnt-clr-head batch-button-align">DevOps Professional</h5>
                                            <p class="mb-0 fnt-clr-txt batch-button-align">Certification:  DevOps Professional Certification Trailed </p>
                                            <p class="mb-0 fnt-clr-txt"><span>Start from : 05/04/2023 </span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-2 ps-3">
                                    <div className="row">
                                        <div className="col-md-3 text-center col-6">
                                            <div className="icon text-center mb-2 mx-auto" style={{width:'35px',height:'35px'}}>
                                                <i className="material-icons text-info"style={{top:'10%',fontSize:'1.15rem'}}>
                                                    <img src="./assets/update.svg" alt="i"/>
                                                </i>
                                            </div>
                                            <div>
                                                <span class="fnt-clr-head"><b>Duration</b></span>
                                                <p class="fnt-clr-txt">3.5 Month</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-center col-6">
                                            <div className="icon text-center mb-2 mx-auto" style={{width:'35px',height:'35px'}}>
                                                <i className="material-icons text-info"style={{top:'10%',fontSize:'1.15rem'}}>
                                                    <img src="./assets/import_contacts.svg" alt="i"/>
                                                </i>
                                            </div>
                                            <div>
                                                <span class="fnt-clr-head"><b>Lectures</b></span>
                                                <p class="fnt-clr-txt">30</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-center col-6">
                                            <div className="icon text-center mb-2 mx-auto" style={{width:'35px',height:'35px'}}>
                                                <i className="material-icons text-info"style={{top:'10%',fontSize:'1.15rem'}}>
                                                    <img src="./assets/view_in_ar.svg" alt="i"/>
                                                </i>
                                            </div>
                                            <div>
                                                <span class="fnt-clr-head"><b>Batch type</b></span>
                                                <p class="fnt-clr-txt">Weekday</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-center col-6">
                                            <div className="icon text-center mb-2 mx-auto" style={{width:'35px',height:'35px'}}>
                                                <i className="material-icons text-info"style={{top:'10%',fontSize:'1.15rem'}}>
                                                    <img src="./assets/settings_system_daydream.svg" alt="i"/>
                                                </i>
                                            </div>
                                            <div>
                                                <span class="fnt-clr-head"><b>Host type</b></span>
                                                <p class="fnt-clr-txt">Offline</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="px-2 px-0 batch-button-align" style={{marginTop:'12px'}}>
                                            <a href="#/"><button className='btn btn-lg bg-gradient-success mx-lg-2 ms-2 center-block EN'>ENROLL NOW</button></a>
                                            <Link to="/devops-professional-certification"><button className='btn btn-lg  MD mx-lg-2 ms-2 me-lg-1 center-block'>MORE DETAILS</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mt-4 content-course-details">
                            <div className="card card-profile mt-4 border batch-card">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12 mt-n5">
                                        <div className="p-3 text-center pe-md-0">
                                            <img className="w-lg-100 w-65 border-radius-md shadow-lg batch-card-image " src="./assets/azure_logo.png" alt="gg"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-6 col-12 my-auto">
                                        <div className="card-body ps-lg-0 p-3">
                                            <h5 className="mb-0 fnt-clr-head batch-button-align">Azure DevOps</h5>
                                            <p class="mb-0 fnt-clr-txt batch-button-align">Certification:  Azure DevOps AZ400 Certification Trailed </p>
                                            <p class="mb-0 fnt-clr-txt"><span>Start from : 15/04/2023 </span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-2 ps-3">
                                    <div className="row">
                                        <div className="col-md-3 text-center col-6">
                                            <div className="icon text-center mb-2 mx-auto" style={{width:'35px',height:'35px'}}>
                                                <i className="material-icons text-info"style={{top:'10%',fontSize:'1.15rem'}}>
                                                    <img src="./assets/update.svg" alt="i"/>
                                                </i>
                                            </div>
                                            <div>
                                                <span class="fnt-clr-head"><b>Duration</b></span>
                                                <p class="fnt-clr-txt">3.5 Month</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-center col-6">
                                            <div className="icon text-center mb-2 mx-auto" style={{width:'35px',height:'35px'}}>
                                                <i className="material-icons text-info"style={{top:'10%',fontSize:'1.15rem'}}>
                                                    <img src="./assets/import_contacts.svg" alt="i"/>
                                                </i>
                                            </div>
                                            <div>
                                                <span class="fnt-clr-head"><b>Lectures</b></span>
                                                <p class="fnt-clr-txt">30</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-center col-6">
                                            <div className="icon text-center mb-2 mx-auto" style={{width:'35px',height:'35px'}}>
                                                <i className="material-icons text-info"style={{top:'10%',fontSize:'1.15rem'}}>
                                                    <img src="./assets/view_in_ar.svg" alt="i"/>
                                                </i>
                                            </div>
                                            <div>
                                                <span class="fnt-clr-head"><b>Batch type</b></span>
                                                <p class="fnt-clr-txt">Weekday</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-center col-6">
                                            <div className="icon text-center mb-2 mx-auto" style={{width:'35px',height:'35px'}}>
                                                <i className="material-icons text-info"style={{top:'10%',fontSize:'1.15rem'}}>
                                                    <img src="./assets/settings_system_daydream.svg" alt="i"/>
                                                </i>
                                            </div>
                                            <div>
                                                <span class="fnt-clr-head"><b>Host type</b></span>
                                                <p class="fnt-clr-txt">Offline</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="px-2 px-0 batch-button-align" style={{marginTop:'12px'}}>
                                            <a href="#/"><button className='btn btn-lg bg-gradient-success mx-lg-2 ms-2 center-block EN'>ENROLL NOW</button></a>
                                            <Link to="/azure-devops-certification"><button className='btn btn-lg  MD mx-lg-2 ms-2 me-lg-1 center-block'>MORE DETAILS</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="mb-3 fnt-clr-head">Share these batches</h5>
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

export default Batches;