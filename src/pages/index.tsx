import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { getAllPosts } from "@/store/reducers/post.reducer";
import { useEffect, useState } from "react";
import Blog from "./components/Blog";

export default function Home() {

  const {posts} = useAppSelector((state:RootState)=>state.post.value)

  return (
    <div>
     {/* {
      posts?.map((item)=>{
        return (
          <div key={item._id}>
            <p>{item.text}</p>
          </div>
        )
      })
     } */}
    </div>
  )
}
