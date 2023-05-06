import { RootState, useAppDispatch, useAppSelector } from "@/store"
import { addPostsList, getAllPosts } from "@/store/reducers/post.reducer"
import { Alarm, ArrowCircleRight, ProfileTick, ReceiptEdit, TheGraph } from "iconsax-react"
import { useRef, useState } from "react"

const ControlPanel = () => {
    // instances
    const dispatch = useAppDispatch()
    const {posts} = useAppSelector((state:RootState)=>state.post.value)

    // local state
    const textField = useRef(null)

    const [category,setCategory] = useState<"foods" | "friends" | "sports">("friends")

    const handleSubmit = () => {
      fetch('/api/posts',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res)=> res.json()).then((data)=>{
      // dispatch(getAllPosts())      
    })
    }

    return (
        <div className="w-full py-4 px-6 h-[215px] shadow-sm rounded-lg bg-[#F5F5F5]">
          <div className="flex items-center">
             <ReceiptEdit color="blue" size={20}/>
             <p className="ml-4 font-[600] text-gray-400 text-xs">Create post</p>
          </div>
          <div className="w-full relative py-[20px] pl-[65px] pr-[5px] my-5 h-[80px] rounded-lg border border-gray-300">
            <img className="absolute left-[15px] top-[14px] rounded-full" src="https://dummyimage.com/35x35/fff/000"/>
            <textarea ref={textField} placeholder="What's on your mind, Sadbin?" className="w-full :placeholder:text-xs h-full bg-transparent text-sm focus:outline-none"/>
          </div>
          <div className="flex justify-between items-center">
             <div className="flex items-center ">
                  <div onClick={()=>{
                   setCategory("foods")
                  }} className={`flex w-[120px] h-[42px] rounded-full ${category === "foods" ? "bg-blue-500" : "bg-blue-100"}  items-center`}>
                    <div className={`ml-2 w-[30px] h-[30px] rounded-full ${category === "foods" ? "bg-white" : "bg-blue-500"} flex justify-center items-center`}>
                        <Alarm variant="Bold" color={`${category === "foods" ? "blue" : "white"}`} size={18}/>
                    </div>
                    <p className={`ml-3 text-xs font-[500] ${category === "foods" ? "text-white" : "text-gray-600"}`}>Foods</p>
                  </div>
                  <div onClick={()=>{
                  setCategory("friends")
                 }} className={`flex ml-5  w-[120px] h-[42px] rounded-full ${category === "friends" ? "bg-red-500" : "bg-red-100"}  items-center`}>
                    <div className={`ml-2 w-[30px] h-[30px] rounded-full ${category === "friends" ? "bg-white" : "bg-red-500"} flex justify-center items-center`}>
                        <ProfileTick variant="Bold" color={`${category === "friends" ? "red" : "white"}`} size={20}/>
                    </div>
                    <p className={`ml-3 text-xs font-[500] ${category === "friends" ? "text-white" : "text-gray-600"}`}>Friends</p>
                  </div>
                  <div onClick={()=>{
                  setCategory("sports")
                 }} className={`flex  ml-5 w-[120px] h-[42px] rounded-full  ${category === "sports" ? "bg-yellow-500" : "bg-yellow-100"} items-center`}>
                    <div className={`ml-2 w-[30px] h-[30px] rounded-full ${category === "sports" ? "bg-white" : "bg-yellow-400"} flex justify-center items-center`}>
                        <TheGraph variant="Bold" color={`${category === "sports" ? "yellow" : "white"}`} size={20}/>
                    </div>
                    <p className={`ml-3 text-xs font-[500] ${category === "sports" ? "text-white" : "text-gray-600"}`}>Sports</p>
                  </div>
             </div>
             <div className="ml-2 w-full flex justify-end">
                <button className="rounded-full bg-blue-500 flex justify-center items-center w-[90px] h-[30px] " onClick={handleSubmit}>
                    <p className="text-[13px] text-white font-[500]">Post</p>
                    <ArrowCircleRight className="ml-2" variant="Outline" color="white" size={18}/>
                </button>
             </div>
          </div>
        </div>
    )
}

export default ControlPanel