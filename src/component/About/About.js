import React from 'react';
import aboutImg from '../../Assets/full photo-half.jpg'
import aboutImg1 from '../../Assets/full_photo-half-removebg-preview.png'
import { FaDownload } from 'react-icons/fa';

const About = () => {
    return (
        <div className='bg-[#F2F2F2] my-12' id='about'>
           <p className='text-5xl font-bold text-center  tracking-[6px] mt-4 mb-9 uppercase py-10'>About Me</p>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content items-start flex-col lg:flex-row ">
            <div className='lg:w-[50%] flex md:justify-center mx-auto '>
            <img
              src={aboutImg1}
              className="h-[400px] block rounded-lg  shadow-2xl border-2 outline outline-offset-4 outline-2 border-[#ff0000] text-right "
              alt='banner'
            />
            </div>
            <div className='lg:w-[50%]  p-3'>
                
              {/* <h1 className="text-5xl font-bold mb-3 text-[#ff0000]">Hi!</h1> */}
              {/* <h1 className="text-4xl font-bold mb-2">Who I am?</h1> */}
              <h5 className="text-3xl font-bold mb-2 md:text-left sm:text-left text-center">I am NH SOURAV</h5>
              <p className='font-bold md:text-left sm:text-left text-center'>
              Recently I have completed my B.SC in Computer Science and Engineering from Daffodil International University
              </p>
              <p className="py-6 lg:pr-4 font-bold md:text-left sm:text-left text-justify">
              To secure a challenging position in a reputable organization to expand my learnings,     knowledge, and skills. I have great problem-solving power with excellent communication skills.
              I wish to make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.
              </p> 
             <div className='font-bold'>
              <p>Date of birth : <span className='font-normal'>07-04-1998</span></p>
              <p>Nationality :  <span className='font-normal'>Bangladesh</span></p>
              <p>Address :      <span className='font-normal'>Sukhrabad,Dhaka,Bangladesh</span></p>
              <div className='my-4'>
              <a className="btn btn-[#1462AF] font-bold px-6" target="_blank" download href='https://drive.google.com/file/d/1u4yHynByLVaqVBeTGod5B8mxTWn-N6mB/view?usp=share_link'>
                <span className='inline-block mr-4'><FaDownload /></span>
                Resume</a>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default About;