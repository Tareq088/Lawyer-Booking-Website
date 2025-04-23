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
            hydrateFallbackElement:<p>Loading......................................</p>,
            element:<Home></Home>,
            loader: () => fetch("../Lawyers.json"),
          },
          {
            path: "/lawyer-details/:id",
            hydrateFallbackElement:<p>Loading......................................</p>,
            Component: LawyerDetails,
            loader: ()=>fetch("../Lawyers.json")
          },
          {
            path:"/blogs",
            hydrateFallbackElement:<p>Q/A Loading......................................</p>,
            Component: Blogs,
            loader: ()=>fetch("../quesAns.json")
          },
          {
            path:"/booking",
     
            Component: Booking,
           
          },
        ]
      },
        {
          path:"/error",
          Component:ErrorPage
        },
        {
          path:"*",
          Component:ErrorPage
        }
      
])