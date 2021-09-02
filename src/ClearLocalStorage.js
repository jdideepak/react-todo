const ClearLocalStorage = ({ todos, setTodos }) => {
  const handleOnClick = (e) => {
    console.log(e)
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify([]))
      setTodos([])
    }
  }

  if (todos.length)
    return (
      <button className="btn-clear-all-todo" onClick={(e) => handleOnClick()}>
        Clear All
      </button>
    )
  else return <></>
}

export default ClearLocalStorage
