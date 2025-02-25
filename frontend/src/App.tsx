import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import OurWork from "./pages/Portfolio/OurWork";
import ContactForm from "./pages/Contact/ContactPage";

import Career from "./pages/Carrers/Career";
import JobApplicationForm from "./pages/Carrers/Form";


import ServicesPage from "./pages/Services/ServicesPage";
import WebDevelopment from "./pages/Services/WebDevelopment";
import MobileApps from "./pages/Services/MobileApps";
import CustomSoftware from "./pages/Services/CustomSoftware";
import ECommerce from "./pages/Services/ECommerce";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import SocialMarketing from "./pages/Services/SocialMarketing";
import VideoMarketing from "./pages/Services/VideoMarketing";
import EmailMarketing from "./pages/Services/EmailMarketing";

import Blog from "./pages/Blog/Blog";
import Blog1 from "./pages/Blog/NumberOfBlogs/Blogs/Blog1";
import Blog2 from "./pages/Blog/NumberOfBlogs/Blogs/Blog2";
import Blog3 from "./pages/Blog/NumberOfBlogs/Blogs/Blog3";
import Blog4 from "./pages/Blog/NumberOfBlogs/Blogs/Blog4";
import Blog5 from "./pages/Blog/NumberOfBlogs/Blogs/Blog5";
import Blog6 from "./pages/Blog/NumberOfBlogs/Blogs/Blog6";
// import Blog1 from "./pages/Blog/NumberOfBlogs/Blog1";
// import Blog2 from "./pages/Blog/NumberOfBlogs/Blog2";
// import Blog3 from "./pages/Blog/NumberOfBlogs/Blog3";
// import Blog4 from "./pages/Blog/NumberOfBlogs/Blog4";
// import Blog5 from "./pages/Blog/NumberOfBlogs/Blog5";
// import Blog6 from "./pages/Blog/NumberOfBlogs/Blog6";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route
            path="/services/custom-software"
            element={<CustomSoftware />}
          />
          <Route
            path="/services/social-marketing"
            element={<SocialMarketing />}
          />
          <Route
            path="/services/video-marketing"
            element={<VideoMarketing />}
          />
          <Route
            path="/services/email-marketing"
            element={<EmailMarketing />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/job-application" element={<JobApplicationForm />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/blog1" element={<Blog1 />} />
          <Route path="/blog/blog2" element={<Blog2 />} />
          <Route path="/blog/blog3" element={<Blog3 />} />
          <Route path="/blog/blog4" element={<Blog4 />} />
          <Route path="/blog/blog5" element={<Blog5 />} />
          <Route path="/blog/blog6" element={<Blog6 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

