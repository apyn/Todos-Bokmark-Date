import {BiSearch} from "react-icons/bi"
import { Link, NavLink } from "react-router-dom";
const LinkComponenet = () => {
    return ( 
        <div className="flex flex-col ">
            <div className="flex justify-between items-center bg-white dark:bg-slate-700 rounded-xl shadow-lg px-2 py-4 gap-x-2">
                <input type="text" className="rounded-3xl w-full outline-none text-center dark:bg-gray-400 bg-gray-200 py-2" >
                </input>
                    <BiSearch className="h-6 w-6 absolute mr-2"/>
                <button className="bg-indigo-900 dark:bg-slate-800 dark:text-zinc-200 text-white text-base font-bold rounded-3xl px-4 py-2">جستجو</button>
            </div>
            <div className="flex justify-between items-center p-2">
       
            <a className=" cursor-pointer w-20 h-20 bg-white hover:bg-gray-100 dark:bg-slate-700 dark:text-zinc-300 rounded-2xl shadow-lg flex items-center justify-center font-bold">
                +
            </a>
            
        
            </div>
        </div>
     );
}
 
export default LinkComponenet;