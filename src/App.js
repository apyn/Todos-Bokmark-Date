
import './App.css';
import Layout from './Components/Layout/Layout';
import LinkComponenet from './Components/LinkComponenet/LinkComponenet';
import Time from './Components/Time/Time';
import TodoList from './Components/Todos/TodoList';

function App() {
  return (
    // <div className='dark:bg-slate-800 h-auto w-full'>

    <Layout>
    <div className="container mx-auto">
      <div className='md:grid md:grid-cols-12 gap-4'>
       <div className='col-span-3  '>     
      <TodoList/>
       
         </div>
       <div className=' col-span-6'>
        <LinkComponenet/>
       </div>
       <div className='col-span-3'>
        <Time/>
       </div>
      </div>
    </div>
    </Layout>
    // </div>
  );
}

export default App;
