import ControlPanel from "./components/ControlPanel"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import UtilBar from "./components/UtilBar"

interface Props {
    children: JSX.Element
}

const Layout = (props:Props) => {
    return (
        <div className="w-screen h-screen">
            <Navbar/>
            <div className="grid w-full h-[85%] px-6 grid-cols-12 gap-4">
            <div className="col-span-3">
               <SideBar/>
            </div>
            <div className="col-span-6 overflow-scroll">
               <ControlPanel/>
               <div className="w-full mt-5 p-4 h-full shadow-sm rounded-lg bg-[#F5F5F5]">
                 {props.children}
               </div>
            </div>
            <div className="col-span-3">
               <UtilBar/>
            </div>
         </div>
        </div>
    )
}

export default Layout