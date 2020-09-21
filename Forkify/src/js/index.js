import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";

import { elements, renderLoader, clearLoader } from "./views/base";
/**   Global State of the app
 *  - Search object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */
const state = {};

/**
 *  SEARCH CONTROLLER
 */
const controlSearch = async () => {
  // 1. Get query from view
  const query = searchView.getInput();
  if (query) {
    // 2. New search object and to state
    state.search = new Search(query);
    // 3. Prepare UI for result
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    try {
      // 4. Search for results
      await state.search.getResults();
      // 5. Render results on UI
      clearLoader();
      searchView.renderResult(state.search.result);
    } catch (error) {
      alert("Something wrong with the search...");
    }
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResult(state.search.result, goToPage);
  }
});

/**
 *  RECIPE CONTROLLER
 */
const controlRecipe = async () => {
  // Get ID from url
  const id = window.location.hash.replace("#", "");
  console.log(id);

  if (id) {
    // Prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Hightlight Selected search item
    if (state.search) searchView.highlightSelected(id);

    // Creat new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data and parse ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch (error) {
      alert("Error processing recipe!");
    }
  }
};

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);
