import axios from 'axios'
import { useEffect, useState } from 'react'
import {BiTimer} from "react-icons/bi"


const Date = () => {
  const [value, setValue] = useState()

  useEffect(() => {

   axios
     .get("https://api.keybit.ir/time/")
     .then((res) => 
       setValue(res.data)
     )
     .catch((err) => {
       console.log(err)
     })
   
  }, [])

  console.log(value)

  if (value == null) return <p>looding... </p>
  return (
    <div className="flex flex-col justify-between items-center  gap-4 container mx-auto ">
      <div className="grid grid-cols-2 w-full gap-2">
        <div className="bg-white dark:opacity-90 opacity-90  dark:bg-slate-700 dark:text-zinc-300 rounded-xl shadow-md  flex flex-col  items-center">
          <span className="text-gray-500 dark:text-zinc-300 text-xs mt-2 ">
            {value.timezone.name}
          </span>
          <span className="text-indigo-900 dark:text-zinc-300 text-3xl font-extrabold mt-6  ">
            {value.time24.hour.fa}:{value.time24.minute.fa}
          </span>
       <a href='https://www.bahesab.ir/time/timer' className='flex justify-between items-center gap-1 rounded-md mt-2 hover:bg-zinc-100 dark:hover:bg-zinc-400 p-1'>
       <BiTimer/>
       <span className='text-xs text-slate-800 font-bold dark:text-zinc-300'>زمان سنج</span>
       </a>
        </div>
        <div className="bg-white dark:opacity-90 opacity-90 dark:bg-slate-700 dark:text-zinc-300 rounded-xl shadow-md gap-x-2  flex justify-center items-center ">
              <div className="flex flex-col items-center justify-between  ">
          <span className="text-indigo-800 dark:text-zinc-300 text-lg font-extrabold ">
            {value.date.weekday.name}
          </span>
          <span className="text-indigo-800 dark:text-zinc-300 text-lg font-extrabold">
            {value.date.day.number.fa}
          </span>
          <span className="text-indigo-800 dark:text-zinc-300 text-lg font-extrabold">
            {value.date.month.name}
          </span>
        </div>
          <div className="flex flex-col items-end  gap-y-3">
          <span className="text-orange-700 dark:text-orange-200 text-xs ">
            {value.date.other.ghamari.usual.fa}
          </span>
          <span className="text-orange-700 text-xs dark:text-orange-200 ">
            {value.date.other.gregorian.usual.fa}
          </span>
          <span className="text-orange-700 text-xs dark:text-orange-200 ">
            {value.date.full.official.usual.fa}
          </span>
       
        </div>
             </div>
      </div>
      
    </div>
  )
}

export default Date
