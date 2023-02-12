import Footer from "./Footer";
import Header from "./Header";
import image from "../../Assets/Image/23.jpeg"
import { useState } from "react";
const Layout = ({children}) => {
 const [color,setColor]=useState(null)
  const backgroundStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${image})`
 };
    return ( 
       <div  style={ backgroundStyle  } className='dark:bg-slate-800 min-h-screen ' >
        <Header/>
        {children}
        <Footer/>
       </div>
     );
}
 
export default Layout;