import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const mealsObject = useLoaderData()
    // console.log(mealsObject)
    const meals = mealsObject.meals
    // console.log(meals)
    return (
        <div className='container mx-auto my-12 grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
            {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>

    );
};

export default Restaurant;