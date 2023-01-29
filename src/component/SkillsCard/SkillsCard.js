import React from 'react';

const SkillsCard = ({skill}) => {
    console.log("Single skills card from skillCard",skill)
    return (
     
        <div className="card  bg-base-100 shadow-xl border-2 w-[210] hover:bg-red-200 cursor-pointer">
            {/* <label htmlFor="my-modal" className="btn">open modal</label> */}
          <label className="card-body items-center cursor-pointer"
          htmlFor="my-modal"
          >           
            <img
              src={skill.IconUrl}
              className="w-14 hover:animate-spin"
              alt='banner'
            />
            <h2 className='text-lg font-bold uppercase'>
                {skill.Name}
            </h2>
          
            <div>
           
            </div>
          </label>
          {/* <div className='px-6'>
          <progress className="progress progress-error w-56" value="100" max="100"></progress>
          </div> */}
        </div>
      
    );
};

export default SkillsCard;