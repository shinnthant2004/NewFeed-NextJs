import { ArrowForward, Heart, Like1, Setting4 } from "iconsax-react"

const Blog = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex w-[150px] h-[42px] rounded-full items-center">
                <div className="ml-2 w-[35px] h-[35px] rounded-full flex justify-center items-center">
                    <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                </div>
                <div>
                    <p className="ml-3 text-[13px] font-[600] text-gray-600">Shinn Thant</p>
                    <p className="ml-3 text-xs font-[500] text-gray-400">2 hours ago</p>
                </div>
                </div>
            <Setting4 className="mr-2" color="gray" size={18}/>
            </div>
            <div className="w-[500px] mt-5 mb-3">
               <p className="text-xs font-[500] text-gray-400 leading-[25px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut temporibus aliquid excepturi adipisci odio quis. Fugit ipsa possimus, quam accusantium vero sint et repellat, reprehenderit nam autem quisquam, nostrum nisi.<span className="ml-3 text-xs font-[500] text-blue-600">See More</span></p>
            </div>
            <div className="flex justify-around items-center">
                <img className="w-[225px] rounded-2xl object-cover h-[240px]" src="https://i.pinimg.com/564x/ce/ae/a7/ceaea7a53009ed0344f5b03c3af83abe.jpg"/>
                <img className="w-[225px] rounded-2xl object-cover h-[240px]"  src="https://i.pinimg.com/736x/ab/dd/15/abdd1523281087883d0fec95a22b9cf9.jpg"/>
                <img className="w-[225px] rounded-2xl object-cover h-[240px]"  src="https://i.pinimg.com/736x/c4/f6/87/c4f687b6762c36006b9fbcee1d3cd4a0.jpg"/>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex h-[42px] rounded-full items-center">
                        <div className="ml-2 flex items-center">
                            <div className="flex justify-center items-center w-[20px] h-[20px] rounded-full bg-blue-500">
                              <Like1 color="white" variant="Bold" size={14}/>
                            </div>
                            <div className="ml-[1px] flex justify-center items-center w-[20px] h-[20px] rounded-full bg-red-500">
                              <Heart color="white" variant="Bold" size={14}/>
                            </div>
                            <p className="ml-2 text-[13px] font-[500] text-gray-400">324</p>
                        </div>
                        <p className="ml-3 text-xs font-[600] text-gray-600">11 comments</p>
                </div>
                <div className="flex items-center">
                <ArrowForward className="mr-2" color="gray" size={18}/>
                 <p className="text-xs font-[500] text-gray-600">Share</p>
                </div>
            </div>
        </div>
    )
}

export default Blog