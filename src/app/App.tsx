import React from 'react'
import AddTodo from '../components/AddTodo/AddTodo'
import styles from "./App.module.css"
import TodoList from '../components/TodoList/TodoList'
import DoneTodo from '../components/DoneTodo/DoneTodo'

function App() {
  return (
    <div className={styles.mainBlock}>
      <AddTodo />
      <TodoList />
      <DoneTodo />
    </div>
  )
}

export default App