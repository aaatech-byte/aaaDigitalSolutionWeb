import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import OurWork from "./pages/Portfolio/OurWork";
import ContactForm from "./pages/Contact/ContactPage";
import ServicesPage from "./pages/Services/ServicesPage";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsCondition";

import Career from "./pages/Carrers/Career";
import JobApplicationForm from "./pages/Carrers/Form";

import Blog from "./pages/Blog/Blog";
import Blog1 from "./pages/Blog/NumberOfBlogs/Blogs/Blog1";
import Blog2 from "./pages/Blog/NumberOfBlogs/Blogs/Blog2";
import Blog3 from "./pages/Blog/NumberOfBlogs/Blogs/Blog3";
import Blog4 from "./pages/Blog/NumberOfBlogs/Blogs/Blog4";
import Blog5 from "./pages/Blog/NumberOfBlogs/Blogs/Blog5";
import Blog6 from "./pages/Blog/NumberOfBlogs/Blogs/Blog6";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
         
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

          <Route path="/termsconditions" element={<TermsAndCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

