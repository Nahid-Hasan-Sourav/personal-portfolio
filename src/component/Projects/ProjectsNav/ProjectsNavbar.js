import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectsNavbar = () => {
    let activeStyle = {
        backgroundColor: "red",
      };
    
      let activeClassName = "underline";
      const projectsNav=[
        "All",
        "HTML & CSS",
        "BOOTSTARP",
        "JAVASCRIPT",
        "MERN",
      ]
    
    return (
        <div>
            <div className='navbar justify-center'>
                <div className='list-none bg-[#EAEAEA] p-4' >
               
                  
              
               {
                projectsNav?.map((item)=>{
                    return(
                        <li >
                   <NavLink
                   to={`/${item}`}
                   className='p-4 text-md  font-bold'
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                   >
                  {item}
                   </NavLink>
                </li>
                    )
                })
               }

                {/* <li  >
                   <NavLink
                   to='html_css'
                   className='  p-4 text-md  font-bold'
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                   >
                   HTML & CSS
                   </NavLink>
                </li>
                <li  >
                   <NavLink

                   to='bootstarp'
                   className='  p-4 text-md  font-bold'
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                   >
                  BOOTSTARP
                   </NavLink>
                </li>
                <li  >
                   <NavLink
                   to='javascript'
                   className='  p-4 text-md  font-bold'
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                   >
                   JAVASCRIPT
                   </NavLink>
                </li>
                <li  >
                   <NavLink
                   to='react_js'
                   className='  p-4 text-md  font-bold'
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                   >
                   REACT JS
                   </NavLink>
                </li>
                <li  >
                   <NavLink
                   className='  p-4 text-md  font-bold'
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                   >
                  MERN
                   </NavLink>
                </li> */}
                </div>

            </div>
        </div>
    );
};

export default ProjectsNavbar;