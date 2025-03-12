
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='font-extrabold text-5xl'>Redux Toolkit Todo</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
