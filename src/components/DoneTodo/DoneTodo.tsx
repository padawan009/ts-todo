import React from "react";
import styles from "./DoneTodo.module.css";
import { useAppSelector } from "../../hooks";

function DoneTodo() {
  const todos = useAppSelector((state) => state.todos.todos);
  const doneTodos = todos.filter((todo) => todo.completed === true);

  return (
    doneTodos.length > 0 && (
      <div className={styles.doneTodoBlock}>
        <h4>Done - {doneTodos.length}</h4>
        <ul className={styles.doneTodoList}>
            {doneTodos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
      </div>
    )
  );
}

export default DoneTodo;
