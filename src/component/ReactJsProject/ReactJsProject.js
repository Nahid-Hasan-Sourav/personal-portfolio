import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReactJsProject = () => {
    const [reacJsProject,setreacJsProject]=useState(null)
    useEffect(()=>{
        fetch('allprodetails.json')
        .then(res=>res.json())
        .then(data=>setreacJsProject(data))
      },[])
    return (
        <>
        <div className='grid lg:grid-cols-3 gap-6 mt-6'>
            {
               reacJsProject?.filter((item)=>{
                    return(
                        item.projectCategory==="REACT JS"

                    )
                }).map((item)=>{
                    return(
                        <div className="gap-6   card card-compact bg-base-100 shadow-xl">
                        <figure><img src={item.imgMockup} alt="Shoes" 
                        className='w-full h-[180px] '
                        /></figure>
                        <div className="card-body">
                          <h4 className='font-bold text-2xl uppercase'>{item.projectName}</h4>
                          <div className="card-actions justify-end">
                            <Link to={`/projects/${item.id}`} className="btn btn-primary bg-red-500" >View Details</Link>
                          </div>
                        </div>
                      </div>
                    )
                })
            }
        </div>
        </>
    );
};

export default ReactJsProject;