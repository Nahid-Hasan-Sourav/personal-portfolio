import React from 'react';
import '../Projects/projects.css'
import ProjectsNav from './ProjectsNav/ProjectsNav';

const projects = () => {
    return (
        <div id='projects'>
           ,<div className='my-10'>
           <div className="divider lg:w-[600px] mx-auto before:bg-[#FE0D0D] after:bg-[#FE0D0D]">
                <h1 className='text-5xl font-bold text-center  tracking-[6px] mt-4 mb-3 uppercase '>Projects</h1>
            </div>
           </div>
            
            <ProjectsNav></ProjectsNav>
        </div>
    );
};

export default projects;