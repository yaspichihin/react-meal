import { API_URL } from "./config";

export async function getMealRecipeByIdMeal(mealId) {
    const response = await fetch(API_URL + "lookup.php?i=" + mealId);
    const recipe = await response.json();
    return recipe;
}

export async function getAllCategories() {
    const response = await fetch(API_URL + "categories.php");
    const categories = await response.json();
    return categories;
}

export async function getMealsByCategory(mealCategory) {
    const response = await fetch(API_URL + "filter.php?c=" + mealCategory);
    const mealsByCategory = await response.json();
    return mealsByCategory;
}
