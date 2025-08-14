import { Recipe, RecipeResponse } from "../interfaces";

export async function fetchAllRecipes(tag?: string) {
  const url = tag
    ? `https://dummyjson.com/recipes/tag/${tag}`
    : "https://dummyjson.com/recipes";
  const response = await fetch(url);
  const { recipes }: RecipeResponse = await response.json();

  return recipes;
}

export async function fetchRecipeById(id: string) {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe: Recipe = await response.json();
  return recipe;
}
