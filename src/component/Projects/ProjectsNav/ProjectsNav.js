import React, { useState } from 'react';
import AllProjects from '../../AllProjects/AllProjects';
import HtmlAndCssProject from '../../HtmlAndCssProject/HtmlAndCssProject';
import JavascriptProject from '../../JavascriptProject/JavascriptProject';
import ReactJsProject from '../../ReactJsProject/ReactJsProject';

// import '../projects.module.css'

const ProjectsNav = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

  return (
    <div className="">
      <div className="flex lg:w-[700px] mx-auto mt-10 font-bold">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          ALL
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          HTML & CSS
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          JAVASCRIPT
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          REACT JS
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          MERN
        </button>
      </div>

      <div className="content-tabs px-10">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
       <AllProjects></AllProjects>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <HtmlAndCssProject></HtmlAndCssProject>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <JavascriptProject></JavascriptProject>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
        <ReactJsProject></ReactJsProject>
        </div>
      </div>
    </div>
  );
};

export default ProjectsNav;