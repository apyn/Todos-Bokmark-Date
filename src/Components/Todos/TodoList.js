import { useEffect, useState } from 'react'
import { BiHide } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'
import { RxDragHandleDots1 } from 'react-icons/rx'
const TodoList = () => {

  const [value, setValue] = useState()
  const [todo, setTodo] = useState([])
  const [hide,setHide]=useState(false)
  const competetHandler = (id) => {
    const index = todo.findIndex((item) => item.id === id)
    const selectedtodo = { ...todo[index] }
    selectedtodo.iscompleted = !selectedtodo.iscompleted
    const updatettodo = [...todo]
    updatettodo[index] = selectedtodo
    setTodo(updatettodo)
  }
  const deleteHandler =(id)=>{
    const filterd =todo.filter((item)=> item.id !==id)
    setTodo(filterd)
    localStorage.setItem("todos",JSON.stringify(filterd))
  }

  const changeHandler = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(value)
    const NewTodo = {
      id: Math.floor(Math.random() * 100),
      text: value,
      iscompleted: false,
    }
    setTodo([...todo, NewTodo])
 
    localStorage.setItem("todos",JSON.stringify([...todo, NewTodo]))

    setValue("")
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('todos')) || []
    setTodo(storage)
}, [])
  return (
    <div className={hide ? " blur-sm bg-white dark:bg-slate-700 rounded-2xl shadow-xl flex flex-col justify-center overflow-hidden" :"bg-white dark:bg-slate-700 rounded-2xl shadow-xl flex flex-col justify-center overflow-hidden "}>
      {/* Header */}
      <div className="flex justify-between items-center  p-4 border-b-2 dark:text-zinc-300 border-indigo-900 dark:border-zinc-300 mt-1">
        <h1 className="text-indigo-900 dark:text-zinc-300 font-black text-2xl ">
          دست نویس
        </h1>
        <div onClick={()=>setHide(!hide)}   className=" cursor-pointer flex items-center justify-between dark:bg-slate-400 dark:text-zinc-300 bg-indigo-800 text-white font-bold text-xs rounded-lg px-2 py-2">
          <BiHide   className="h-4 w-4 ml-1 " />
          مخفی کردن
        </div>
      </div>
      {/* Todo */}
      <div className="text-gray-500 dark:text-zinc-200 h-96 p-4 overflow-y-auto ">
        {todo.map((t) => {
          return (
            <div className="flex items-center justify-between py-1  hover:bg-gray-100 dark:hover:bg-zinc-400 border-b-2">
              <div className="flex justify-between items-center gap-x-1  ">
                <RxDragHandleDots1 className="w-5 h-4 fill-current" />
                <input
                  onChange={() => competetHandler(t.id)}
                  type="checkbox"
                  className={t.iscompleted ? "text-blue-200 outline-none focus:ring-gray-100 rounded" : "form-checkbox ml-1 rounded"}
                  checked={t.iscompleted}
                />
                <span className={t.iscompleted ? "line-through text-slate-400" : "text-sm  text-slate-700 font-bold"}> {t.text} </span>
              </div>
              <div className="flex items-center justify-between gap-x-3 ">
                <BsTrash onClick={()=>deleteHandler(t.id)} className="cursor-pointer hover:fill-red-600" />
              </div>
            </div>
          )
        })}
      </div>
      {/* add todo */}
      <div className="flex items-center justify-center mb-4 ">
        <form onSubmit={submitHandler} className="flex gap-x-1">
          <input
            type="text"
            value={value}
            onChange={changeHandler}
            className="bg-gray-200 dark:bg-slate-400 dark:text-slate-700 px-8 py-4 rounded-lg outline-none placeholder-slate-500 placeholder-opacity-50 placeholder:text-xs "
            placeholder="عنوان کار جدید"
          />
  
          <button
            type="submit"
            className="bg-indigo-800 dark:bg-slate-900 dark:text-zinc-300 text-indigo-300  text-2xl rounded-xl px-3 py-3"
          >
            +
          </button>
        </form>
      </div>
    </div>
  )
}

export default TodoList
