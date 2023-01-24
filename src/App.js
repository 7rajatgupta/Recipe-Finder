import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App = () => {
  const APP_ID = "ac599251";
  const APP_KEY = "79d9f7325f7d29d8809b2a46c03d72c4";

  // * State :
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(" ");
  const [query, setQuery] = useState("");
  // TODO: &from=0&to=3&calories=591-722&health=alcohol-free
  const makeGetRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // * Fetch the recipes:
  const getRecipes = async () => {
    const response = await fetch(makeGetRequest);
    const data = await response.json();

    // * Set the state after getting the data from the api:
    console.log(data.hits);
    setRecipes(data.hits);
  };

  useEffect(() => {
    // ! This method runs first time the page renders and also, whatever event or state change you put in the [] parameter
    // * Fetch the data
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // * Update the search :
  const updateSearch = event => {
    setSearch(event.target.value);
  };
  // * Get the results :
  const getResults = event => {
    event.preventDefault();
    if (search !== " " && search !== "") {
      setQuery(search);
      setSearch("");
    }
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h2 className="text-primary text-center mb-3">Recipe Finder</h2>
        <h6 className="text-secondary text-center mb-5">
          Find your favorite recipies.
        </h6>

        <div className="search-form">
          <form className="form-group search-form" onSubmit={getResults}>
            <input
              className="form-control search-bar mb-3"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="mt-5">
        <div className="card-group">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              healthLabels={recipe.recipe.healthLabels}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
