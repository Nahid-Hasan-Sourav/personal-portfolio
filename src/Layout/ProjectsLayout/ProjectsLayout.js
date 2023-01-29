import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectsNavbar from '../../component/Projects/ProjectsNav/ProjectsNavbar';

const ProjectsLayout = () => {
    return (
        <div>
            <ProjectsNavbar></ProjectsNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default ProjectsLayout;