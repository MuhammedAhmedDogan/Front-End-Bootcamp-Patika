import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

function App() {
  const [items, setItems] = useState([])

  return (
    <>
      <div className='header'><h1>todos</h1></div>
      <NewTodo items={items} setItems={setItems} />
      <TodoList items={items} setItems={setItems} />
    </>
  )
}

export default App
