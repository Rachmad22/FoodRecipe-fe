// eslint-disable-next-line
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe/Index";

const Store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});

export default Store;