// eslint-disable-next-line
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe/index";

const Store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});

export default Store;