import React from 'react';
import img1 from '../../Assets/pic-1.png'
import img2 from '../../Assets/pic-2.png'
import img3 from '../../Assets/bannerPhoto-res-1.png'
import { FaDownload } from 'react-icons/fa';

const Banner = () => {
    return (
      <div className=''>
        <div className="hero min-h-screen bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row-reverse lg:h-[400px]">
            <div className=''>
            <img
              src={img3}
              className=" rounded-lg h-[400px] border-2 outline outline-offset-4 outline-2 border-[#ff0000] object-cover"
              alt='banner'
            />
            </div>
            <div className='lg:w-[50%]'>
                <p className='uppercase tracking-[10px] mb-10'>wellcome to my globe</p>
              <h1 className="text-5xl font-bold mb-7 text-[#ff0000]">Hi!</h1>
              <h3 className="text-5xl font-bold mb-3">I am Nahid Hasan Sourav</h3>
              <h5 className="text-4xl font-bold">I am a Mern Stack Developer</h5>
              <p className="py-6 lg:pr-4">
              To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. I wish to make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.
              </p> 
              <a className="btn btn-[#1462AF] font-bold px-6" target="_blank" download href='https://drive.google.com/file/d/1u4yHynByLVaqVBeTGod5B8mxTWn-N6mB/view?usp=share_link'>
                <span className='inline-block mr-4'><FaDownload /></span>
                Resume</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;