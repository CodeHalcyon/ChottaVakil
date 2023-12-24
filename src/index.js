import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Hero from './components/Hero/Hero'
import Offer from './components/Offer/Offer'
import About1 from './components/About/About1'
import About2 from './components/About/About2'
import About3 from './components/About/About3'
import About4 from './components/About/About4'
import './App.css'
import Videos from './components/Videos/Videos';
import Login from './components/Login/Login';
import Games from './components/games/games';
import LoginPage from './components/LoginPage/LoginPage';
import Video1 from './components/Videos/Video/Video1';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:"",
        element: <><LoginPage/></>
      },
      {
        path:'home',
        element: <><Hero/><Offer/></>
      },
      {
        path: "about",
        element: <><About1/> <About2/> <About3/> <About4/></>
      },
      {
        path:'videos',
        element:<Videos/>
        // children:[
        //   // {
        //   //   path:'/video1',
        //   //   element:<Video1/>
        //   // }
        // ]
      },
      // {
      //   path:'/video1',
      //   element:<Video1/>
      // },
      {
        path:'profile',
        element:<Login/>
      },
      {
        path:'games',
        element:<Games/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router2={router2}/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
