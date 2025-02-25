import { NavLink } from "react-router-dom";
import { Briefcase, Mail, FileText, MessageSquare, Star, Folder, Wrench } from "lucide-react"; // Import icons
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <NavLink to="/jobmangement" className="nav-link">
        <Briefcase size={18} /> Job Management
      </NavLink>
      <NavLink to="/message" className="nav-link">
        <Mail size={18} /> Messages
      </NavLink>
      <NavLink to="/blogs" className="nav-link">
        <FileText size={18} /> Blogs
      </NavLink>
      <NavLink to="/job" className="nav-link">
        <MessageSquare size={18} /> Job Applications
      </NavLink>
      <NavLink to="/reviews" className="nav-link">
        <Star size={18} /> Reviews
      </NavLink>
      <NavLink to="/projects" className="nav-link">
        <Folder size={18} /> Projects
      </NavLink>
    </div>
  );
}
