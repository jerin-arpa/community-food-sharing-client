import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFood from "../Pages/ManageFood/ManageFood";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import ManageSingleFood from "../Pages/ManageSingleFood/ManageSingleFood";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://community-food-sharing-server-six.vercel.app/food'),
            },
            {
                path: "/availableFoods",
                element: <AvailableFood></AvailableFood>,
                loader: () => fetch('https://community-food-sharing-server-six.vercel.app/food'),
            },
            {
                path: "/foodDetails/:id",
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: () => fetch('https://community-food-sharing-server-six.vercel.app/food'),
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
            },
            {
                path: "/manageFoods",
                element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>,
                loader: () => fetch('https://community-food-sharing-server-six.vercel.app/food')
            },
            {
                path: "/updateFood/:id",
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://community-food-sharing-server-six.vercel.app/food/${params.id}`)
            },
            {
                path: "/manageSingleFood/:id",
                element: <PrivateRoute><ManageSingleFood></ManageSingleFood></PrivateRoute>,
                loader: () => fetch('https://community-food-sharing-server-six.vercel.app/requestFood')
            },
            {
                path: "/foodRequest",
                element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>,
                loader: () => fetch('https://community-food-sharing-server-six.vercel.app/requestFood', { credentials: 'include' }),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
        ]
    },
]);


export default router;