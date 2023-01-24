import React from "react";

const Recipe = ({ title, calories, image, ingredients, healthLabels }) => {
  if (title) {
    return (
      <div>
        <div className="card mb-3 recipe-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image} className="card-img" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {healthLabels.map(label => (
                    <li>{label}</li>
                  ))}
                </p>
                <p className="card-text">
                  <small className="text-muted">Calories {calories}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
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