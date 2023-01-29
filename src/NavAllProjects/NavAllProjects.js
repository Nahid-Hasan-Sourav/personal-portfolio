import React from 'react';
import { useParams } from 'react-router-dom';

const NavAllProjects = () => {
    const router=useParams()
    return (
        <div>
            Show all projects{
                router.id
            }
        </div>
    );
};

export default NavAllProjects;