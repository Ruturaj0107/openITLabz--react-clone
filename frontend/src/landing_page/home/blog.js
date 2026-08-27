import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section className="py-5">
    <div className="blog bg-light py-5 mt-5">
        <div className="container">
            <div className="row p-3 my-5 blog-header d-flex justify-content-center ">
                <h2 className="text-center fnt-clr-head">Keep up with the latest happenings</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-lg-0 mb-5">
                    <div className='card blog-card p-2'>
                        <div className="card-header home-blog-header p-0 m-3 mt-n4 position-relative z-index-0">
                            <a className="d-block home-blog-img" href="./"><img src="./assets/ai-course.png" alt="ai-course"></img></a>
                        </div>
                        <div className="card-body pt-2">
                            <a href="./" className="h5 d-block text-dark" style={{textDecoration:'none'}}><h5>The Future of Artificial Intelligence</h5></a>
                            <Link to="/the-future-of-artificial-intelligence"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-12 mb-lg-0 mb-5">
                    <div className='card blog-card p-2'>
                        <div className="card-header home-blog-header p-0 m-3 mt-n4 position-relative z-index-0">
                            <a className="d-block home-blog-img" href="./"><img src="./assets/devops-salesforce.png" alt="ai-course"></img></a>
                        </div>
                        <div className="card-body pt-2">
                            <a href="./" className="h5 d-block text-dark" style={{textDecoration:'none'}}><h5>DevOps vs. Salesforce – Which Technology is Better?</h5></a>
                            <Link to="/devops-vs-salesforce-which-technology-is-better"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </div>
    </section>
  );
}



export default Blog;
    