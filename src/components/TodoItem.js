import React from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, deleted, completed, setEdit }) => {
  return (
    <li className="list">
      <div className={`list-item ${todo.completed ? "complete" : ""}`}>
        {todo.title}
      </div>
      <div>
        <button className="button-complete" onClick={() => completed(todo)}>
          <FaCheckCircle />
        </button>
        <button className="button-edit" onClick={() => setEdit(todo)}>
          <FaEdit />
        </button>
        <button className="button-delete" onClick={() => deleted(todo)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
