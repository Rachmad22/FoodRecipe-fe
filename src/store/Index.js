import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe";

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});

export default store;