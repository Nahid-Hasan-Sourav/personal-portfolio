import React, { useEffect, useState } from 'react';
import SkillsCard from '../SkillsCard/SkillsCard';
import SkillsModal from '../SkillsModal/SkillsModal';

const Skills = () => {
  const [singleSkills,setsingleSkills]=useState([])

    useEffect(()=>{
      fetch('skills.json')
      .then(res=>res.json())
      .then(data=>setsingleSkills(data))

    },[])
    console.log('THis is from skills 1',singleSkills)
    return (
      <div>
        <div className="my-5">
          <h1 className="text-5xl font-bold text-center  tracking-[6px] mt-4 mb-8 uppercase my-5">
            SKILLS
          </h1>
          {/* <h1 className="text-5xl font-bold text-center  tracking-[6px] mt-4 mb-3 uppercase my-5">
            My top Skills
          </h1> */}
        </div>

        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 px-12'
        >
         {
          singleSkills?.map((skill,index) =>{
            return(
             <SkillsCard
             key={index}
             skill={skill}
             >

             </SkillsCard>
            )
          })
         }
       
        </div>
         <SkillsModal/>
      </div>
    );
};

export default Skills;