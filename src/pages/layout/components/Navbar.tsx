import { Home2, I3Dcube, InfoCircle, Messenger, Notification, Profile2User, SearchNormal1, Setting2 } from "iconsax-react"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className="w-full flex justify-center h-[95px]">
            <div className="w-[96%] shadow-sm my-4 rounded-[90px] bg-[#F5F5F5]">
                <div className="grid p-3 grid-cols-12">
                    <div className="col-span-4">
                       <div className="flex items-center">
                            <div className="flex ml-2 justify-center items-center w-[38px] h-[38px] bg-gray-200 rounded-full">
                              <I3Dcube color="blue"/>
                            </div>
                            <div className="ml-8 bg-gray-200 p-2 rounded-full flex items-center">
                              <input placeholder="Search..." className="text-xs px-2 bg-transparent focus:outline-none" type="text"/>
                              <SearchNormal1 className="mr-2" size={18}/>
                            </div>

                       </div>
                    </div>
                    <div className="col-span-4 m-auto">
                        <div className="flex items-center">
                            <div className="flex ml-4 justify-center items-center w-[38px] h-[38px] border border-gray-300 rounded-full">
                              <Home2 size={20} color="blue"/>
                            </div>
                            <div className="flex ml-4 justify-center items-center w-[35px] h-[35px]  rounded-full">
                              <Messenger size={20} color="gray"/>
                            </div>
                            <div className="flex ml-4 justify-center items-center w-[35px] h-[35px]  rounded-full">
                              <Profile2User size={20} color="gray"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex justify-end items-center">
                            <div className="flex ml-4 justify-center items-center w-[35px] h-[35px] bg-gray-200 rounded-full">
                              <Notification size={20} color="gray"/>
                            </div>
                            <div className="flex ml-4 justify-center items-center w-[35px] h-[35px] bg-gray-200 rounded-full">
                              <InfoCircle size={20} color="gray"/>
                            </div>
                            <div className="flex ml-4 justify-center items-center w-[35px] h-[35px] bg-gray-200 rounded-full">
                              <Setting2 size={20} color="gray"/>
                            </div>
                            <div className="flex ml-4 justify-center items-center w-[40px] h-[40px] bg-gray-200 rounded-full">
                              {/* <Image src="https://dummyimage.com/40x35/350/fff" width={40} height={40} alt="Profile Image"/> */}
                              <img className="rounded-full" src="https://dummyimage.com/35x35/000/fff"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar