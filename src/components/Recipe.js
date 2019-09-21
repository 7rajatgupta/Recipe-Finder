import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  if (title) {
    return (
      <div>
        <h1>{title}</h1>
        <ol>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>Calories count : {calories}</p>
        <img src={image} alt="" />
      </div>
    );
  } else {
    return (
      <div>
        <p>Yo What you wanna cook today ? </p>
      </div>
    );
  }
};

export default Recipe;
