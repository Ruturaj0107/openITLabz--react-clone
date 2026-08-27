import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";




function DevOpsDetailsPage() {

    // const [showMore, setShowMore] = useState(false);
    // const [showMore1, setShowMore1] = useState(false);

    return (
        <>
            <header className="">
                <div className="page-header min-vh-75 bg-demo-banner" style={{ backgroundImage: 'url(./assets/batch-details-banner.jpg)', backgroundPosition: '50%' }}>
                    <span className="mask bg-common-banner-overlay opacity-4 position-absolute top-0 start-0 w-100 h-100"></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg my-auto">
                                <div className="brand">
                                    <h2 className="text-light devops-brand-head mb-0" style={{ color: '#ffffff !important' }}>
                                        DevOps Professional
                                    </h2>
                                    <p className="text-white fw-bold devops-brand-head" style={{ opacity: '1' }}>DevOps Professional Certification Trailed</p>
                                    <p className="text-white mt-5 mb-4 batch-date"> <b>Start date:</b> 05/04/2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>End date:</b> 04/07/2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Batch time:</b> 10 AM to 12 PM</p>
                                    <div className="row">
                                        <div className="col-md-6 col-6 my-2 text-white">
                                            <div className="border p-3 batch-detail">
                                                <b>Host: </b>Offline
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6 my-2 text-white">
                                            <div className="border p-3 batch-detail">
                                                <b>Batch type: </b>Weekday
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6 my-2 text-white">
                                            <div className="border p-3 batch-detail">
                                                <b>Duration: </b>hours
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6 my-2 text-white">
                                            <div className="border p-3 batch-detail">
                                                <b>Lectures: </b>30 lectures
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 text-center">
                                {/* <img src="./assets/ai_logo.png" alt="ai" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg_div card card-body shadow-blur mx-3 mx-md-4 mt-n6" style={{ transform: "translateY(-70px)", border: 'none' }}>
                <section className="py-lg-3 py-5">
                    <div className="container content-course-details">
                        <div className="row">
                            <div className="card bg-light shadow-lg border mt-4">
                                <div className="card-body content-course-details">
                                    <div className="col-lg-12 mx-auto">
                                        <div className="nav-wrap position-relative end-0 mt-4">
                                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Information</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Syllabus</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Topics</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 me-auto my-auto text-start">
                                        <div className="tab-content">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                                <h5 className="mt-5 fnt-clr-head">Course content</h5>
                                                <p className="fnt-clr-txt" style={{ textAlign: 'justify' }}>
                                                    DevOps is a set of tools and practices that integrate IT processes in a company for the faster deployment of software. In a DevOps model, there is significant collaboration between teams and DevOps engineers have multiple skills. A DevOps engineer must have basic knowledge of all concepts in computer science. So this course is recommended for students or professionals from the IT industry. OpenITLabz offers DevOps training and placement assistance to kick-start the next phase of your professional life. Possible career paths include DevOps Engineer, DevOps Manager, DevOps Lead, and DevOps Architect. Our DevOps certification course covers tools such as Jenkins, Git, Kubernetes, Prometheus, Terraform, and Docker. Several leading MNCs around the world use the DevOps model to streamline their IT processes. Some of them are Amazon, Netflix, Adobe, and HP. By undergoing DevOps training in Pune at OpenITLabz you can be a part of these giants. So what are you waiting for? Take DevOps training online or at our institute and understand the methodologies needed to balance the entire software development lifecycle. Embrace automation and drive change!
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                                <h5 className="mt-5 fnt-clr-head">Course syllabus</h5>
                                                <p className="fnt-clr-txt" style={{ textAlign: 'justify' }}>
                                                    • Introduction to DevOps<br />
                                                    • Operating Systems & Linux Basics<br />
                                                    • Version Control with Git<br />
                                                    • Build Tools and Package Manager Tools<br />
                                                    • Artifact Repository Manager with Nexus<br />
                                                    • Containers with Docker<br />
                                                    • Build Automation & CI/CD with Jenkins<br />
                                                    • Cloud Services<br />
                                                    • Container Orchestration with Kubernetes<br />
                                                    • Infrastructure as Code with Terraform<br />
                                                    • Configuration Management with Ansible<br />
                                                    • Monitoring with Prometheus<br />
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                                <h5 className="mt-5 fnt-clr-head">Batch topics</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="mb-3 fnt-clr-head">Share these batches</h5>
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
                        <div className="col-lg-6 d-flex align-items-center"></div>
                    </div>
                </div>
                <section className="my-2 py-5">
                    <div className="container content-course-details">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="fnt-clr-head text-center">Facilities at OpenITLabz</h3>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="p-3 text-start ps-0">
                                    <span class="material-symbols-outlined">
                                        <img src="./assets/group_add.svg" alt="" />
                                    </span>
                                    <h5 className="fnt-clr-head font-weight-bolder mt-3 mb-4">Experienced Faculty</h5>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">Uniform trainings for all students</span>
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">Supportive and high levels of communication</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 text-start ps-0">
                                    <span class="material-symbols-outlined">
                                        <img src="./assets/laptop_chromebook.svg" alt="" />
                                    </span>
                                    <h5 className="fnt-clr-head font-weight-bolder mt-3 mb-4">Practical Labs</h5>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">24/7 Unlimited accessibility</span>
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">Lab exercises teach students a understanding of the complexity</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="p-3 text-start ps-0">
                                    <span class="material-symbols-outlined">
                                        <img src="./assets/auto_stories.svg" alt="" />
                                    </span>
                                    <h5 className="fnt-clr-head font-weight-bolder mt-3 mb-4">Comprehensive Study Material</h5>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">Helpful for challenging, intricate subjects</span>
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">Giving students a focus for their learning-related tasks</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 text-start ps-0">
                                    <span class="material-symbols-outlined">
                                        <img src="./assets/verified.svg" alt="" />
                                    </span>
                                    <h5 className="fnt-clr-head font-weight-bolder mt-3 mb-4">Company Environment</h5>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">Recognize possibilities and be the first to act</span>
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">An integral aspect of an organizational and strengthened behavior</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 text-start ps-0">
                                    <span class="material-symbols-outlined">
                                        <img src="./assets/terminal.svg" alt="" />
                                    </span>
                                    <h5 className="fnt-clr-head font-weight-bolder mt-3 mb-4">Real Time Project</h5>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">A higher level of productivity and effectiveness</span>
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">A greater sense of openness and visibility</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 text-start ps-0">
                                    <span class="material-symbols-outlined">
                                        <img src="./assets/business_center.svg" alt="" />
                                    </span>
                                    <h5 className="fnt-clr-head font-weight-bolder mt-3 mb-4">Professional Infrastructure</h5>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">Boosts productivity and streamlining processes</span>
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex px-0 py-1">
                                        <img src="./assets/check.svg" alt="" style={{ display: 'inline' }} />
                                        <div className="ps-3">
                                            <span className="text-sm font-weight-bold fnt-clr-txt">Flexibility to meet your student's needs better</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-lg-6 py-4 my-5 bg-light">
                    <div className="container content-course-details pb-5">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="p-3 text-center mb-5">
                                    <h2 className="fnt-clr-head mt-3">Other Batches</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 mb-lg-0 mb-5">
                                <div className="card" style={{border:'none'}}>
                                    <div className="card-header home-blog-header p-0 m-3 mt-n4 position-relative z-index-2">
                                        <img className="w-lg-100 w-65 border-radius-md batch-card-image " src="./assets/azure_logo.png" alt="gg" style={{ width: '350px' }} />
                                    </div>
                                    <div className="card-body pt-2">
                                        <h5 className="fnt-clr-head font-weight-bolder" style={{ fontStyle: '1.25rem', lineHeight: '1.375' }}>Azure DevOps</h5>
                                        <div className="row mt-lg-4">
                                            <div className="col-md-6 text-center col-6">
                                                <div className="icon text-center mb-2 mx-auto" style={{ width: '35px', height: '35px' }}>
                                                    <i className="material-icons text-info" style={{ top: '10%', fontSize: '1.15rem' }}>
                                                        <img src="./assets/update.svg" alt="i" />
                                                    </i>
                                                </div>
                                                <div>
                                                    <span class="fnt-clr-head font-weight-bolder">Duration</span>
                                                    <p class="fnt-clr-txt">3.5 Month</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-center col-6">
                                                <div className="icon text-center mb-2 mx-auto" style={{ width: '35px', height: '35px' }}>
                                                    <i className="material-icons text-info" style={{ top: '10%', fontSize: '1.15rem' }}>
                                                        <img src="./assets/import_contacts.svg" alt="i" />
                                                    </i>
                                                </div>
                                                <div>
                                                    <span class="fnt-clr-head font-weight-bolder">Lectures</span>
                                                    <p class="fnt-clr-txt">30</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-center col-6">
                                                <div className="icon text-center mb-2 mx-auto" style={{ width: '35px', height: '35px' }}>
                                                    <i className="material-icons text-info" style={{ top: '10%', fontSize: '1.15rem' }}>
                                                        <img src="./assets/view_in_ar.svg" alt="i" />
                                                    </i>
                                                </div>
                                                <div>
                                                    <span class="fnt-clr-head font-weight-bolder">Batch type</span>
                                                    <p class="fnt-clr-txt">Weekday</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-center col-6">
                                                <div className="icon text-center mb-2 mx-auto" style={{ width: '35px', height: '35px' }}>
                                                    <i className="material-icons text-info" style={{ top: '10%', fontSize: '1.15rem' }}>
                                                        <img src="./assets/settings_system_daydream.svg" alt="i" />
                                                    </i>
                                                </div>
                                                <div>
                                                    <span class="fnt-clr-head font-weight-bolder">Host type</span>
                                                    <p class="fnt-clr-txt">Offline</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row float-end">
                                            <Link to="/azure-devops-certification"><button className='btn btn-lg bg-gradient-success rm mb-3 font-weight-bolder'>READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-lg-0 mb-5">
                                <div className="card" style={{border:'none'}}>
                                    <div className="card-header home-blog-header p-0 m-3 mt-n4 position-relative z-index-2">
                                        <img className="w-lg-100 w-65 border-radius-md batch-card-image " src="./assets/devops-pro.png" alt="gg" style={{ width: '350px' }} />
                                    </div>
                                    <div className="card-body pt-2">
                                        <h5 className="fnt-clr-head font-weight-bolder" style={{ fontStyle: '1.25rem', lineHeight: '1.375' }}>DevOps Professional</h5>
                                        <div className="row mt-lg-4">
                                            <div className="col-md-6 text-center col-6">
                                                <div className="icon text-center mb-2 mx-auto" style={{ width: '35px', height: '35px' }}>
                                                    <i className="material-icons text-info" style={{ top: '10%', fontSize: '1.15rem' }}>
                                                        <img src="./assets/update.svg" alt="i" />
                                                    </i>
                                                </div>
                                                <div>
                                                    <span class="fnt-clr-head font-weight-bolder">Duration</span>
                                                    <p class="fnt-clr-txt">3.5 Month</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-center col-6">
                                                <div className="icon text-center mb-2 mx-auto" style={{ width: '35px', height: '35px' }}>
                                                    <i className="material-icons text-info" style={{ top: '10%', fontSize: '1.15rem' }}>
                                                        <img src="./assets/import_contacts.svg" alt="i" />
                                                    </i>
                                                </div>
                                                <div>
                                                    <span class="fnt-clr-head font-weight-bolder">Lectures</span>
                                                    <p class="fnt-clr-txt">30</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-center col-6">
                                                <div className="icon text-center mb-2 mx-auto" style={{ width: '35px', height: '35px' }}>
                                                    <i className="material-icons text-info" style={{ top: '10%', fontSize: '1.15rem' }}>
                                                        <img src="./assets/view_in_ar.svg" alt="i" />
                                                    </i>
                                                </div>
                                                <div>
                                                    <span class="fnt-clr-head font-weight-bolder">Batch type</span>
                                                    <p class="fnt-clr-txt">Weekday</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-center col-6">
                                                <div className="icon text-center mb-2 mx-auto" style={{ width: '35px', height: '35px' }}>
                                                    <i className="material-icons text-info" style={{ top: '10%', fontSize: '1.15rem' }}>
                                                        <img src="./assets/settings_system_daydream.svg" alt="i" />
                                                    </i>
                                                </div>
                                                <div>
                                                    <span class="fnt-clr-head font-weight-bolder">Host type</span>
                                                    <p class="fnt-clr-txt">Offline</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row float-end">
                                            <Link to="/devops-professional-certification"><button className='btn btn-lg bg-gradient-success rm mb-3 font-weight-bolder'>READ MORE</button></Link>
                                        </div>
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

export default DevOpsDetailsPage;