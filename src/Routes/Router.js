import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../component/AllProjects/AllProjects";
import Main from "../Layout/Main/Main";
import ProjectsLayout from "../Layout/ProjectsLayout/ProjectsLayout";
import NavAllProjects from "../NavAllProjects/NavAllProjects";
import Home from "../pages/Home/Home";
import ProjectsDetails from "../pages/ProjectsDetails/ProjectsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "projects/:id",
    element: <ProjectsDetails></ProjectsDetails>,
  },
  // {
  //   path:"/",
  //   element:<Main></Main>
  // },
  // {
  //   path:'/',
  //   element:<ProjectsLayout></ProjectsLayout>,
  //   children:[
  //     {
  //       path:'/',
  //       element:<NavAllProjects></NavAllProjects>
        
  //     },
  //     {
  //       path:'/:id',
  //       element:<NavAllProjects></NavAllProjects>
        
  //     }
  //   ]
  // }
]);
