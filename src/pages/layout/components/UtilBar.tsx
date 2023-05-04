import { ArchiveBook, Setting, Setting2, Setting3, Setting4 } from "iconsax-react"

const UtilBar = () => {
    return (
        <div className="w-full">
           <div className="flex justify-between items-center shadow-sm p-4  rounded-lg bg-[#F5F5F5]">
                 <div className="flex w-[150px] h-[42px] rounded-full bg-blue-100 items-center">
                    <div className="ml-2 w-[30px] h-[30px] rounded-full bg-blue-600 flex justify-center items-center">
                        <ArchiveBook variant="Bold" color="white" size={20}/>
                    </div>
                    <p className="ml-3 text-xs font-[500] text-gray-600">Your Pages(1)</p>
                  </div>
                <Setting4 className="mr-2" color="gray" size={18}/>
           </div>

           <div className="w-full  mt-4 shadow-sm p-4  rounded-lg bg-[#F5F5F5]">
             <div className="w-full flex justify-between items-center">
                <p className="text-xs font-[600] text-gray-400">Suggested groups</p>
                <div className="flex w-[80px] h-[28px] rounded-full bg-blue-100 items-center">
                    <p className="ml-3 text-[11px] text-blue-600 font-[600] text-gray-600">See More</p>
                </div>
             </div>
             <div className="relative my-4">
                <img className="w-full object-cover rounded-xl h-[125px]" src="https://i.pinimg.com/564x/d9/9e/ae/d99eae997aa07f7a86a07d6160657aa2.jpg"/>
                <div className="absolute px-1 bottom-[0px] right-[0px] flex justify-center w-[90px] h-[28px] rounded-xl bg-blue-600 items-center">
                  <p className="text-[11px] font-[500] text-white text-gray-600">+ Join group</p>
                </div>
             </div>
             <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-[600]">Anthony Douglas</p>
                  <p className="mt-1 text-xs text-gray-500 font-[500]">35 friends | 1.5k members</p>
                </div>
                <div className="flex -space-x-1 overflow-hidden">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
             </div>
           </div>

           <div className="w-full  mt-4 shadow-sm p-4  rounded-lg bg-[#F5F5F5]">
             <div className="w-full flex justify-between items-center">
                <p className="text-xs font-[600] text-gray-400">Suggested groups</p>
                <div className="flex w-[80px] h-[28px] rounded-full bg-blue-100 items-center">
                    <p className="ml-3 text-[11px] text-blue-600 font-[600] text-gray-600">See More</p>
                </div>
             </div>
             <div className="relative my-4">
                <img className="w-full object-cover rounded-xl h-[125px]" src="https://i.pinimg.com/736x/39/87/a3/3987a3dc5127cd6d0a8e805cfc45066c.jpg"/>
                <div className="absolute px-1 bottom-[0px] right-[0px] flex justify-center w-[90px] h-[28px] rounded-xl bg-blue-600 items-center">
                  <p className="text-[11px] font-[500] text-white text-gray-600">+ Join group</p>
                </div>
             </div>
             <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-[600]">Shinn Thant</p>
                  <p className="mt-1 text-xs text-gray-500 font-[500]">20 friends | 12.5k members</p>
                </div>
                <div className="flex -space-x-1 overflow-hidden">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
             </div>
           </div>
        </div>
    )
}

export default UtilBar 