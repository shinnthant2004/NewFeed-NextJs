import { EmojiHappy, Gallery, Menu, ProfileAdd, ProfileTick, ReceiptEdit } from "iconsax-react"

const ControlPanel = () => {
    return (
        <div className="w-full py-4 px-6 h-[215px] shadow-sm rounded-lg bg-[#F5F5F5]">
          <div className="flex items-center">
             <ReceiptEdit color="blue" size={20}/>
             <p className="ml-4 font-[600] text-gray-400 text-xs">Create post</p>
          </div>
          <div className="w-full relative py-[20px] pl-[65px] pr-[5px] my-5 h-[80px] rounded-lg border border-gray-300">
            <img className="absolute left-[15px] top-[14px] rounded-full" src="https://dummyimage.com/35x35/fff/000"/>
            <textarea placeholder="What's on your mind, Sadbin?" className="w-full :placeholder:text-xs h-full bg-transparent text-sm focus:outline-none"/>
          </div>
          <div className="flex justify-between items-center">
             <div className="flex items-center ">
                <div className="flex w-[120px] h-[42px] rounded-full bg-blue-100 items-center">
                    <div className="ml-2 w-[30px] h-[30px] rounded-full bg-blue-600 flex justify-center items-center">
                        <Gallery variant="Bold" color="white" size={20}/>
                    </div>
                    <p className="ml-3 text-xs font-[500] text-gray-600">Gallery</p>
                  </div>
                  <div className="flex ml-5  w-[120px] h-[42px] rounded-full bg-red-100 items-center">
                    <div className="ml-2 w-[30px] h-[30px] rounded-full bg-red-500 flex justify-center items-center">
                        <ProfileTick variant="Bold" color="white" size={20}/>
                    </div>
                    <p className="ml-3 text-xs font-[500] text-gray-600">Tag Friends</p>
                  </div>
                  <div className="flex  ml-5 w-[120px] h-[42px] rounded-full bg-yellow-100 items-center">
                    <div className="ml-2 w-[30px] h-[30px] rounded-full bg-yellow-400 flex justify-center items-center">
                        <EmojiHappy variant="Bold" color="white" size={20}/>
                    </div>
                    <p className="ml-3 text-xs font-[500] text-gray-600">Gallery</p>
                  </div>
             </div>
             <div className="ml-2 w-[30px] h-[30px] rounded-full bg-gray-300 flex justify-center items-center">
                <Menu variant="Outline" color="white" size={20}/>
             </div>
          </div>
        </div>
    )
}

export default ControlPanel