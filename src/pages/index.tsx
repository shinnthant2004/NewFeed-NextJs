import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
     <Blog/>
     <div className="w-full border-b border-gray-300 my-3"/>
     <Blog/>
    </div>
  )
}
