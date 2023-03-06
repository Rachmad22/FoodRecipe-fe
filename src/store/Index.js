import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe";

const Store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});

export default Store;