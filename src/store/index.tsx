import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./reducers/post.reducer";

const store= configureStore({
    reducer: {
       post: postSlice.reducer
    }
 })

export default store