import { IPost } from "@/types/post";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dispatch } from "..";

interface IPostInitialState {
    value : {
        loading : boolean,
        hasError:  Error | null,
        posts: IPost[]
    }
}

const initialState:IPostInitialState = {
    value:{
        loading: false,
        hasError: null,
        posts: []
    }
}

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
      setLoading: (state) => {
        state.value = {
            ...state.value,
            loading:true
        }
      },
      hasError: (state,action:PayloadAction<Error>) => {
        state.value = {
            ...state.value,
            hasError:action.payload,
            loading:false
        }
      },
      addPostsList: (state,action:PayloadAction<IPost[]>) => {
         state.value = {
            ...state.value,
            posts: action.payload
         }
      }
    }
})

export const {addPostsList,setLoading,hasError} = postSlice.actions

export default postSlice.reducer

export const getAllPosts = () => {
    return async () => {
        dispatch(postSlice.actions.setLoading())
        fetch('/api/posts').then((res)=>res.json()).then((data)=>{
            dispatch(addPostsList(data))
        }).catch(err => {
            dispatch(postSlice.actions.hasError(err))
        })
    }
}