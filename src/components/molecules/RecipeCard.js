import React from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  const { image, name, url } = props;
  return (
    <Link to={`/detail/${url}`}>
      <div className="clickable-image mb-4">
        <img 
          src={image || "./images/home/recipe-1.jpg"}
          height="100%"
          width="100%"
          alt={image}

          className="placeholder-glow img-recipe"
        />
        <h2 className="image-title text-black">
          {name || "Unknown"}
        </h2>
      </div>
    </Link>
  );
}

export default RecipeCard;