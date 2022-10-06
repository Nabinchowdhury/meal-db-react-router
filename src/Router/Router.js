import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Main/Main";
import MealDetails from "../MealDetails/MealDetails";
import Restaurant from "../Restaurant/Restaurant";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/restaurant",
                loader: async () => {
                    return fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
                },
                element: <Restaurant></Restaurant>
            },

            {
                path: "/about",
                element: <h1>This is About</h1>
            },
            {
                path: "/mealdb/:id",
                loader: async ({ params }) => {
                    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
                },
                element: <MealDetails></MealDetails>
            },
        ]
    }

])