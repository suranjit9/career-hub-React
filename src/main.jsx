import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Jobs from './Components/Header/Link/Jobs.jsx';
import Statistics from './Components/Header/Link/Statistics.jsx';
import AppliedJobs from './Components/Header/Link/AppliedJobs.jsx';
import JobDeatal from './Components/FeaturedJob/JobDeatal';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/jobs',
        element: <Jobs></Jobs>,
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>,
      },
      {
        path:'/Applied-Jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader:()=> fetch('../public/data/jobs.json'),
      },
      {
        path:'/job/:id',
        element: <JobDeatal></JobDeatal>,
        loader:()=> fetch('../public/data/jobs.json'),
      },
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
