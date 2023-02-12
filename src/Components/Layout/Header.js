import Switcher from "../../Hooks/Switcher"
import {AiOutlineGithub,AiFillLinkedin}from "react-icons/ai"
import pyn from "../../Assets/Image/pyn.png"
import { Link } from "react-router-dom"
const Header = () => {
  return (
  
      <nav className="flex justify-between items-center container mx-auto p-2 dark:opacity-90  dark:text-zinc-300  h-12 w-full mb-4">
        <ul className="flex justify-between items-center gap-x-4 ">
       <div className="text-indigo-50 w-20 ">
        <img className="w-full h-auto" src={pyn}/>
         </div>   
      <Link to="https://www.linkedin.com/in/apyn">
        <AiFillLinkedin className="w-6 h-6 fill-white "/>
        </Link> 
      <Link to="https://github.com/apyn"> <AiOutlineGithub className="w-6 h-6 fill-white "/>  </Link>   
        </ul>
         <div className="ml-5">      
            <Switcher/>
         </div>
      </nav>

  )
}

export default Header
