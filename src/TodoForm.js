import { useState } from "react"

const TodoForm = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("")
  const addItem = (e) => {
    e.preventDefault()
    if (todo.length) {
      setTodos([...todos, todo])
      localStorage.setItem("todos", JSON.stringify([...todos, todo]))
    }
    setTodo("")
  }

  const handleInputChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <form>
      <label htmlFor="add-item">Add Item: </label>
      <input
        id="add-item"
        type="text"
        value={todo}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={(e) => addItem(e)} type="submit">
        Add
      </button>
    </form>
  )
}

export default TodoForm
