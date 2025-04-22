import { createBrowserRouter } from "react-router";
import MainLayOut from './../MainLayOut/MainLayOut';
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Booking from "../Pages/Booking";
import LawyerDetails from "../Pages/LawyerDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayOut,
        children:[
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/blogs",
            Component: Blogs
          },
          {
            path:"/booking",
            Component: Booking
          },
          {
            path: "/lawyer-details",
            Component: LawyerDetails
          },
          // {
          //   path:"/error",
          //   Component:ErrorPage
          // }
        ]
      },
        {
          path:"*",
          Component:ErrorPage
        }
      
])