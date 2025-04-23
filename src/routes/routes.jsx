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
            hydrateFallbackElement:<div className="text-center">
                                        <span className="loading loading-bars loading-xs"></span>
                                        <span className="loading loading-bars loading-sm"></span>
                                        <span className="loading loading-bars loading-md"></span>
                                        <span className="loading loading-bars loading-lg"></span>
                                        <span className="loading loading-bars loading-xl"></span>
                                      </div>,
            element:<Home></Home>,
            loader: () => fetch("../Lawyers.json"),
          },
          {
            path: "/lawyer-details/:id",
            hydrateFallbackElement:<div className="text-center">
                                        <span className="loading loading-bars loading-xs"></span>
                                        <span className="loading loading-bars loading-sm"></span>
                                        <span className="loading loading-bars loading-md"></span>
                                        <span className="loading loading-bars loading-lg"></span>
                                        <span className="loading loading-bars loading-xl"></span>
                                      </div>,
            Component: LawyerDetails,
            loader: ()=>fetch("../Lawyers.json")
          },
          {
            path:"/blogs",
            hydrateFallbackElement:<div className="text-center">
                                        <span className="loading loading-bars loading-xs"></span>
                                        <span className="loading loading-bars loading-sm"></span>
                                        <span className="loading loading-bars loading-md"></span>
                                        <span className="loading loading-bars loading-lg"></span>
                                        <span className="loading loading-bars loading-xl"></span>
                                      </div>,
            Component: Blogs,
            loader: ()=>fetch("../quesAns.json")
          },
          {
            hydrateFallbackElement:<div className="text-center">
                                        <span className="loading loading-bars loading-xs"></span>
                                        <span className="loading loading-bars loading-sm"></span>
                                        <span className="loading loading-bars loading-md"></span>
                                        <span className="loading loading-bars loading-lg"></span>
                                        <span className="loading loading-bars loading-xl"></span>
                                      </div>,
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