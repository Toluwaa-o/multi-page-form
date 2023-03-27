import { configureStore } from "@reduxjs/toolkit";
import planSlice from "./plan-slice";

const store = configureStore({
    reducer: {
        plan: planSlice.reducer
    }
})

export default store