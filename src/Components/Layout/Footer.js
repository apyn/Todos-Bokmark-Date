import axios from "axios"
import { useEffect, useState } from "react"

const Footer = () => {
    const [text,setText]=useState()

    useEffect(() => {
        axios
          .get('https://api.keybit.ir/ayamidanid/')
          .then((res) => {
            // console.log(res),
            setText(res.data.text)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [])
console.log(text);
    return ( 
        <section className="bottom-0 fixed w-full dark:bg-slate-700 dark:text-zinc-200 bg-indigo-100 rounded-t-lg shadow-2xl text-sm text-center h-10 flex items-center justify-center  text-indigo-900 font-bold">
            <div >{text}</div>
            <div>
                
            </div>
        </section>
     );
}
 
export default Footer;
