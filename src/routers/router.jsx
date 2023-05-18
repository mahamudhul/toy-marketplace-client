import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import AllToys from "../pages/AllToys";
import AddToys from "../pages/AddToys";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/addtoys',
                element: <AddToys></AddToys>
            },
            
          
        ]
    }
])

export default router;