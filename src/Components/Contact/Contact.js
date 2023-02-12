import { Fragment, useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Dialog, Transition } from '@headlessui/react'
import { BsTrash } from 'react-icons/bs'

import { HiOutlineUserCircle } from 'react-icons/hi';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState({ name: '', tel: '' })
const [phone,setPhone]=useState([])
const [searchItem,setSearchItem]=useState("")
const [allContaxt,setAllContact]=useState(null)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const changeHandler = (e) => {
    setText({ ...text, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const newphone = {
      id: Math.floor(Math.random() * 100),
      name: text.name,
      tel: text.tel,
    }
    console.log(newphone);
    setPhone([...phone, newphone])
    localStorage.setItem('Phone', JSON.stringify([...phone, newphone]))

    setText({ name: '', tel: '' })
    closeModal()
  }

  useEffect(() => {

    // seachefunction(search)
    const storage = JSON.parse(localStorage.getItem('Phone')) || []
    setPhone(storage)
    setAllContact(storage)
  }, [])

  const deleteHandler = (id) => {
    const filterd = phone.filter((item) => item.id !== id)
    setPhone(filterd)
    localStorage.setItem('Phone', JSON.stringify(filterd))
  }
const searchHandler =(e)=>{
  setSearchItem(e.target.value)
  const search = e.target.value
 if(search !== ""){
  const filterdPhone=allContaxt.filter((p)=>{
    return Object.values(p).join(" ").toLowerCase().includes(search.toLowerCase())
  })
  setPhone(filterdPhone)
 }else{
  setPhone(allContaxt)
 }
 }            
          


            
 
  return (
    <div className="bg-white w-full dark:bg-slate-700 dark:text-zinc-300 rounded-lg shadow-md  max-h-96 overflow-y-auto h-96 p-2 mt-4">
    <div className="overflow-hidden">
      <div className="flex items-center justify-between mt-2 px-2 ">
        <h1 className="text-indigo-900 dark:text-zinc-300 font-black">
          دفترچه تلفن
        </h1>
        <button className=' dark:bg-slate-800 bg-indigo-900 text-white font-bold text-xs rounded-lg px-2 py-1.5' onClick={() => setIsOpen(!isOpen)}>
         اضافه کردن شماره
          </button>
          <>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="justify-center items-center md:max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-sm text-center font-medium leading-6 text-gray-900"
                        >
                          اضافه کردن شماره تلفن جدید
                        </Dialog.Title>
                        <form
                          onSubmit={submitHandler}
                          className="mt-2 flex flex-col gap-y-2"
                        >
                          <label className="mb-2 text-sm text-slate-700 flex items-start">
                نام و نام خانوادگی
                          </label>
                          <input
                            value={text.name}
                            onChange={changeHandler}
                            name="name"
                            type="text"
                            className="outline-none rounded-md w-full bg-gray-100 px-4 py-1 "
                          />
                          <label className="text-sm ml-2 flex items-start text-slate-700">
                            شماره تماس
                          </label>
                          <input
                            value={text.tel}
                            onChange={changeHandler}
                            name="tel"
                            type="text"
                            className="outline-none rounded-md  w-full bg-gray-100 px-4 py-1 "
                          />
                          <div className="mt-4 flex gap-x-4 justify-end">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-900 px-4 py-2 text-sm font-medium text-white focus:outline-none "
                            >
                              افزودن
                            </button>
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              انصراف
                            </button>
                          </div>
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
   
      </div>
      <div className="flex  relative items-center p-2  ">
        <BiSearch className="h-5 w-5 absolute mr-2 text-indigo-900 dark:text-slate-900" />
        <input
        value={searchItem}
        onChange={searchHandler}
          type="text"
          placeholder='جستجو نام و شماره تلفن'
          className="rounded-md outline-none text-center text-xs w-full  dark:text-slate-900 bg-indigo-100 text-indigo-900 dark:bg-zinc-400 "
        />
      </div>
      <div className="flex flex-col justify-between items-center  w-full overflow-y-auto ">
      
        <div className="flex flex-col  w-full p-2 ">
          {phone.map((p) => {
            return (
              <div className='flex  justify-between items-center    px-4 py-2 border-b-2 '>
                
               <div className='flex justify-center items-center'>
               <HiOutlineUserCircle className='h-8 w-8  stroke-slate-700 ml-2 dark:stroke-zinc-300'/>
                <div className='flex flex-col  justify-start '>
                <div className='flex gap-x-4 items-center  '>
                  <div className='text-xs'>نام :</div>
                <div className="text-sm  dark:text-zinc-300 font-bold text-slate-800">{p.name} </div>
                </div>
                <div className='flex gap-x-1  items-center '>
                  <span className='text-xs'>شماره :</span>
                <span className=" text-sm text-right dark:text-zinc-300 text-slate-600">{p.tel} </span>
                </div>
                </div>
               </div>
          
              <BsTrash onClick={()=>deleteHandler(p.id)} className="cursor-pointer  hover:fill-red-600" />
              </div>
              
            )
          })}
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default Contact
