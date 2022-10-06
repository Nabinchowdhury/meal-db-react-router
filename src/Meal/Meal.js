import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    // console.log(meal)
    const navigate = useNavigate()
    const loadNavigation = () => {
        navigate(`/mealdb/${idMeal}`)
    }
    const { idMeal, strMeal, strMealThumb, strCategory } = meal
    // console.log(idMeal)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p className='text-2xl text-left'>Category: {strCategory}</p>
                <div className="card-actions justify-end">
                    <Link to={`/mealdb/${idMeal}`} className='text-3xl'>Click</Link>
                    <Link to={`/mealdb/${idMeal}`}><button className="btn btn-primary">Click Here</button></Link>
                    <button className="btn btn-primary" onClick={loadNavigation}>Click Here</button>
                </div>
            </div>
        </div >

    );
};

export default Meal;