import axios from 'axios'
import { useEffect, useState } from 'react'
import {BsFillSunFill} from "react-icons/bs"
import {BiTimer} from "react-icons/bi"
import {TiWeatherPartlySunny} from "react-icons/ti"

const Time = () => {
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
    <div className="flex flex-col justify-between items-center  gap-4 ">
      <div className="flex justify-between items-center gap-2">
        <div className="bg-white dark:bg-slate-700 dark:text-zinc-300 rounded-xl shadow-md md:w-32 md:h-32 w-48 h-32 flex flex-col  items-center">
          <span className="text-gray-500 dark:text-zinc-300 text-xs mt-2 ">
            {value.timezone.name}
          </span>
          <span className="text-indigo-900 dark:text-zinc-300 text-3xl font-extrabold mt-6 ">
            {value.time24.hour.fa}:{value.time24.minute.fa}
          </span>
       <a href='https://www.bahesab.ir/time/timer' className='flex justify-between items-center gap-1 rounded-md mt-2 hover:bg-zinc-100 dark:hover:bg-zinc-400 p-1'>
       <BiTimer/>
       <span className='text-xs text-slate-800 font-bold dark:text-zinc-300 '>زمان سنج</span>
       </a>
        </div>
        <div className="bg-white dark:bg-slate-700 dark:text-zinc-300 rounded-xl shadow-md md:w-32 md:h-32 w-48 h-32 flex flex-col justify-center items-center gap-3">
            <BsFillSunFill className='h-6 w-6 fill-amber-500 text-center'/>
            <span className='text-indigo-800 dark:text-zinc-300 font-bold text-lg'>{value.season.name}</span>
            <a href='https://weather.com/fa-IR/weather/today' className='flex justify-between items-center gap-1 rounded-md  hover:bg-zinc-100 dark:hover:bg-zinc-400 p-1'>
       <TiWeatherPartlySunny/>
       <span className='text-xs text-slate-800 dark:text-zinc-300 '>پیش بینی کامل</span>
       </a>
             </div>
      </div>
      <div className="bg-white dark:bg-slate-700  rounded-xl shadow-md w-64 p-2 flex gap-x-4">
        <div className="flex flex-col justify-center items-center gap-1 p-2">
          <span className="text-indigo-800 dark:text-zinc-300 text-base">
            {value.date.weekday.name}
          </span>
          <span className="text-indigo-800 dark:text-zinc-300 text-3xl font-extrabold">
            {value.date.day.number.fa}
          </span>
          <span className="text-indigo-800 dark:text-zinc-300 text-base font-bold">
            {value.date.month.name}
          </span>
        </div>
        <div className="flex flex-col  items-start p-2 gap-2">
          <span className="text-orange-700 dark:text-orange-200 text-xs ">
            {value.date.other.ghamari.usual.fa}
          </span>
          <span className="text-orange-700 text-xs dark:text-orange-200 ">
            {value.date.other.gregorian.usual.fa}
          </span>
          <span className="text-orange-700 text-xs dark:text-orange-200 ">
            {value.date.full.official.usual.fa}
          </span>
        <div className='text-indigo-900 text-sm text-center font-bold dark:text-zinc-300'>{value.date.day.events.local?.text}</div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-700 dark:text-zinc-300 rounded-lg shadow-md w-64 h-64">
        <div>تاریخ هفته ای</div>
      </div>
    </div>
  )
}

export default Time
