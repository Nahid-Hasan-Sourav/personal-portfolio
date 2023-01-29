import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { featureProvider } from '../../contexts/FeaturesContext';
// import allProjectDetails from '../../Assets/Data/allprodetails.json'

const AllProjects = () => {
  const {setstoredata}=useContext(featureProvider)
  const [allProjects,setAllProjects]=useState(null)
  const [sliceNum,setsliceNum]=useState(3)
    // const [projectData,setprojectData]=useState([])
    // const navigate=useNavigate()
    // useEffect(()=>{
    //     fetch('projects.json')
    //     .then(res=>res.json())
    //     .then(data=>setprojectData(data))
  
    //   },[])
      // console.log("object",projectData);
      // const passData =(data,id) =>{
      //   console.log("store",data)
      //   setstoredata(data)
      //   navigate(`/projects/${id}`)
      // }


      useEffect(()=>{
        fetch('allprodetails.json')
        .then(res=>res.json())
        .then(data=>setAllProjects(data))
      },[])
      // console.log("Checking... ",allProjectDetails)
      const changeLength =()=>{
 
  setsliceNum(allProjects.length)
  
      }
      console.log("Check slice",sliceNum)
    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-6 mt-6'>
            {
                allProjects?.slice(0,sliceNum).map((data)=>{
                    return (
                        <div className="gap-6  card card-compact bg-base-100 shadow-xl">
                        <figure><img src={data.imgMockup} alt="Shoes" 
                        className='w-full h-[180px] '
                        /></figure>
                        <div className="card-body">
                          <h4 className='font-bold text-2xl uppercase'>{data.projectName}</h4>
                          <div className="card-actions justify-end">
                            <Link to={`/projects/${data.id}`} className="btn btn-primary bg-red-500" >View Details</Link>
                          </div>
                        </div>
                      </div>
                     
                    );
                })
               
            }
            </div>
            <>
            {
             sliceNum===3 ? <div className='text-center'>
              <button className="btn btn-accent my-5"
              onClick={()=>changeLength()}
              >SEE ALL</button>
              </div>
              :
              ""
            }
            </>
        </>
    );
};

export default AllProjects;