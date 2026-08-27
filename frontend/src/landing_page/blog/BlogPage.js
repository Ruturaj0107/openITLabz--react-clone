import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";

// const blog = {
//     title: "How AI is Changing Web Development",
//     slug: "how-ai-is-changing-web-development",
// };

const url = `https://openitlabz.com/the-future-of-artificial-intelligence`;

function BlogPage() {



    return (
        <>
            <header className="">
                <div className="page-header min-vh-75 bg-demo-banner" style={{ backgroundImage: 'url(./assets/blogs.jpg)', backgroundPosition: '50%' }}>
                    <span className="mask bg-common-banner-overlay opacity-4 position-absolute top-0 start-0 w-100 h-100"></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 my-auto">
                                <div className="brand">
                                    <h2 className="text-light mb-0" style={{ color: '#ffffff !important' }}>
                                        Blogs
                                    </h2>
                                    <p className="text-white fw-bold" style={{ opacity: '0.75' }}>Here, you'll discover all the latest and most interesting emerging technologies, as well as information on how to use them to accelerate corporate performance.</p>
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
                <section className="py-lg-5 py-sm-4">
                    <div className="container content-course-details">
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
                </section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="mb-3 fnt-clr-head">Share these blogs!</h5>
                            <div className="sharethis-inline-share-buttons st-left st-has-labels st-inline-share-buttons st-animated" id="st-1">
                                <FacebookShareButton url={url}><div className="st-btn st-frist st-remove-label" data-network="facebook" style={{ display: "inline-block" }}>
                                    <img alt="face sharing button" src="./assets/facebook.svg" />
                                    <span className="st-label">share</span>
                                </div></FacebookShareButton>
                                <div className="st-btn st-remove-label" data-network="twitter" style={{ display: "inline-block" }}>
                                    <img alt="face sharing button" src="./assets/twitter.svg" />
                                    <span className="st-label">post</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="email" style={{ display: "inline-block" }}>
                                    <img alt="face sharing button" src="./assets/email.svg" />
                                    <span className="st-label">post</span>
                                </div>
                                <WhatsappShareButton url={url}><div className="st-btn st-remove-label" data-network="whatsapp" style={{ display: "inline-block" }}>
                                    <img alt="face sharing button" src="./assets/whatsapp.svg" />
                                    <span className="st-label">post</span>
                                </div></WhatsappShareButton>
                                <div className="st-btn st-remove-label" data-network="sms" style={{ display: "inline-block" }}>
                                    <img alt="face sharing button" src="./assets/sms.svg" />
                                    <span className="st-label">sms</span>
                                </div>
                                <div className="st-btn st-remove-label" data-network="sharethis" style={{ display: "inline-block" }}>
                                    <img alt="face sharing button" src="./assets/sharethis.svg" />
                                    <span className="st-label">post</span>
                                </div>
                                <LinkedinShareButton url={url}><div className="st-btn st-remove-label" data-network="linkedin" style={{ display: "inline-block" }}>
                                    <img alt="face sharing button" src="./assets/linkedin.svg" />
                                    <span className="st-label">post</span>
                                </div></LinkedinShareButton>
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
            </div>
        </>
    );
}

export default BlogPage;