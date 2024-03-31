import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getMealRecipeByIdMeal } from "../api";
import { Preloader } from "../components/Preloader";

export function MealRecipe() {
    const [recipe, setRecipe] = useState({});
    const { idMeal } = useParams();

    const { goBack } = useHistory();

    useEffect(() => {
        getMealRecipeByIdMeal(idMeal).then((data) => setRecipe(data.meals[0]));
    }, [idMeal]);

    return (
        <>
            {!recipe.idMeal ? <Preloader /> : Recipe(recipe)}
            <button className="btn" onClick={goBack}>
                Go back
            </button>
        </>
    );
}

function Recipe(recipe) {
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } =
        recipe;

    return (
        <div className="recipe">
            <img src={strMealThumb} alt="strMeal" />
            <h1>{strMeal}</h1>
            <h6>Category: {strCategory}</h6>
            {strArea ? <h6>Area: {strArea}</h6> : null}
            <p>{strInstructions}</p>

            <table className="centered">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(recipe).map((key) => {
                        if (key.includes("strIngredient") && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>

            {strYoutube ? (
                <div className="row">
                    <h5 style={{ margin: "2rem 0 1.5rem 0" }}>Video Recipe</h5>
                    <iframe
                        title={idMeal}
                        src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                        allowFullScreen
                    />
                </div>
            ) : null}
        </div>
    );
}
