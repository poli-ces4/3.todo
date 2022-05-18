import { useEffect } from "react";
import { v4 as uuid4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, edit, setEdit }) => {
  const handleInputChange = ({ target }) => {
    setInput(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      updateTodo(edit.id, input, edit.completed);
    } else {
      const newTodo = { id: uuid4(), title: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };
  const updateTodo = (id, title, completed) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    );
    setTodos(newTodos);
    setEdit(null);
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [edit, setInput]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter to Todo"
      />
      <button className="button-add" type="submit">
        {edit ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;
