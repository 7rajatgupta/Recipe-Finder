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
  const [message, setMessage] = useState(
    "Yo ! What you wanna cook today ? Search "
  );
  // TODO: &from=0&to=3&calories=591-722&health=alcohol-free
  const makeGetRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // * Fetch the recipes:
  const getRecipes = async () => {
    const response = await fetch(makeGetRequest);
    const data = await response.json();

    // * Set the state after getting the data from the api:
    setRecipes(data.hits);
  };

  useEffect(() => {
    // ! This method runs first time the page renders and also, whatever event or state change you put in the [] parameter
    // * Fetch the data
    getRecipes();
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
      setMessage("");
      setSearch("");
    }
    if (search === "") {
      setMessage("Yo, type something first !");
    }
  };

  return (
    <div className="App">
      <form className="form-controls search-form" onSubmit={getResults}>
        <input
          className=" form-controls input search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="button button-primary search-button" type="submit">
          Yo find ma recipe
        </button>
      </form>
      <h3>{message}</h3>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
