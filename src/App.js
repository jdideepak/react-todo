import React, { useState } from "react"
import Header from "./Header"
import TodoForm from "./TodoForm"
import List from "./List"
import ClearLocalStorage from "./ClearLocalStorage"
import Alert from "./Alert"

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  )
  return (
    <>
      <Header />
      <Alert />
      <section className="section">
        <TodoForm todos={todos} setTodos={setTodos} />
      </section>
      <List todos={todos} setTodos={setTodos} />
      <ClearLocalStorage todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
