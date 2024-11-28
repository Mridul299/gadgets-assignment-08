import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.Jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Errorpage from './components/Errorpage';
import Home from './components/home/Home';
import Statistics from './components/statistics/Statistics';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import ProductDetails from './components/productDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:  <Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: ":category",
        element: <Home />,
      },
      {
        path: "statistics",
        element:<Statistics></Statistics>,
      },
      {
        path: "dashboard",
        element:<Dashboard></Dashboard>,
        loader: () => fetch("/data.json").then((res) => res.json()),
      },
      {
        path:"feedback",
        element:<Contact></Contact>
      },
      {
        path: "product-details/:id",
        element:<ProductDetails></ProductDetails>,
        loader: () => fetch("/data.json").then((res) => res.json()),
      },




    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)