import { Award, Messenger, ReceiptItem, UserSquare } from "iconsax-react"

const SideBar = () => {
    return (
        <div className="w-full h-[90%]">
            <div className="h-[270px] p-2 shadow-sm rounded-lg bg-[#F5F5F5]">
                <p className="text-[12px] pl-3 pt-2 text-gray-500 font-[500]">Action Buttons</p>
                <div className="mt-4 rounded-full p-[6px] flex items-center bg-gray-200">
                    <img className="w-[35px] h-[35px] rounded-full" src="https://dummyimage.com/35x35/fff/000"/>
                    <p className="text-[13px] font-[400] ml-3 text-gray-500">Shinn Thant</p>
                </div>
                <div className="mt-2 rounded-full p-[6px] flex items-center">
                    <div className="flex justify-center items-center w-[33px] h-[33px] rounded-full bg-blue-600">
                        <Messenger color="white" size={20}/>
                    </div>
                    <p className="text-[13px] font-[400] ml-3 text-gray-500">Messenger</p>
                </div>
                <div className="mt-2 rounded-full p-[6px] flex items-center">
                    <div className="flex justify-center items-center w-[33px] h-[33px] rounded-full bg-yellow-400">
                        <ReceiptItem color="white" size={20}/>
                    </div>
                    <p className="text-[13px] font-[400] ml-3 text-gray-500">News Feed</p>
                </div>
                <div className="mt-2 rounded-full p-[6px] flex items-center">
                    <div className="flex justify-center items-center w-[33px] h-[33px] rounded-full bg-red-400">
                        <UserSquare color="white" size={20}/>
                    </div>
                    <p className="text-[13px] font-[400] ml-3 text-gray-500">Watch Live</p>
                </div>
            </div>
            <div className="h-[200px] mt-5 p-2 shadow-sm rounded-lg bg-[#F5F5F5]">
                <p className="text-[12px] pl-3 pt-2 text-gray-500 font-[500]">Shortcuts</p>
                <div className="mt-2 grid grid-cols-12 rounded-full p-[6px]">
                    <div className="col-span-2 flex justify-center items-center w-[33px] h-[33px] rounded-full">
                        <Award color="blue" size={27}/>
                    </div>
                    <p className="col-span-7 mt-[6px] text-[13px] font-[400] ml-3 text-gray-500">UIUX designer</p>

                    <div className="col-span-3 mt-[6px] flex justify-end">
                      <div className="ml-[8px] flex justify-center items-center w-[18px] h-[18px] rounded-full bg-red-600">
                        <p className="text-[11px] font-bold text-white">2</p>
                      </div>
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-12 rounded-full p-[6px]">
                    <div className="col-span-2 flex justify-center items-center w-[33px] h-[33px] rounded-full">
                        <Award color="yellow" size={27}/>
                    </div>
                    <p className="col-span-7 mt-[6px] text-[13px] font-[400] ml-3 text-gray-500">New Feeds</p>
                </div>
                <div className="mt-2 grid grid-cols-12 rounded-full p-[6px]">
                    <div className="col-span-2 flex justify-center items-center w-[33px] h-[33px] rounded-full">
                        <Award color="red" size={27}/>
                    </div>
                    <p className="col-span-7 mt-[6px] text-[13px] font-[400] ml-3 text-gray-500">Watch Live</p>

                    <div className="col-span-3 mt-[6px] flex justify-end">
                      <div className="ml-[8px] flex justify-center items-center w-[18px] h-[18px] rounded-full bg-red-600">
                        <p className="text-[11px] font-bold text-white">7</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar