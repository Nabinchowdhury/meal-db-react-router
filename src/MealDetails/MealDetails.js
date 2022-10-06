import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const meal = useLoaderData().meals[0]
    const { strMeal, strMealThumb, strCategory } = meal
    // console.log(meal)

    const navigate = useNavigate()
    const loadNavigation = () => {
        navigate('/restaurant')
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p className='text-2xl text-left'>Category: {strCategory}</p>
                <div className="card-actions justify-end">

                    <button className="btn btn-primary" onClick={loadNavigation}>Go to Restaurant</button>
                </div>
            </div>
        </div >
    );
};

export default MealDetails;