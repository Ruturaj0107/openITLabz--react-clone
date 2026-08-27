import React from "react";
import { Link } from "react-router-dom";

function Benefits() {
  return (
    <section className="py-5">
      <div className="container content-course-details">
        <div className="row">
          <div className="col-md-5 col-12 d-flex justify-content-center flex-column me-auto p-lg-0 p-5 text-lg-start text-center">
            <h2 className="mb-4 fnt-clr-head">The benefits of OpenITLabz</h2>
            <p className="mb-2 text-justify fnt-clr-txt">
              OpenITLabz is a software training institute based in Kharadi, Pune. It was established in 2012 to make IT education readily available in the city. Since our inception, the focus has been on bridging the gap between academics and industry requirements. 
            </p>
            <ul className="m-lg-2 m-auto" style={{listStyleType:'disc'}}>
              <li className="mb-2 fnt-clr-txt text-justify">Promote technical education in India and abroad</li>
              <li className="mb-2 fnt-clr-txt text-justify">Create value and make a difference in the field of education</li>
              <li className="mb-2 fnt-clr-txt text-justify">Deliver sustainable and advanced technology solutions to clients</li>
            </ul>
            <h2 className="mt-4 fnt-clr-head">We are a Iprocss Technologies</h2>
            <p className="mb-2 text-justify fnt-clr-txt">
              Iprocss Technologies Private Limited was established in 2010 as a full spectrum global Information Technology company providing end-to-end business solutions. We collaborate with our clientele to design, develop, and implement solutions that add value to their business. 
            </p>
            <p className="blockquote mt-3 mb-1 ps-2" style={{fontSize:'1rem'}}>
              <span class="text-bold text-grey">“Education and leadership go along with one another.”</span>
              <br/>
            </p>
            <h4 className="text-end">
              <strong className="blockquote-footer" style={{fontSize:"1rem"}}>
                <i>Mohammad</i>
              </strong>
            </h4>
            <p></p>
            <div className="div">
              <Link to="/leadership"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
            </div>
          </div>
          <div className="col-md-5 col-6 mx-lg-0 mx-auto px-lg-0 d-none d-sm-none d-md-block px-md-0 my-auto">
            <img className="max-width-400 border-radius-lg shadow-lg" src="./assets/about-openit.jpg" alt='aa' style={{height:'550px',borderRadius:'0.5rem'}}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;