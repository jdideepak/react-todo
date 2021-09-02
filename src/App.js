import React, { useState } from "react"
import Header from "./Header"
import TodoForm from "./TodoForm"
import List from "./List"

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  )
  return (
    <>
      <Header />
      <section className="section">
        <TodoForm todos={todos} setTodos={setTodos} />
      </section>
      <List todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
