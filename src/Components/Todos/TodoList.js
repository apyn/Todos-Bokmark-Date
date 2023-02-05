import { BiHide, BiCheck } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'
import { RxDragHandleDots1 } from 'react-icons/rx'
const TodoList = () => {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-xl flex flex-col justify-center overflow-hidden ">
        {/* Header */}
      <div className="flex justify-between items-center  p-4 border-b-2 dark:text-zinc-300 border-indigo-900 dark:border-zinc-300 mt-1">
        <h1 className="text-indigo-900 dark:text-zinc-300 font-black text-2xl ">دست نویس</h1>
        <div className=" flex items-center justify-between dark:bg-slate-400 dark:text-zinc-600 bg-indigo-800 text-white font-bold text-xs rounded-lg px-2 py-1">
          <BiHide className="h-4 w-4 ml-1" />
          مخفی کردن
        </div>
      </div>
      {/* Todo */}
      <div className=" text-gray-500 dark:text-zinc-200 h-96 p-4">
        <div className="flex items-center justify-between border-b-2">
          <div className="flex justify-between items-center">
            <RxDragHandleDots1 className="w-5 h-4 fill-current" />
            <BiCheck className="h-6 w-6 " />
            <span className="text-sm font-bold "> متن تستی</span>
          </div>
          <div className="flex items-center justify-between ">
            <FiEdit2 />
            <BsTrash />
          </div>
        </div>
      </div>
        {/* add todo */}
      <div className='flex items-center justify-center mb-4 '>
        <from className="flex gap-x-1">
        <input type="text" className='bg-gray-200 dark:bg-slate-400 dark:text-slate-700 px-8 py-4 rounded-lg outline-none placeholder-slate-500 placeholder-opacity-50 placeholder:text-xs ' placeholder='عنوان کار جدید'/>
        <button type='submit' className='bg-indigo-800 dark:bg-slate-900 dark:text-zinc-300 text-indigo-300  text-2xl rounded-xl px-3 py-3'>+</button>
        </from>
      </div>
    </div>
  )
}

export default TodoList
