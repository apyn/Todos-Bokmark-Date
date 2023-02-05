import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return ( 
       <div className='dark:bg-slate-800 min-h-screen'>
        <Header/>
        {children}
        <Footer/>
       </div>
     );
}
 
export default Layout;