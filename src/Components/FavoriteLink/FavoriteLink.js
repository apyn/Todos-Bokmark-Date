import { BiSearch } from 'react-icons/bi'
import {
  Link,

  useNavigate,

} from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'


const FavoriteLink = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState({ link: '', title: '' })
  const [link, setlink] = useState([])
  const [search, setSearch] = useState('')
  const navi = useNavigate()

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
    const NewLink = {
      id: Math.floor(Math.random() * 100),
      link: text.link,
      title: text.title,
    }
    setlink([...link, NewLink])

    localStorage.setItem('link', JSON.stringify([...link, NewLink]))

    setText({ title: '', link: '' })
    closeModal()
  }
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('link')) || []
    setlink(storage)
  }, [])
  const deleteHandler = (id) => {
    const filterd = link.filter((item) => item.id !== id)
    setlink(filterd)
    localStorage.setItem('link', JSON.stringify(filterd))
  }
  const searchHander = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="flex flex-col  container mx-auto ">
      <div className="hidden md:flex relative justify-between items-center dark:opacity-90 opacity-90 bg-white dark:bg-slate-700 rounded-xl shadow-lg px-2 py-4 gap-x-2">
        <input
          onChange={searchHander}
          value={search}
          type="text"
          placeholder='جستجو در گوگل .....'
          className="rounded-3xl w-full outline-none text-center placeholder:text-sm dark:placeholder:text-zinc-300 dark:bg-gray-400 bg-gray-100 py-2 ring-0"
        >
        </input>
          <FcGoogle className='absolute h-6 w-6 left-28'/>
        <BiSearch className="h-6 w-6 absolute mr-2" />
        <Link
          to={`https://www.google.com/search?q=${search}`}
          replace
          className="bg-indigo-900 dark:opacity-90 opacity-90 dark:bg-slate-800 dark:text-zinc-200 text-white text-base font-bold rounded-3xl px-4 py-2"
        >
          جستجو
        </Link>
      </div>
      <div className="flex justify-between items-center p-2">
        <div
         
          className=" flex items-center justify-start "
        >
         <button className='p-2  bg-indigo-900  text-white rounded-lg shadow-md  dark:bg-slate-700 dark:text-zinc-300  ' onClick={() => setIsOpen(!isOpen)} >  افزودن لینک </button>
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
                          اضافه کردن لینک جدید
                        </Dialog.Title>
                        <form
                          onSubmit={submitHandler}
                          className="mt-2 flex flex-col gap-y-2"
                        >
                          <label className="mb-2 text-sm text-slate-700 flex items-start">
                            آدرس اینترنتی
                          </label>
                          <input
                            value={text.link}
                            onChange={changeHandler}
                            name="link"
                            type="text"
                            className="outline-none rounded-md w-full bg-gray-100 px-4 py-1 "
                          />
                          <label className="text-sm ml-2 flex items-start text-slate-700">
                            عنوان{' '}
                          </label>
                          <input
                            value={text.title}
                            onChange={changeHandler}
                            name="title"
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
      </div>
      <div className=" grid rounded-md grid-cols-4 md:grid-cols-7 gap-2 p-2 ">
        {link.map((item) => {
          return (
            <div className="relative">
              <a
                href={item.link}
                target="_blank"
                className=" flex items-center justify-center cursor-pointer w-20 h-20 bg-white hover:bg-gray-100 dark:bg-slate-700 dark:opacity-90 opacity-90 dark:text-zinc-300 rounded-2xl shadow-lg  font-bold"
              >
                {item.title}
              </a>
              <BsTrash
                onClick={() => deleteHandler(item.id)}
                className=" opacity-0 hover:opacity-100 text-gray-200 w-3 h-3 cursor-pointer absolute top-1 left-2 hover:fill-red-600"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FavoriteLink
