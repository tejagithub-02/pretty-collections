import React from 'react';
import UserSidebar from './UserSidebar';
import './MyProjects.css';

const projects = []; // You can replace this with dynamic data later

const MyProjects = () => {
  return (
    <div className="user-layout">
    <div className="desktop-sidebar">
        <UserSidebar />
      </div>

      <div className="projects-content">
        <h2 className="page-title">My Projects</h2>
        <p className="page-description">View your saved and ongoing projects.</p>

        {projects.length === 0 ? (
          <div className="empty-state">
            <p>You haven’t saved any projects yet.</p>
            <button className="browse-btn">Start Browsing</button>
          </div>
        ) : (
          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <button className="view-btn">View Project</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProjects;
