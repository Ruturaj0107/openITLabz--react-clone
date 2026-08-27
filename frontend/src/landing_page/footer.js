import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer  pt-5">
      <div className="container footer-content mt-5">
        <div className="row">
          <div className='col-md-2 mb-4 ms-auto '><div className="text-center"><img src="./assets/open-it-labz-logo.svg" alt="logo" className="footer-logo mb-3"></img></div></div>
          <div className='col-md-2 col-sm-6 col-6 mb-4 ft-col'><p className="fnt-clr-head">Courses</p>
            <ul>
              <li><Link className="py-1 px-1" to="/amazon-web-services">Amazon Web Services</Link></li>
              <li><Link className="py-1 px-1" to="/microsoft-azure">Microsoft Azure</Link></li>
              <li><Link className="py-1 px-1" to="/devops">DevOps Professional</Link></li>
              <li><Link className="py-1 px-1" to="/azure-devops">Azure DevOps</Link></li>
              <li><Link className="py-1 px-1" to="/google-cloud-platform">Google Cloud Platform</Link></li>
            </ul>
          </div>
          <div className='col-md-2 col-sm-6 col-6 mb-4 ft-col'><p className="fnt-clr-head">Quick Links</p>
          <ul>
              <li><Link className="py-1 px-1" to="/batch">Batch Schedule</Link></li>
              <li><Link className="py-1 px-1" to="/become-an-instructor">Become an Instructor</Link></li>
              <li><Link className="py-1 px-1" to="/corporate-training">Corporate Training</Link></li>
              <li><Link className="py-1 px-1" to="/blog">Blogs</Link></li>
            </ul>
          </div>
          <div className='col-md-2 col-sm-6 col-6 mb-4 ft-col'><p className="fnt-clr-head">Help & Support</p>
          <ul>
              <li><Link className="py-1 px-1" to="/contact">Contact Us</Link></li>
              <li><Link className="py-1 px-1" to="/schedule-a-demo">Schedule a demo</Link></li>
              <li><Link className="py-1 px-1" to="/downloads">Downloads</Link></li>
            </ul>
          </div>
          <div className='col-md-2 col-sm-6 col-6 mb-4 me-auto ft-col'><p className="fnt-clr-head">Legal</p>
          <ul>
              <li><a className="py-1 px-1" href="./" style={{pointerEvents:'none'}}>Terms of Services</a></li>
              <li><Link className="py-1 px-1" to="/privacy-policy">Privacy Policy</Link></li>
              <li><a className="py-1 px-1" href="./" style={{pointerEvents:'none'}}>Disclaimer</a></li>
            </ul>
          </div>
          <div className='col-md-2 col-sm-6 col-6 mb-4 me-auto ft-col'><p className="fnt-clr-head">Contact</p>
          <ul>
              <li><a className="py-1 px-1" href="./" style={{pointerEvents:'none'}}>(+91) 744 749 0744</a></li>
              <li><a className="py-1 px-1" href="./" style={{pointerEvents:'none'}}>(+91) 744 731 8744</a></li>
              <li>&nbsp;</li>
              <li><a className="py-1 px-1" href="./" style={{pointerEvents:'none'}}>enquiry@openitlabz.com</a></li>
            </ul>
          </div>
        </div>
        <div className="row col-12 footer-row mt-5">
          <div className='col-md-6 col-sm-12 ft-col'><p>© 2026 Open IT Labz. All Rights Reserved.</p></div>
          <div className='col-md-6 col-sm-12 ft-col div-end'><p>Developed by Ruturaj with&#129653;</p></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;