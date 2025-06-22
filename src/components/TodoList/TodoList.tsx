import React from "react";
import styles from "./TodoList.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import checkPic from "./images/Check.svg";
import trashPic from "./images/TrashSimple.svg"
import { deleteTodo, toggleTodo } from "../../../src/features/todos/todoSlice";

function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos);
  const undoneTodos = todos.filter(todo => !todo.completed)
  const dispatch = useAppDispatch();

  return (
    undoneTodos.length > 0 && (
      <div className={styles.todoListBlock}>
      <h4>Tasks to do - {undoneTodos.length}</h4>
      <ul className={styles.todoList}>
        {undoneTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <div className={styles.btnContainer}>
              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                <img src={checkPic} alt="check pic" />
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                <img src={trashPic} alt="trash pic" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    )
    
  );
}

export default TodoList;
