import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { postSlice } from "./reducers/post.reducer";

const store= configureStore({
    reducer: {
       post: postSlice.reducer
    }
 })

export default store

const {dispatch} = store

// types
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// dispatch function with types
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector