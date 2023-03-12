// eslint-disable-next-line
import React from "react";
import axios from "axios";
import * as recipeReducer from "../../store/recipe/Index";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function RecipeCard(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { photo, name, url } = props;
  return (
    <>
      <div className="clickable-image mb-4" onClick={() => {
        axios
          .get(`${process.env.REACT_APP_URL_BACKEND}/recipes/${url}`)
          .then(({ data }) => {
            dispatch(
              recipeReducer.setDetail({
                data: data?.data?.[0],
                slug: url,
              })
            );
            navigate(`/detail/${url}`);
            window.scrollTo(0,0)
          });
      }}>
        <img
          src={photo || "./images/home/recipe-1.jpg"}
          height="100%"
          width="100%"
          alt={name}

          className="img-recipe"
        />
        <h2 className="image-title text-black">
          {name || "Unknown"}
        </h2>
      </div>
    </>
  );
}

export default RecipeCard;
