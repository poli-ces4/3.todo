import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, setEdit }) => {
  const completed = (todo) => {
    const newTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleted={handleDelete}
          completed={completed}
          setEdit={setEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
