// import Sidebar from "./SideBar";
import WebDevBlog from "./BlogDomians/WebDev";
import AppDevBlog from "./BlogDomians/AppDev";
import CustomSoftwareBlog from "./BlogDomians/CustomDev";
import ECommerceBlog from "./BlogDomians/Ecom";
import EmailMarketingBlog from './BlogDomians/EmailMar'
import SocialMarketingBlog from "./BlogDomians/SocialMar";
import VideoMarketingBlog from "./BlogDomians/VideoMar";
import DigitalMarketingBlog from "./BlogDomians/DigitalMarketing";

export default function Single() {
  return (
    <div className="single flex-wrap flex flex-col lg:flex-row gap-6  ">
      <WebDevBlog/>
      <AppDevBlog/>
      <CustomSoftwareBlog/>
      <ECommerceBlog/>
      <EmailMarketingBlog/>
      <SocialMarketingBlog/>
      <DigitalMarketingBlog/>
      <VideoMarketingBlog/>
      {/* <Sidebar /> */}
    </div>
  );
}
