import Switcher from "../../Hooks/Switcher"
const Header = () => {
  return (
  
      <nav className="flex justify-between items-center bg-white dark:text-zinc-300 dark:bg-slate-700 shadow-lg h-12 w-full mb-8 rounded-b-lg">
        <ul className="flex justify-between items-center gap-x-4">
          <li> دست نویس</li>
          <li>logo</li>
          <li>
          </li>
        </ul>
         <div className="ml-5">
         <Switcher/>
         </div>
      </nav>

  )
}

export default Header
