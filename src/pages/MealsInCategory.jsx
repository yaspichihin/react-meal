import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getMealsByCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

export function MealsInCategory() {
    const [meals, setMeals] = useState([]);
    const { categoryName } = useParams();

    const { goBack } = useHistory();

    useEffect(() => {
        getMealsByCategory(categoryName).then((data) => setMeals(data.meals));
    }, [categoryName]);

    return (
        <>
            <button className="btn" onClick={goBack}>
                Go back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}
