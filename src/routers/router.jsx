import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import AllToys from "../pages/AllToys";
import AddToys from "../pages/AddToys";
import ErrorPage from "../pages/ErrorPage";
import MyToys from "../pages/MyToys";
import SingleToyDetails from "../pages/SingleToyDetails";
import EditToys from "../pages/EditToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <AllToys></AllToys>,

            },
            {
                path: '/addtoys',
                element: <AddToys></AddToys>
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: 'alltoys/:id',
                element: <SingleToyDetails></SingleToyDetails>
            },
            {
                path: 'editToy/:id',
                element: <EditToys></EditToys>
            }



        ]
    }
])

export default router;