import React, {  useContext,useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { featureProvider } from '../../contexts/FeaturesContext';
const ProjectsDetails = () => {
    const {storedata}=useContext(featureProvider)
    const navigate=useNavigate()
   
    console.log("From details:",storedata)
    const back =()=>{
        navigate('/')
    }
   
    return (
      <div className="container mx-auto py-10 ">
        <button onClick={() => back()} className="btn btn-primary my-10">
          Back To Home
        </button>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={storedata.urlOne} alt="Shoes" />
            </figure>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={storedata.urlTwo} alt="Shoes" />
            </figure>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={storedata.urlThree} alt="Shoes" />
            </figure>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Used Technology</h3>
          <div>
            {storedata?.usedTechnologhy?.map((data) => {
              return <p className="font-bold text-xl">{data}</p>;
            })}
          </div>
          <div className="">
            <a href={storedata.live} target='_blank' className="btn btn-success">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    );
};

export default ProjectsDetails;