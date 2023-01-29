import React from 'react';
import About from '../../component/About/About';
import Banner from '../../component/Banner/Banner';
import ContactMe from '../../component/ContactMe/ContactMe'
import Footer from '../../component/Footer/Footer';


import Navbar from '../../component/Navbar/Navbar';
import Projects from '../../component/Projects/Projects';
import ProjectsNavbar from '../../component/Projects/ProjectsNav/ProjectsNavbar';

import Skills from '../../component/Skills/Skills';
import ProjectsLayout from '../../Layout/ProjectsLayout/ProjectsLayout';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
           
            <ContactMe></ContactMe>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;