import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="courses bg-light py-5 mt-5">
      <div className='container px-4'>
        <div className="row mb-4">
          <h2>What do you want to learn?</h2>
        </div>
        <div className="row my-5">
          <div className="col-md-4">
            <div className='course-card card'>
              <div className="card-body p-2">
                <div className='row'>
                  <div className='col-3'><img src='./assets/aws_logo.png' alt='aws'></img></div>
                  <div className='col-9'><h3>Amazon Web Services</h3></div>
                  <p>Gain Amazon Web Services (AWS) certification through OpenITLabz today! Our AWS training aligns with the requirements of the industry and will prepare you for architect exams.</p>
                </div>
              </div>
              <Link to="/amazon-web-services"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className='course-card card'>
              <div className='card-body p-2'>
                <div className='row'>
                  <div className='col-3'><img src='./assets/azure_logo.png' alt='aws'></img></div>
                  <div className='col-9'><h3>Microsoft’s Azure</h3></div>
                  <p>Microsoft’s Azure cloud computing platform is used by organizations across the world for application management. Accelerate your career with our industry-oriented courses.</p>
                </div>
              </div>
              <Link to="/microsoft-azure"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className='course-card card'>
              <div className='card-body p-2'>
                <div className='row'>
                  <div className='col-3'><img src='./assets/devops_logo.png' alt='aws'></img></div>
                  <div className='col-9'><h3>DevOps Professional</h3></div>
                  <p>DevOps is a set of tools and practices that integrate IT processes in a company for the faster deployment of software. Embrace automation and drive change!</p>
                </div>
              </div>
              <Link to="/devops"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4"><div className='course-card card'>
            <div className="card-body p-2">
              <div className='row'>
                <div className='col-3'><img src='./assets/azure_logo.png' alt='aws'></img></div>
                <div className='col-9'><h3>Azure DevOps</h3></div>
                <p>DevOps is a collection of methods and tools that streamlines IT operations within a business to enable quicker software deployment.</p>
              </div>
            </div>
            <Link to="/azure-devops"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
          </div>
          </div>
          <div className="col-md-4"><div className='course-card card'>
            <div className="card-body p-2">
              <div className='row'>
                <div className='col-3'><img src='./assets/google_cloud.png' alt='aws'></img></div>
                <div className='col-9'><h3>Google Cloud Platform</h3></div>
                <p>DevOps is a set of tools and practices that integrate IT processes in a company for the faster deployment of software. Embrace automation and drive change!</p>
              </div>
            </div>
            <Link to="/google-cloud-platform"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
          </div>
          </div>
          <div className="col-md-4"><div className='course-card card'>
            <div className="card-body p-2">
              <div className='row'>
                <div className='col-3'><img src='./assets/ai_logo.png' alt='aws'></img></div>
                <div className='col-9'><h3>Artificial intelligence</h3></div>
                <p>DevOps is a set of tools and practices that integrate IT processes in a company for the faster deployment of software. Embrace automation and drive change!</p>
              </div>
            </div>
            <Link to="/artificial-intelligence"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Courses;