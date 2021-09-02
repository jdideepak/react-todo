const List = ({ todos, setTodos }) => {
  // console.log("here", todos)
  const deleteTodo = (e) => {
    // Search for getting id of clicked list
    // console.log("--------------------")
    // console.log(e.target.parentNode.parentNode.id)
    // console.log("--------------------")
    let id = e.target.parentNode.parentNode.id
    if (id) {
      const afterDeletion = todos.filter((item) => item.id !== id)
      // console.log(afterDeletion)
      localStorage.setItem("todos", JSON.stringify(afterDeletion))
      setTodos(afterDeletion)
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
        {/* {console.log(todos)}
        {console.log(typeof todos)} */}
        {todos.map((item) => (
          <li key={item.id} id={item.id}>
            {/* {console.log("okay here", item.id)} */}
            <span>{item.todo}</span>
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
