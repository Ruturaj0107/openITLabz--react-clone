import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navbar from './landingPage/navbar';
import Footer from './landingPage/footer';
import Homepage from './landingPage/home/Homepage';
import AboutPage from './landingPage/about/aboutPage';
import ContactPage from './landingPage/contact/contactPage';
import NotFound from './landingPage/notfound';
import Feedback from './landingPage/feedback';  
import ScheduleDemo from './landingPage/Schedule';
import BlogPage from './landingPage/blog/BlogPage';
import Batches from './landingPage/resource/batches';
import GalleryPage from './landingPage/resource/gallery';
import DownloadsPage from './landingPage/resource/download';
import AwsPage from './landingPage/course/awsPage';
import AzurePage from './landingPage/course/azurePage';
import GoogleCloudPage from './landingPage/course/googleCloud';
import DevOpsPage from './landingPage/course/DevOps';
import AzureDevPage from './landingPage/course/devopsAzure';
import DockerPage from './landingPage/course/docker';
import KuberPage from './landingPage/course/kubernetes';
import AIpage from './landingPage/course/artificial';
import MLpage from './landingPage/course/machineLearn';
import DSpage from './landingPage/course/dataScience';
import PythonPage from './landingPage/course/python';
import ScrollToTop from './landingPage/ScrollToTop';
import CorporatePage from './landingPage/course/corporate';
import PrivacyPage from './landingPage/privacy';
import DevOpsDetailsPage from './landingPage/resource/devopsDetails';
import AzureDetailsPage from './landingPage/resource/azuredetails';
import AIBlogPage from './landingPage/blog/aiblog';
import DevOpsBlogPage from './landingPage/blog/devopsblog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/leadership' element={<AboutPage/>}/>
      <Route path='/amazon-web-services' element={<AwsPage/>}/>
      <Route path='/microsoft-azure' element={<AzurePage/>}/>
      <Route path='/google-cloud-platform' element={<GoogleCloudPage/>}/>
      <Route path='/devops' element={<DevOpsPage/>}/>
      <Route path='/azure-devops' element={<AzureDevPage/>}/>
      <Route path='/docker-certified-associate' element={<DockerPage/>}/>
      <Route path='/certified-kubernetes-administrator' element={<KuberPage/>}/>
      <Route path='/artificial-intelligence' element={<AIpage/>}/>
      <Route path='/machine-learning' element={<MLpage/>}/>
      <Route path='/data-science' element={<DSpage/>}/>
      <Route path='/project-oriented-python' element={<PythonPage/>}/>
      <Route path='/batch' element={<Batches/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route path='/downloads' element={<DownloadsPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/the-future-of-artificial-intelligence' element={<AIBlogPage/>}/>
      <Route path='devops-vs-salesforce-which-technology-is-better' element={<DevOpsBlogPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/schedule-a-demo' element={<ScheduleDemo/>}/>
      <Route path='/corporate-training' element={<CorporatePage/>}/>
      <Route path='/become-an-instructor' element={<CorporatePage/>}/>
      <Route path='/devops-professional-certification' element={<DevOpsDetailsPage/>}/>
      <Route path='/azure-devops-certification' element={<AzureDetailsPage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPage/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <Feedback/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
