import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



function GoogleCloudPage() {

    const [showMore, setShowMore] = useState(false);
    const [showMore1, setShowMore1] = useState(false);

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
                                        Google Cloud Platform
                                    </h2>
                                    <p className="text-white fw-bold brand-head" style={{ opacity: '0.75' }}></p>
                                    <div className="row espl-course-social-logo">
                                        <div className="col-lg-6">
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
                                                <div className="st-btn st-remove-label" data-network="tumblr" style={{ display: "none" }}>
                                                    <img alt="face sharing button" src="./assets/tumblr.svg" />
                                                    <span className="st-label">post</span>
                                                </div>
                                                <div className="st-btn st-remove-label" data-network="reddit" style={{ display: "none" }}>
                                                    <img alt="face sharing button" src="./assets/reddit.svg" />
                                                    <span className="st-label">post</span>
                                                </div>
                                                <div className="st-btn st-remove-label" data-network="digg" style={{ display: "none" }}>
                                                    <img alt="face sharing button" src="./assets/digg.svg" />
                                                    <span className="st-label">post</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 text-center course-img">
                                <img src="./assets/google_cloud.png" alt="googleCP" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg_div card card-body shadow-blur mx-3 mx-md-4 mt-n6" style={{ transform: "translateY(-70px)", border: 'none' }}>
                <div className="container content-course-details">
                    <div className="row pt-4">
                        <div className="col-lg-7 col-md-7 col-12">
                            <div className="card shadow-lg border mt-2">
                                <div className="card-body p-4">
                                    <div className="col-lg-12 col-12 text-start mx-auto">
                                        <h5 className="mt-3 fnt-clr-head">Course content</h5>
                                        <div className="fnt-clr-txt text-hide" id="content" style={{ whiteSpace: 'pre-line', textAlign: 'justify', maxHeight: showMore ? "100%" : "145px", overflow: 'hidden' }}>
                                            <p className="py-3">The Google Cloud Platform (GCP) is a collection of cloud computing services that Google offers. It employs the same internal infrastructure as Google does for its consumer products including Google Search, Gmail, Drive, and YouTube. It offers a number of modular cloud services, such as computing, data storage, data analytics, and machine learning, in addition to a set of management tools. An account number or credit card are needed for registration.</p>
                                            <p>Serverless computing environments, platform as a service, and infrastructure as a service are all offered by Google Cloud Platform.</p>
                                            <p>The public cloud infrastructure for Google Cloud Platform is a component of Google Cloud, which also includes Google Workspace (G Suite), Android and Chrome OS for businesses, and application programming interfaces (APIs) for machine learning and enterprise mapping services.</p>
                                        </div>
                                        {!showMore && (
                                            <span id="dot1">
                                                <b>. . .</b>
                                            </span>
                                        )}
                                        <div className="row">
                                            {!showMore ? (
                                                <button
                                                    className="btn text-info p-1 mt-2 text-start"
                                                    onClick={() => setShowMore(true)}
                                                >
                                                    Read more . .
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn text-info p-1 mt-2 text-start"
                                                    onClick={() => setShowMore(false)}
                                                >
                                                    Read less
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-lg border mt-2">
                                <div className="card-body p-4">
                                    <div className="col-lg-12 col-12 text-start mx-auto">
                                        <h5 className="mt-3 fnt-clr-head">Course syllabus</h5>
                                        <div className="fnt-clr-txt text-hide" id="content" style={{ whiteSpace: 'pre-line', textAlign: 'justify', maxHeight: showMore1 ? "100%" : "145px", overflow: 'hidden' }}>
                                            <p className="pt-3">1. Compute:<br />
                                                • Cloud Function (SERVERLESS)<br />
                                                • GCE<br />
                                                • GKE<br />
                                                • Google APP Engine<br />
                                                • Google Instance Group<br />
                                                • Cloud Run</p>
                                            <p>2. Network:<br />
                                                • Cloud Load Balancer<br />
                                                • Cloud Firewall<br />
                                                • VPC<br />
                                                • Cloud DNS<br />
                                                • Cloud NAT</p>
                                            <p>3. Storage:<br />
                                                • Cloud Storage<br />
                                                • Persistent Disk</p>
                                            <p>4. IAM:<br />
                                                • GCP IAM</p>
                                            <p>5. Automation Services:<br />
                                                • Google Cloud Deployment Manager<br />
                                                • G-CLOUD CLI<br />
                                                • CLOUD</p>
                                            <p>6. Monitoring & Logging:<br />
                                                • STACKDRIVER</p>
                                            <p>7. Data Services:<br />
                                                • Cloud Big Query<br />
                                                • Cloud Spanner<br />
                                                • Cloud PUB/SUB<br />
                                                • Cloud Big Table<br />
                                                • Cloud DATAPROC<br />
                                                • Cloud SQL</p>
                                        </div>
                                        {!showMore1 && (
                                            <span id="dot1">
                                                <b>. . .</b>
                                            </span>
                                        )}
                                        <div className="row">
                                            {!showMore1 ? (
                                                <button
                                                    className="btn text-info p-1 mt-2 text-start"
                                                    onClick={() => setShowMore1(true)}
                                                >
                                                    Read more . .
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn text-info p-1 mt-2 text-start"
                                                    onClick={() => setShowMore1(false)}
                                                >
                                                    Read less
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="col-lg-12 mt-2 mx-auto content-course-details">
                                <div className="card border">
                                    <div className="row contact-form">
                                        <div className="col-lg-12">
                                            <form id="contact-form" method="post" autoComplete="off">
                                                <div className="card-body p-4 position-relative">
                                                    <div className="row">
                                                        <div className="col-12 text-start mb-3"><h5 class="fnt-clr-head text-center">Drop us a query</h5></div>
                                                        <div className="col-md-6">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="name">Name</label>
                                                                <input type="text" className="schedule-demo-input" required id="name" name="name" placeholder="Your name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 ps-2">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="mobile_no">Contact number</label>
                                                                <input type="tel" className="schedule-demo-input" required maxLength="10" id="mobile_no" name="mobile_no" placeholder="Your contact" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="email">Email Address</label>
                                                                <input type="email" id="email" name="email" required className="schedule-demo-input" placeholder="Your email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="demo-course">Course</label>
                                                                <select className="schedule-demo-select" name="course" required id="demo-course" defaultValue="">
                                                                    <option value="" disabled>Select</option>
                                                                    <option value="Amazon Web Services">Amazon Web Services</option>
                                                                    <option value="Microsoft Azure">Microsoft Azure</option>
                                                                    <option value="DevOps Professional">DevOps Professional</option>
                                                                    <option value="Azure DevOps">Azure DevOps</option>
                                                                    <option value="Google Cloud Platform">Google Cloud Platform</option>
                                                                    <option value="Artificial intelligence">Artificial intelligence</option>
                                                                    <option value="Machine Learning">Machine Learning</option>
                                                                    <option value="Data Science">Data Science</option>
                                                                    <option value="Project Oriented Python">Project Oriented Python</option>
                                                                    <option value="Docker Certified Associate">Docker Certified Associate</option>
                                                                    <option value="Certified Kubernetes Administrator">Certified Kubernetes Administrator</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="demo-course">Profession Type</label>
                                                                <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                                    <option value="" disabled>Select</option>
                                                                    <option value="Amazon Web Services">IT</option>
                                                                    <option value="Amazon Web Services">Non-IT</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="demo-course">Job status</label>
                                                                <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                                    <option value="" disabled>Select</option>
                                                                    <option value="Amazon Web Services">Employed</option>
                                                                    <option value="Amazon Web Services">Unemployed</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="demo-course">Training type</label>
                                                                <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                                    <option value="" disabled>Select</option>
                                                                    <option value="Amazon Web Services">Corporate</option>
                                                                    <option value="Amazon Web Services">Regular</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="demo-course">Batch type</label>
                                                                <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                                    <option value="" disabled>Select</option>
                                                                    <option value="Amazon Web Services">Weekday</option>
                                                                    <option value="Amazon Web Services">Weekend</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-group input-group-static mb-4">
                                                                <label htmlFor="demo-course">Estimated joining</label>
                                                                <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                                    <option value="" disabled>Select</option>
                                                                    <option value="Amazon Web Services">Immediate</option>
                                                                    <option value="Amazon Web Services">Within 1 week</option>
                                                                    <option value="Amazon Web Services">Within 2 weeks</option>
                                                                    <option value="Amazon Web Services">Within 3 to 4 weeks</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-4">
                                                        <button type="submit" class="btn btn-lg bg-gradient-success sd mb-0">SEND MESSAGE</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row py-4">
                        <h2>Latest blogs</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-5">
                            <div className='card blog-card p-2'>
                                <div className="card-header home-blog-header p-0 m-3 mt-n4 position-relative z-index-0">
                                    <a className="d-block home-blog-img" href="./"><img src="./assets/ai-course.png" alt="ai-course"></img></a>
                                </div>
                                <div className="card-body pt-2">
                                    <a href="./" className="h5 d-block text-dark" style={{ textDecoration: 'none' }}><h5>The Future of Artificial Intelligence</h5></a>
                                    <Link to="/the-future-of-artificial-intelligence"><button className='btn btn-lg bg-gradient-success rm md-0 font-weight-bolder'>READ MORE</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5">
                            <div className='card blog-card p-2'>
                                <div className="card-header home-blog-header p-0 m-3 mt-n4 position-relative z-index-0">
                                    <a className="d-block home-blog-img" href="./"><img src="./assets/devops-salesforce.png" alt="ai-course"></img></a>
                                </div>
                                <div className="card-body pt-2">
                                    <a href="./" className="h5 d-block text-dark" style={{ textDecoration: 'none' }}><h5>DevOps vs. Salesforce – Which Technology is Better?</h5></a>
                                    <Link to="/devops-vs-salesforce-which-technology-is-better"><button className='btn btn-lg bg-gradient-success rm md-0 font-weight-bolder'>READ MORE</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GoogleCloudPage;