const List = ({ todos, setTodos }) => {
  console.log("here", todos)
  const deleteTodo = (e) => {
    let arr = [...todos]
    let str = e.target.parentNode.parentNode.innerText
    let idx = arr.indexOf(str)
    console.log(idx)
    if (idx !== -1) {
      arr.splice(idx, 1)
      setTodos(arr)
      localStorage.setItem("todos", JSON.stringify(arr))
    }
  }

  // Some UI pleasing elements when user hover over trash button
  const handleOnMouseEnter = (e) => {
    e.target.style.color = "#E03134"
  }
  const handleOnMouseLeave = (e) => {
    e.target.style.color = "black"
  }

  return (
    <div className="list">
      <ul>
        {console.log(todos)}
        {console.log(typeof todos)}
        {todos.map((todo) => (
          <li key={todo}>
            <span>{todo}</span>
            <button className="todo-delete-btn" onClick={(e) => deleteTodo(e)}>
              <i
                onMouseEnter={(e) => handleOnMouseEnter(e)}
                onMouseLeave={(e) => handleOnMouseLeave(e)}
                className="fas fa-trash fa-2x"
              ></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default List
