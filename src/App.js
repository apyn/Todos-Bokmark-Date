import './App.css'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'
import TodoList from './Components/Todos/TodoList'
import FavoriteLink from './Components/FavoriteLink/FavoriteLink'
import Date from './Components/Date/Date'

function App() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-12  grid gap-4">
          <div className="col-span-3 ">
            <TodoList />
          </div>
          <div className="md:col-span-6 col-span-3 mb-8">
            <FavoriteLink />
          </div>
          <div className="col-span-3 ">
            <Date />
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
