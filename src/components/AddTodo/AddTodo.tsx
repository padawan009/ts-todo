import { useAppDispatch } from "../../hooks";
import React, { useState } from "react";
import { addTodo } from "../../features/todos/todoSlice";
import styles from "./AddTodo.module.css";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  function handleAdd() {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  }
  return (
    <div className={styles.addBlock}>
      <input
        className={styles.addInput}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className={styles.addBtn} onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default AddTodo;
